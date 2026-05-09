/**
 * Server-only Gemini helper: validates the client payload, calls the REST API,
 * and returns a plain object the HTTP layer can turn into JSON.
 *
 * Security: GEMINI_API_KEY is read only in Node (Vite plugin / server.mjs). It is
 * never sent to the browser or bundled into the client.
 */

/** Shown for upstream failures (rate limits, outages, network) — never leak raw API text. */
export const ASSISTANT_UNAVAILABLE_USER_MESSAGE =
  'AI assistant is temporarily unavailable. Please try again later.'

const GEMINI_URL =
  'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent'

const MAX_MESSAGES = 24
/** Per-message cap so one turn cannot blow request size or tokens. */
const MAX_MESSAGE_CHARS = 2000

/**
 * True when Gemini/Google indicates overload, quota, or rate limiting.
 * We treat these like "try again later" for the end user.
 */
function isRateOrCapacityIssue(status, apiError) {
  if (status === 429) return true
  if (status === 503 || status === 502) return true
  const code = apiError?.code
  const statusStr = apiError?.status
  if (code === 429 || code === 503) return true
  if (typeof statusStr === 'string' && statusStr.includes('RESOURCE_EXHAUSTED')) {
    return true
  }
  const msg = (apiError?.message || '').toLowerCase()
  return (
    msg.includes('quota') ||
    msg.includes('rate') ||
    msg.includes('resource exhausted') ||
    msg.includes('too many requests')
  )
}

/**
 * Calls Gemini with a short conversation history (user/model turns).
 * Throws on failure — caller maps all throws to ASSISTANT_UNAVAILABLE_USER_MESSAGE for clients.
 */
async function callGemini(apiKey, messages) {
  const url = `${GEMINI_URL}?key=${encodeURIComponent(apiKey)}`
  const body = {
    contents: messages.map((m) => ({
      role: m.role,
      parts: [{ text: m.text }],
    })),
  }

  let res
  try {
    res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
  } catch {
    // Network error, DNS, timeout — same UX as API down.
    throw new Error('network')
  }

  const data = await res.json().catch(() => ({}))

  if (!res.ok) {
    const apiError = data?.error
    // Always throw; handleAssistantPost converts to a safe user message (no raw Gemini text).
    if (isRateOrCapacityIssue(res.status, apiError)) {
      throw new Error('rate_or_capacity')
    }
    throw new Error('upstream')
  }

  const text =
    data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || ''

  if (!text) {
    throw new Error('empty')
  }

  return text
}

/**
 * Parses POST body, validates messages, returns HTTP status + JSON payload.
 * Client-facing `error` strings are safe to display; upstream details stay server-side.
 */
export async function handleAssistantPost(apiKey, bodyText) {
  if (!apiKey) {
    return {
      statusCode: 503,
      payload: { error: ASSISTANT_UNAVAILABLE_USER_MESSAGE },
    }
  }

  let parsed
  try {
    parsed = JSON.parse(bodyText || '{}')
  } catch {
    return {
      statusCode: 400,
      payload: { error: 'Invalid request. Please refresh and try again.' },
    }
  }

  const { messages } = parsed
  if (!Array.isArray(messages) || messages.length === 0) {
    return {
      statusCode: 400,
      payload: { error: 'Please enter a message to send.' },
    }
  }

  if (messages.length > MAX_MESSAGES) {
    return {
      statusCode: 400,
      payload: {
        error: `Too many messages in this chat (max ${MAX_MESSAGES}). Start a fresh topic.`,
      },
    }
  }

  for (const m of messages) {
    if (m.role !== 'user' && m.role !== 'model') {
      return {
        statusCode: 400,
        payload: { error: 'Invalid request. Please refresh and try again.' },
      }
    }
    if (typeof m.text !== 'string') {
      return {
        statusCode: 400,
        payload: { error: 'Invalid request. Please refresh and try again.' },
      }
    }
    const t = m.text.trim()
    if (!t) {
      return {
        statusCode: 400,
        payload: { error: 'Messages cannot be empty.' },
      }
    }
    if (t.length > MAX_MESSAGE_CHARS) {
      return {
        statusCode: 400,
        payload: {
          error: `Each message must be at most ${MAX_MESSAGE_CHARS} characters.`,
        },
      }
    }
  }

  // Normalize whitespace for the upstream request (validation already used trimmed length).
  const normalized = messages.map((m) => ({
    role: m.role,
    text: m.text.trim(),
  }))

  try {
    const text = await callGemini(apiKey, normalized)
    return { statusCode: 200, payload: { text } }
  } catch {
    // Rate limits, 5xx, network, empty model reply — one professional line for visitors.
    return {
      statusCode: 503,
      payload: { error: ASSISTANT_UNAVAILABLE_USER_MESSAGE },
    }
  }
}

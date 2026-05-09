/**
 * Server-only Gemini helper: validates the client payload, calls the REST API,
 * and returns a plain object the HTTP layer can turn into JSON.
 *
 * Security: GEMINI_API_KEY is read only in Node (Vite plugin / server.mjs). It is
 * never sent to the browser or bundled into the client.
 *
 * Request flow (interview-friendly):
 * 1) Frontend POSTs chat messages to /api/assistant.
 * 2) After validation, we always make ONE generateContent call to Gemini (no agent framework).
 * 3) That call includes a systemInstruction built from server/portfolio-context.mjs (real site/repo facts).
 * 4) Portfolio vs off-topic: we do not run regex or a second model to "classify" questions. The system
 *    instruction tells Gemini what is in scope and requires off-topic replies to use the exact
 *    PORTFOLIO_ASSISTANT_OFF_TOPIC_REPLY string from portfolio-context.mjs.
 */

import { buildPortfolioSystemInstruction } from './portfolio-context.mjs'

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
 * Calls Gemini with portfolio system instructions + conversation history.
 * Throws on failure — caller maps all throws to ASSISTANT_UNAVAILABLE_USER_MESSAGE for clients.
 */
async function callGemini(apiKey, messages) {
  const url = `${GEMINI_URL}?key=${encodeURIComponent(apiKey)}`
  const systemInstruction = buildPortfolioSystemInstruction()

  const body = {
    systemInstruction: {
      parts: [{ text: systemInstruction }],
    },
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
    throw new Error('network')
  }

  const data = await res.json().catch(() => ({}))

  if (!res.ok) {
    const apiError = data?.error
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

  const normalized = messages.map((m) => ({
    role: m.role,
    text: m.text.trim(),
  }))

  try {
    // Single Gemini call: systemInstruction (portfolio scope + off-topic rules) + chat contents.
    const text = await callGemini(apiKey, normalized)
    return { statusCode: 200, payload: { text } }
  } catch {
    return {
      statusCode: 503,
      payload: { error: ASSISTANT_UNAVAILABLE_USER_MESSAGE },
    }
  }
}

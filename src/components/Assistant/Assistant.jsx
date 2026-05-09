import { useState, useRef, useEffect } from 'react'
import { FiMessageCircle, FiX, FiSend } from 'react-icons/fi'
import './Assistant.scss'
import posthog from "posthog-js";

/**
 * Portfolio AI Assistant — floating chat; history in React state only (no DB).
 * Each send: POST /api/assistant with the transcript — the browser never sees GEMINI_API_KEY.
 * Scope and off-topic behavior are enforced server-side via Gemini system instructions + site facts.
 */

/** Must match server copy for network failures when the server does not respond with JSON. */
const ASSISTANT_UNAVAILABLE_USER_MESSAGE =
  'Magret\'s AI assistant is temporarily unavailable. Please try again later.'

const MAX_MESSAGE_CHARS = 2000

/**
 * Reads JSON from a Response, or null if the body is not valid JSON (never throws).
 */
async function safeReadJson(res) {
  try {
    return await res.json()
  } catch {
    return null
  }
}

/**
 * Maps any failure to a string safe to show in the UI (no stack traces, no raw upstream blobs).
 */
function userFacingErrorMessage(data, res) {
  if (data && typeof data.error === 'string' && data.error.trim()) {
    return data.error.trim()
  }
  if (!res.ok && (res.status >= 500 || res.status === 429)) {
    return ASSISTANT_UNAVAILABLE_USER_MESSAGE
  }
  return ASSISTANT_UNAVAILABLE_USER_MESSAGE
}

export default function Assistant() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const listRef = useRef(null)

  useEffect(() => {
    posthog.capture('AI_assistant_button_clicked', {
      page: window.location.pathname,
    });
  }, []);

  useEffect(() => {
    if (!open) return
    const el = listRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [messages, open, loading])

  async function send() {
    if (input.trim().length > 0) {
      posthog.capture('AI_assistant_message_sent', {
        message: input,
        page: window.location.pathname,
        location: 'assistant_section',
      });
    }

    const trimmed = input.trim()
    if (!trimmed || loading) return
    if (trimmed.length > MAX_MESSAGE_CHARS) return

    const nextMessages = [...messages, { role: 'user', text: trimmed }]
    setMessages(nextMessages)
    setInput('')
    setError(null)
    setLoading(true)

    try {
      const res = await fetch('/api/assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: nextMessages }),
      })

      const data = await safeReadJson(res)

      if (!res.ok) {
        setError(userFacingErrorMessage(data, res))
        setMessages((prev) => prev.slice(0, -1))
        setInput(trimmed)
        return
      }

      if (!data || typeof data.text !== 'string' || !data.text.trim()) {
        setError(ASSISTANT_UNAVAILABLE_USER_MESSAGE)
        setMessages((prev) => prev.slice(0, -1))
        setInput(trimmed)
        return
      }

      setMessages((prev) => [...prev, { role: 'model', text: data.text.trim() }])
    } catch {
      // Failed fetch, CORS edge case, or browser network offline — same copy as server outages.
      setError(ASSISTANT_UNAVAILABLE_USER_MESSAGE)
      setMessages((prev) => prev.slice(0, -1))
      setInput(trimmed)
    } finally {
      setLoading(false)
    }
  }

  function onKeyDown(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      send()
    }
  }

  const canSend =
    !loading && input.trim().length > 0 && input.trim().length <= MAX_MESSAGE_CHARS

  return (
    <div className="assistant">
      {open && (
        <section
          className="assistant__panel"
          aria-label="Chat assistant"
          aria-busy={loading}
        >
          <header className="assistant__header">
            <span className="assistant__title">Portfolio AI Assistant</span>
            <button
              type="button"
              className="assistant__icon-btn"
              onClick={() => setOpen(false)}
              disabled={loading}
              aria-label="Close assistant"
            >
              <FiX />
            </button>
          </header>

          <div className="assistant__body" ref={listRef}>
            {messages.length === 0 && !loading && (
              <p className="assistant__hint">
                Ask about Magret&apos;s projects, stack, experience,
                certifications, or how to connect — answers use this portfolio&apos;s content
                via Gemini on the server.
              </p>
            )}
            {messages.map((m, i) => (
              <div
                key={`${i}-${m.role}-${m.text.slice(0, 12)}`}
                className={`assistant__bubble assistant__bubble--${m.role}`}
              >
                {m.text}
              </div>
            ))}
            {loading && (
              <div
                className="assistant__bubble assistant__bubble--model assistant__loading"
                aria-live="polite"
                aria-label="Assistant is typing"
              >
                <span className="assistant__loading-dots" aria-hidden="true">
                  <span className="assistant__loading-dot" />
                  <span className="assistant__loading-dot" />
                  <span className="assistant__loading-dot" />
                </span>
                <span className="assistant__loading-text">Thinking</span>
              </div>
            )}
          </div>

          {error && (
            <p className="assistant__error" role="alert">
              {error}
            </p>
          )}

          <footer className="assistant__footer">
            <div className="assistant__input-wrap">
              <textarea
                className="assistant__input"
                rows={2}
                value={input}
                onChange={(e) =>
                  setInput(e.target.value.slice(0, MAX_MESSAGE_CHARS))
                }
                onKeyDown={onKeyDown}
                placeholder="Message…"
                disabled={loading}
                maxLength={MAX_MESSAGE_CHARS}
                aria-label="Message"
              />
              <span className="assistant__counter" aria-live="polite">
                {input.length}/{MAX_MESSAGE_CHARS}
              </span>
            </div>
            <button
              type="button"
              className="assistant__send"
              onClick={send}
              disabled={!canSend}
              aria-label="Send message"
              aria-disabled={!canSend}
            >
              <FiSend />
            </button>
          </footer>
        </section>
      )}

      <button
        type="button"
        className="assistant__fab"
        onClick={() => {
          posthog.capture('AI_assistant_open_button_clicked', {
            page: window.location.pathname,
            location: 'AI_assistant_section',
          });
          setOpen((v) => !v);
        }}
        aria-expanded={open}
        aria-label={open ? 'Close chat assistant' : 'Open chat assistant'}
      >
        <FiMessageCircle />
      </button>
    </div>
  )
}

import {
  handleAssistantPost,
  ASSISTANT_UNAVAILABLE_USER_MESSAGE,
} from '../../server/gemini-assistant.mjs'

const JSON_HEADERS = { 'Content-Type': 'application/json' }

export default async (request) => {
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: JSON_HEADERS,
    })
  }

  try {
    const bodyText = await request.text()
    const { statusCode, payload } = await handleAssistantPost(
      process.env.GEMINI_API_KEY,
      bodyText,
    )
    return new Response(JSON.stringify(payload), {
      status: statusCode,
      headers: JSON_HEADERS,
    })
  } catch {
    return new Response(
      JSON.stringify({ error: ASSISTANT_UNAVAILABLE_USER_MESSAGE }),
      { status: 503, headers: JSON_HEADERS },
    )
  }
}

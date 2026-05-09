import { loadEnv } from 'vite'
import {
  handleAssistantPost,
  ASSISTANT_UNAVAILABLE_USER_MESSAGE,
} from './server/gemini-assistant.mjs'

/**
 * During `npm run dev`, Vite only serves the React app. This plugin adds a tiny
 * POST /api/assistant handler so fetch('/api/assistant') works without a second process.
 */
export function assistantApiPlugin() {
  return {
    name: 'assistant-api',
    configureServer(server) {
      const env = loadEnv(server.config.mode, process.cwd(), '')
      const apiKey = env.GEMINI_API_KEY

      server.middlewares.use(async (req, res, next) => {
        if (req.url !== '/api/assistant' || req.method !== 'POST') {
          return next()
        }

        const chunks = []
        for await (const chunk of req) {
          chunks.push(chunk)
        }
        const bodyText = Buffer.concat(chunks).toString('utf8')

        try {
          const { statusCode, payload } = await handleAssistantPost(apiKey, bodyText)
          res.statusCode = statusCode
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify(payload))
        } catch {
          res.statusCode = 503
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ error: ASSISTANT_UNAVAILABLE_USER_MESSAGE }))
        }
      })
    },
  }
}

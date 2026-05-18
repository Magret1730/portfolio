#!/usr/bin/env node
/**
 * Minimal production-style server: serves `dist/` and POST /api/assistant.
 * Loads GEMINI_* from `.env` when not already set in the shell.
 * (Static hosts like GitHub Pages won't run this — use a Node host or split API elsewhere.)
 */

import http from 'http'
import fs from 'fs/promises'
import { readFileSync } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import {
  handleAssistantPost,
  ASSISTANT_UNAVAILABLE_USER_MESSAGE,
} from './server/gemini-assistant.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DIST = path.join(__dirname, 'dist')
const PORT = Number(process.env.PORT) || 4173

/** Loads GEMINI_API_KEY and GEMINI_URL from project `.env` if missing from process.env. */
function loadGeminiEnvFromDotenv() {
  try {
    const text = readFileSync(path.join(__dirname, '.env'), 'utf8')
    for (const line of text.split('\n')) {
      const trimmed = line.trim()
      if (!trimmed || trimmed.startsWith('#')) continue
      const eq = trimmed.indexOf('=')
      if (eq === -1) continue
      const key = trimmed.slice(0, eq).trim()
      if (key !== 'GEMINI_API_KEY' && key !== 'GEMINI_URL') continue
      if (process.env[key]) continue
      let value = trimmed.slice(eq + 1).trim()
      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1)
      }
      process.env[key] = value
    }
  } catch {
    // .env optional when vars are exported in the shell
  }
}

loadGeminiEnvFromDotenv()

const MIME = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.pdf': 'application/pdf',
  '.woff2': 'font/woff2',
}

async function serveGet(urlPath, res) {
  const safe = urlPath === '/' ? '/index.html' : urlPath
  const filePath = path.join(DIST, path.normalize(safe))

  if (!filePath.startsWith(DIST)) {
    res.writeHead(403).end()
    return
  }

  try {
    const data = await fs.readFile(filePath)
    const ext = path.extname(filePath)
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' })
    res.end(data)
  } catch {
    try {
      const html = await fs.readFile(path.join(DIST, 'index.html'))
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.end(html)
    } catch {
      res.writeHead(404).end('Not found')
    }
  }
}

const server = http.createServer(async (req, res) => {
  if (req.method === 'POST' && req.url === '/api/assistant') {
    const chunks = []
    for await (const chunk of req) {
      chunks.push(chunk)
    }
    const bodyText = Buffer.concat(chunks).toString('utf8')

    try {
      const { statusCode, payload } = await handleAssistantPost(
        process.env.GEMINI_API_KEY,
        bodyText,
      )
      res.writeHead(statusCode, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify(payload))
    } catch {
      res.writeHead(503, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify({ error: ASSISTANT_UNAVAILABLE_USER_MESSAGE }))
    }
    return
  }

  if (req.method === 'GET') {
    const urlPath = (req.url || '/').split('?')[0]
    await serveGet(urlPath, res)
    return
  }

  res.writeHead(405).end()
})

server.listen(PORT, () => {
  console.log(`Serving dist on http://localhost:${PORT}`)
})

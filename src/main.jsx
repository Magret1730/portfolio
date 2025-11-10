import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import posthog from 'posthog-js';
// import { PostHogProvider } from 'posthog/react';
import { PostHogProvider } from 'posthog-js/react'

// const options = {
//   api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
//   defaults: '2025-05-24',
// } as const

const options = {
  api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
  defaults: '2025-05-24',
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <PostHogProvider apiKey={import.meta.env.VITE_PUBLIC_POSTHOG_KEY} options={options}>
        <App />
      </PostHogProvider>
    </BrowserRouter>
  </StrictMode>
)

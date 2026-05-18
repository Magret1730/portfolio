# Personal Portfolio Website

This repository contains the source code for my personal portfolio website.  
It showcases my skills, projects, and professional background as a Software Developer.

## Features
- Responsive design (desktop, tablet, and mobile friendly)
- Navigation with active link highlighting
- Mobile-friendly hamburger menu with full-screen overlay
- Sections for:
  - About Me
  - Skills
  - Projects
  - Resume (downloadable PDF)
  - Contact form / Get in Touch button
- Built with clean, reusable React components and SCSS styling

## Tech Stack
- **Frontend:** React, React Router, SCSS
- **Icons:** React Icons
- **Deployment:** (Netlify)

## 🔧 Setup & Installation
1. Clone the repository 
`git clone https://github.com/Magret1730/portfolio.git`
2. Navigate into the project
`cd portfolio`
3. Install dependencies
`npm install`
4. Copy environment variables and fill in your values:
```bash
cp .env.example .env
```
5. Start the development server
`npm run dev`

### Portfolio AI assistant (local dev)

The chat widget calls `POST /api/assistant`. During `npm run dev`, the Vite plugin in `vite-plugin-assistant-api.js` handles that route and reads **server-only** variables from `.env` (not exposed to the browser):

| Variable | Required | Description |
|----------|----------|-------------|
| `GEMINI_API_KEY` | Yes | Google AI Studio API key |
| `GEMINI_URL` | Yes | Full `generateContent` URL for your model |

Example `GEMINI_URL`:
`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent`

If either is missing, `/api/assistant` returns 503. After `npm run build`, `npm start` reads `GEMINI_*` from `.env` (or from variables you export in the shell).

## License
This project is licensed under the [MIT License](./LICENSE).

## Contact
If you’d like to connect or collaborate:

- **Email**: [belloabiodun17@gmail.com](mailto:belloabiodun17@gmail.com)
- **GitHub**: [Magret1730](https://github.com/Magret1730)
- **LinkedIn**: [https://www.linkedin.com/in/oyedele-abiodun/](https://www.linkedin.com/in/oyedele-abiodun/)


<!--
# To do 
2. Add Snaps, Keyin last semester project(Context API)
3. Theme. dark and light view
4. Finetune README
5. Deploy it
6. Posthog to monitor activities
-->

<!-- 
To make chnages
1. Make chnages on develop branch
2. Create PR request on develop branch 
3. Merge PR request to main
4. Redeploy on netlify
5. On vscode, checkout to main... pull... checkout to develop... rebase main
 -->
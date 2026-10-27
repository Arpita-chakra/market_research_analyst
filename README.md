# Market Research Analyst

Market Research Analyst is an early-stage frontend for an AI-powered market
research workspace. The current project provides the initial dashboard layout
and a form for preparing a research request.

## What has been built so far

- Set up a React application using Vite.
- Added a dashboard shell with a sidebar, header, and main content area.
- Added navigation for **Research Overview**, **Competitor Analysis**, and
  **Research History**.
- Built a research request form with fields for:
  - Industry
  - Geography (India is selected by default)
  - Number of competitors (5 is selected by default)
  - A market research topic or prompt
- Added basic validation so a topic and industry are required before submitting.
- Added a request summary after submission. At this stage, the request is
  logged to the browser console; no report is generated.
- Added responsive styling for narrower screens.

## Current status

This is a frontend prototype. The research request is kept in React component
state only. There is not yet a backend, AI/API integration, saved report
history, or working competitor analysis. The Competitor Analysis and Research
History pages currently show placeholder content.

## Technology

- React 19
- Vite
- JavaScript and CSS

## Run locally

The application is in the `frontend` directory. From a terminal, run:

```bash
cd frontend
npm install
npm run dev
```

Vite prints the local development URL in the terminal.

## Available scripts

Run these commands from `frontend`:

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Check the code with ESLint |

## Main frontend files

| File | Purpose |
| --- | --- |
| `frontend/src/main.jsx` | Mounts the React application |
| `frontend/src/App.jsx` | Holds application state, navigation views, and form submission logic |
| `frontend/src/Header.jsx` | Displays the app title and system status |
| `frontend/src/Sidebar.jsx` | Renders the workspace navigation |
| `frontend/src/ResearchForm.jsx` | Renders the research request form |
| `frontend/src/App.css` | Dashboard and form styles |
| `frontend/src/index.css` | Global styles |

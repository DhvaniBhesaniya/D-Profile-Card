# Dhvani Profile Card

Interactive personal profile card built with React + Vite + Tailwind CSS.

## Features

- 3D tilt profile card interaction
- Responsive layout for desktop and mobile
- Social links and quick actions (Call, WhatsApp, Instagram)
- Copy card link button
- Custom cover image and profile branding

## Tech Stack

- React
- Vite
- Tailwind CSS
- Radix UI components
- Lucide icons

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Start dev server:

```bash
npm run dev
```

3. Open:

`http://localhost:8080`

## Build

```bash
npm run build
```

## Deploy To GitHub Pages (Single Command)

After your repository is pushed to GitHub and `origin` is configured:

```bash
npm run deploy
```

This command builds the app and pushes `dist` to the `gh-pages` branch using git subtree.

## GitHub Pages Setup (One-Time)

In your GitHub repository:

1. Go to **Settings** -> **Pages**
2. Under **Build and deployment**, set:
   - **Source**: `Deploy from a branch`
   - **Branch**: `gh-pages`
   - **Folder**: `/ (root)`
3. Save.

Your site will be published at:

`https://<your-github-username>.github.io/<repo-name>/`

## Notes

- Routing is configured with `HashRouter` for GitHub Pages compatibility.
- Vite `base` is set to relative (`./`) so project pages work without extra path configuration.

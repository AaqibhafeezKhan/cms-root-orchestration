# CMS Ultra — Root Orchestration Shell

The central orchestration layer for the **CMS Ultra** microfrontend platform. Built with [single-spa](https://single-spa.js.org/) and served via GitHub Pages.

## Architecture

```
cms-root-orchestration (this repo)
  └── Orchestrates four independent microfrontends via SystemJS import maps
        ├── cms-angular-auth     → /auth       (Angular 11)
        ├── cms-react-editorial  → /editorial  (React 17)
        ├── cms-svelte-collab    → /collab     (Svelte 3)
        └── cms-vue-media        → /media      (Vue 2)
```

## Live Demo

🌐 **Root Shell:** https://AaqibhafeezKhan.github.io/cms-root-orchestration

## Local Development

```bash
npm install
npm start   # → http://localhost:9000
```

> Update the `systemjs-importmap` in `public/index.html` to use `localhost` URLs for local MFE development.

## Production Build

```bash
npm run build
```

## Deployment

Deployed automatically to GitHub Pages via GitHub Actions on every push to `main`.

**Required repo setting:** Settings → Pages → Source: `gh-pages` branch

## Module Routes

| Route | MFE | Framework |
|-------|-----|-----------|
| `/auth` | cms-angular-auth | Angular 11 |
| `/editorial` | cms-react-editorial | React 17 |
| `/collab` | cms-svelte-collab | Svelte 3 |
| `/media` | cms-vue-media | Vue 2 |

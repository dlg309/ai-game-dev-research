# AI Game Lab

IS 218 research and planning notebook for making games with AI.

**Live site:** https://dlg309.github.io/ai-game-dev-research/

This repository contains the documentation site. The active Unity game is in [EchoMountainGame](https://github.com/dlg309/EchoMountainGame); start with the [engineering plan](docs/spec/tech-spec.md) and [gated roadmap](docs/roadmap.md).

## Local development

```sh
npm ci
npm run docs:dev
```

Build with `npm run docs:build`. Preview with `npm run docs:preview`.

Edit Markdown under `docs/`. Navigation and site settings live in `docs/.vitepress/config.mts`. Pushes to `main` build and deploy to GitHub Pages through Actions.

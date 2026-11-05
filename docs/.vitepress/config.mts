import { defineConfig } from 'vitepress'
export default defineConfig({
  title: 'AI Game Lab',
  description: 'Research, compare, and plan games made with AI. An IS 218 notebook.',
  base: '/ai-game-dev-research/',
  lang: 'en-US',
  lastUpdated: true,
  themeConfig: {
    siteTitle: 'AI Game Lab',
    nav: [{ text: 'Research', link: '/research/overview' }, { text: 'Planning', link: '/planning/roadmap' }, { text: 'Sources', link: '/research/sources' }],
    sidebar: [
      { text: 'START HERE', items: [{ text: 'Project overview', link: '/start' }] },
      { text: 'RESEARCH', items: [{ text: 'AI in game development', link: '/research/overview' }, { text: 'Engine comparison', link: '/research/engines' }, { text: 'Source library', link: '/research/sources' }] },
      { text: 'PLANNING', items: [{ text: 'Roadmap', link: '/planning/roadmap' }, { text: 'Game ideas', link: '/planning/ideas' }, { text: 'Decision log', link: '/planning/decisions' }] }
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/dlg309/ai-game-dev-research' }],
    search: { provider: 'local' },
    editLink: { pattern: 'https://github.com/dlg309/ai-game-dev-research/edit/main/docs/:path', text: 'Edit this page on GitHub' },
    footer: { message: 'IS 218 · Research & planning', copyright: 'Started November 5, 2026 · A living notebook' }
  }
})

import { defineConfig } from 'vitepress'
export default defineConfig({
  title: 'AI Game Dev Research',
  description: 'IS218 Creative Project Plan & Agent Development Hub',
  base: '/ai-game-dev-research/',
  lang: 'en-US',
  lastUpdated: true,
  themeConfig: {
    siteTitle: 'AI Game Dev Research',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Project Spec', link: '/spec/tech-spec' },
      { text: 'Research Log', link: '/research/' },
      { text: 'Snowboarding', link: '/research/snowboarding' },
      { text: 'Peer Reviews', link: '/reviews/' },
      { text: 'Roadmap', link: '/roadmap' }
    ],
    sidebar: [
      {
        text: 'START HERE',
        items: [
          { text: 'Project overview', link: '/start' }
        ]
      },
      {
        text: 'RESEARCH',
        items: [
          { text: 'AI in game development', link: '/research/overview' },
          { text: 'Engine comparison', link: '/research/engines' },
          { text: 'Source library', link: '/research/sources' },
          { text: 'Source & AI Log', link: '/research/' },
          { text: 'Snowboard game research', link: '/research/snowboarding' }
        ]
      },
      {
        text: 'PLANNING',
        items: [
          { text: 'Roadmap', link: '/planning/roadmap' },
          { text: 'Game ideas', link: '/planning/ideas' },
          { text: 'Decision log', link: '/planning/decisions' }
        ]
      },
      {
        text: 'IS218 DELIVERABLES',
        items: [
          { text: 'Concept Comparison', link: '/spec/concepts' },
          { text: 'Technical Spec & Architecture', link: '/spec/tech-spec' },
          { text: 'Project Roadmap', link: '/roadmap' },
          { text: 'Peer Review Loop', link: '/reviews/' }
        ]
      }
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/dlg309/ai-game-dev-research' }],
    search: { provider: 'local' },
    editLink: { pattern: 'https://github.com/dlg309/ai-game-dev-research/edit/main/docs/:path', text: 'Edit this page on GitHub' },
    footer: { message: 'IS 218 · Research & planning', copyright: 'Started November 5, 2026 · A living notebook' }
  }
})

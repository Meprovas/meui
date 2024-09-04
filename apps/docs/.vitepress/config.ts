import path from 'node:path';

import { defineConfig } from 'vitepress';

import tailwind from 'tailwindcss';
import autoprefixer from 'autoprefixer';

import ComponentPreviewPlugin from './theme/plugins/previewer';
import CodeWrapperPlugin from './theme/plugins/codewrapper';

export default defineConfig({
  title: 'MeUI',
  description: 'Crafting Bold, Functional UIs with Neo Brutalism',
  lang: 'en-US',
  cleanUrls: true,
  // If this is disabled, when building it it will give deadlink errors if your markdown has the wrong links
  ignoreDeadLinks: true,
  head: [
    [
      'link',
      {
        href: 'https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100..900;1,100..900&display=swap',
        rel: 'stylesheet',
      },
    ],
  ],

  appearance: false,
  themeConfig: {
    logo: '/logo-big.svg',
    siteTitle: 'MeUI',
    search: {
      provider: 'local',
    },
    // Navbar Link
    nav: [{ text: 'Guide', link: '/getting-started' }],
    // Social Icons
    socialLinks: [
      { icon: 'github', link: 'https://github.com/meprovas/meui' },
      { icon: 'twitter', link: 'https://twitter.com/pedrohavay' },
    ],
    // Sidebar
    sidebar: [
      {
        text: 'Introduction',
        collapsed: false,
        items: [
          { text: 'What is MeUI?', link: '/overview' },
          { text: 'Getting Started', link: '/getting-started' },
        ],
      },
      {
        text: 'Core Concepts',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/core-concepts' },
          { text: 'Colors', link: '/core-concepts/colors' },
          { text: 'Typography', link: '/core-concepts/typography' },
        ],
      },
      {
        text: 'Components',
        collapsed: false,
        items: [
          { text: 'Accordion', link: '/components/accordion' },
          { text: 'Alerts', link: '/components/alerts' },
          // { text: 'Avatar', link: '/components/avatar' },
          // { text: 'Breadcrumb', link: '/components/breadcrumb' },
          { text: 'Badge', link: '/components/badge' },
          { text: 'Button', link: '/components/button' },
        ],
      },
    ],
    // you can disable the previous and next page here
    docFooter: {
      prev: false,
      next: true,
    },
    editLink: {
      pattern: 'https://github.com/meprovas/meui/edit/main/apps/docs/:path',
      text: 'Edit this page on GitHub',
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present MeUI',
    },

    // Mobile Config only
    returnToTopLabel: 'Go to Top',
    sidebarMenuLabel: 'Menu',
  },
  srcDir: path.resolve(__dirname, '../src/'),
  markdown: {
    config(md) {
      md.use(CodeWrapperPlugin);
      md.use(ComponentPreviewPlugin);
    },
  },
  rewrites: {
    'content/(.*)': '(.*)',
  },
  vite: {
    base: '/',
    css: {
      postcss: {
        plugins: [tailwind() as any, autoprefixer()],
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '../src/'),
      },
    },
  },
});

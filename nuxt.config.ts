// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: false },
  css: ['~/assets/global.css'],
  vite: {
    optimizeDeps: {
      include: ['ogl']
    }
  },
  app: {
    head: {
      title: 'Truqen — Next-gen Interactive Interfaces',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Truqen — next-generation interfaces powered by real-time physics and cursor-aware animations.',
        },
      ],
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    },
  },
})

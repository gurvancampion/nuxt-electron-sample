import type { ElectronOptions } from 'nuxt-electron'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  router: {
    options: {
      hashMode: true,
    },
  },
  app: {
    baseURL: './',
  },
  modules: [
    ['nuxt-electron', <ElectronOptions>{
      include: ['electron', 'server'],
    }],
  ],
})


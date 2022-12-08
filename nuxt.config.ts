import { withElectron } from 'nuxt-plugin-electron'

// https://nuxt.com/docs/api/configuration/nuxt-config
const nuxtConfig = defineNuxtConfig({
  ssr: false,
})

export default withElectron({
  include: ['electron'],
})(nuxtConfig)

// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: false },
  pages: true,
  app: {
    head: {
      titleTemplate: '%s - Nuxt3-vuetify3',
      title: 'Nuxt3-vuetify3',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      script: []
    }
  },
  css: [
    '@mdi/font/css/materialdesignicons.min.css',
    'vuetify/lib/styles/main.sass'
  ],
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],
  modules: [
    async (options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) =>
        // @ts-ignore
        config.plugins.push(
          vuetify({
            autoImport: true,
            styles: {
              configFile: 'assets/scss/settings.scss'
            }
          })
        )
      )
    }
  ],
  vite: {
    define: {
      'process.env.DEBUG': false
    }
  },
  build: { transpile: ['vuetify'] },
  sourcemap: {
    server: false,
    client: false
  }
})

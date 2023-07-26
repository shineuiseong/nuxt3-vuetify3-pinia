import vuetify from 'vite-plugin-vuetify'
import svgLoader from 'vite-svg-loader'
import dotenv from 'dotenv'

const envPath = `env/.env.${process.env.NODE_ENV}`
dotenv.config({ path: envPath })

export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
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
  css: [],
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],
  modules: [
    '@pinia/nuxt',
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
    },
    plugins: [svgLoader()]
  },
  vue: {
    runtimeCompiler: true
  },
  build: { transpile: ['vuetify'] },
  sourcemap: {
    server: false,
    client: false
  }
})

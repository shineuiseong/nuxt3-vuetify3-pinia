import vuetify from 'vite-plugin-vuetify'
import svgLoader from 'vite-svg-loader'
import dotenv from 'dotenv'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'
import VueI18nVitePlugin from '@intlify/unplugin-vue-i18n/vite'

const envPath = `env/.env.${process.env.NODE_ENV}`

dotenv.config({ path: envPath })

export default defineNuxtConfig({
  experimental: {
    watcher: 'chokidar'
  },
  ssr: false,
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
  css: [],
  components: [
    '~/components',
    {
      path: '~/components/test/',
      prefix: 'test'
    }
  ],
  nitro: {
    baseURL: process.env.AXIOS_BASE_URL,
    routeRules: {
      '/api/**': {
        proxy: {
          to: `${process.env.API_DEV}/**`
        }
      }
    }
  },
  modules: [
    '@nuxt/devtools',
    '@nuxtjs/device',
    '@pinia/nuxt',
    '@vee-validate/nuxt',
    async (options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config: any) =>
        config.plugins.push(
          vuetify({
            styles: {
              configFile: 'assets/scss/settings.scss'
            }
          })
        )
      )
    }
  ],
  imports: {
    dirs: ['./stores']
  },
  pinia: {
    autoImports: ['defineStore', 'acceptHMRUpdate']
  },
  veeValidate: {
    autoImports: true,
    componentNames: {
      Form: 'VeeForm',
      Field: 'VeeField',
      FieldArray: 'VeeFieldArray',
      ErrorMessage: 'VeeErrorMessage'
    }
  },
  vite: {
    define: {
      'process.env.DEBUG': false
    },
    plugins: [
      VueI18nVitePlugin({
        include: [
          resolve(dirname(fileURLToPath(import.meta.url)), './locales/**')
        ]
      }),
      svgLoader()
    ]
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

import { createVuetify, ThemeDefinition } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.min.css'
import 'vuetify/lib/styles/main.sass'

const LightTheme: ThemeDefinition = {
  variables: {},
  colors: {
    primary: '#4376fb',
    accent: '#757575',
    secondary: '#FF8F00',
    info: '#26A69A',
    warning: '#FFC107',
    error: '#bb252a',
    success: '#4CAF50'
  }
}

export default defineNuxtPlugin((NuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    ssr: true,
    theme: {
      themes: {
        light: LightTheme,
        variables: {}
      }
    },
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi
      }
    }
  })

  NuxtApp.vueApp.use(vuetify)
})

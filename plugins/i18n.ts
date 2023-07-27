import { createI18n } from 'vue-i18n'
import ko from '../locales/ko/ko.json'
import en from '../locales/en/en.json'

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    fallbackLocale: 'en',
    locale: 'ko',
    messages: {
      en,
      ko
    }
  })
  vueApp.use(i18n)
})

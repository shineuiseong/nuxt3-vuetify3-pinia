import { createI18n } from 'vue-i18n'
import { configure, defineRule } from 'vee-validate'
import Rules from '@vee-validate/rules'
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
  Object.keys(Rules).forEach((rule) => {
    defineRule(rule, Rules[rule])
  })
  defineRule('password', (value: string) => {
    const regExp =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{10,20}$/
    // @ts-ignore
    if (!regExp.test(value)) {
      return false
    }
    return true
  })
  configure({
    generateMessage: (context) => {
      return i18n.global.t(`messages.${context.rule?.name}`, {
        field: context.field
      })
    }
  })
  vueApp.use(i18n)
})

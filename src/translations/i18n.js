import { createI18n } from 'vue-i18n'
import en from './locales/en'
import ro from './locales/ro'
import de from './locales/de'
const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'ro',
  allowComposition: true,
  messages: {
    en,
    ro,
    de,
  },
})
export default i18n

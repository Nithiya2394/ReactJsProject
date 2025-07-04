import { createInstance } from 'i18next';
import en from '../assets/localize/en.json';
import ta from '../assets/localize/ta.json';

const i18n = createInstance({
  compatibilityJSON: 'v4',
  // the translations
  // (tip move them in a JSON file and import them,
  // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
  resources: {
    en: { translation: en },
    ta: { translation: ta },
  },
  lng: 'en', // if you're using a language detector, do not define the lng option
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
  },
});

i18n.init();

export default i18n;

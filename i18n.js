// i18n.js
import 'intl-pluralrules'; // Importa el polyfill
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './Locales/en.json';
import esTranslations from './Locales/es.json';

const resources = {
  'en': { translation: enTranslations },
  'es': { translation: esTranslations },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es', // Idioma predeterminado
    fallbackLng: 'en', // Idioma de respaldo en caso de que la traducción no esté disponible
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

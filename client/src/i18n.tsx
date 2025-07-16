import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import commonFR from './locales/fr/common.json';
import commonEN from './locales/en/common.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      fr: { common: commonFR },
      en: { common: commonEN }
    },
    lng: 'fr',               // langue par défaut
    fallbackLng: 'fr',
    ns: ['common'],
    defaultNS: 'common',
    interpolation: { escapeValue: false },
  });

export default i18n;

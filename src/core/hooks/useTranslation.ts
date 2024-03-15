import translations from '../utils/translations';

export default function useTranslation(locale = 'en') {
  function t(key) {
    if (!translations[locale][key]) {
      console.warn(`Translation '${key}' for locale '${locale}' not found.`);
    }
    return translations[locale][key];
  }

  return { t };
}

import React, { createContext, useContext } from 'react';
import translations from '../utils/translations';

const TranslationContext = createContext({
  t: (value: string) => {
    return value;
  }
});

export const TranslationProvider = ({ children, locale }) => {
  const t = (key) => {
    if (!translations[locale][key]) {
      console.warn(`Translation '${key}' for locale '${locale}' not found.`);
    }
    return translations[locale][key];
  };

  return (
    <TranslationContext.Provider value={{ t }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => useContext(TranslationContext);

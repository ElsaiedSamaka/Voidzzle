import { useRouter } from 'next/router';
import { useCallback } from 'react';
import useTranslation from '../../../core/hooks/useTranslation';

const LanguageSwitcher = () => {
  const router = useRouter();
  const { locale, pathname } = useRouter();
  const { t } = useTranslation(locale);
  const handleClick = useCallback(() => {
    router.push(pathname, pathname, { locale: locale === 'ar' ? 'en' : 'ar' });
  }, [locale]);
  return (
    <button
      className="lang-switch-btn flex space-x-1 p-2 mr-1 rounded-lg  focus:ring-2 focus:ring-gray-300"
      onClick={handleClick}
    >
      <span className="sr-only">Change Lang</span>
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
        />
      </svg>
      <span>{t('lang')}</span>
    </button>
  );
};

export default LanguageSwitcher;

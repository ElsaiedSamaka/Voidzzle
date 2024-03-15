import classNames from 'classnames';
import { useThemeContext } from 'core/context/ThemeContext';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const Anchor = ({ children, href }) => {
  const pathname = usePathname();
  const { theme } = useThemeContext();
  const active = href === pathname;
  const { mode } = theme;

  return (
    <Link
      href={href}
      className={classNames(
        'ltr:rounded-l-none rtl:rounded-r-none ltr:hover:border-l-4 rtl:hover:border-r-4 outline-none transition-all duration-100 ease-in-out rounded-2xl block text-sm',
        {
          'ltr:border-l-4 rtl:border-r-4 font-bold': active,
        },
        {
          'ltr:border-l-light-primary rtl:border-r-light-primary':
            mode === 'light',
        },
        {
          'ltr:border-l-dark-primary rtl:border-r-dark-primary':
            mode === 'dark',
        },
      )}
    >
      {children}
    </Link>
  );
};

export default Anchor;

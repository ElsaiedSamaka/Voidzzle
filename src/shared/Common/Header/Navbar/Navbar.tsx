import logo from '/public/images/favicon.png';
// packages
import classNames from 'classnames';
// hooks
import { useThemeContext } from 'core/context/ThemeContext';
import { usePathname } from 'next/navigation';
import { useDrawerContext } from 'core/context/DrawerContext';
import { useSelector } from 'react-redux';
import { RootState } from 'core/store';
import { useRouter } from 'next/router';
import useTranslation from 'core/hooks/useTranslation';
// components
import SearchForm from './searchForm/searchForm';
import NotificationBell from './NotificationBell/notificationBell';
import UserMenu from './UserMenu/UserMenu';
// builtin components
import Link from 'next/link';
import Image from 'next/image'
const Navbar = () => {
  const { state, toggleDrawer } = useDrawerContext();
  const { theme } = useThemeContext();
  const { mode } = theme;

  const pathname = usePathname();
  const isHomePath = pathname === '/';
  const router = useRouter();
  const { locale } = router;
  const { t } = useTranslation(locale);

  const authSlice = useSelector((state: RootState) => state.user);
  return (
    <nav
      className={classNames('border-b px-4 py-1 z-30 w-full backdrop-blur-md', {
        'bg-dark-bgPrimary border-dark-border': mode === 'dark',
        'bg-light-bgPrimary border-light-border': mode === 'light',
      })}
    >
      <div
        className={classNames('flex flex-wrap justify-between items-center', {
          'text-dark-textPrimary': mode === 'dark',
          'text-light-textPrimary': mode === 'light',
        })}
      >
        <div className="flex justify-start items-center">
          <button
            onClick={() => toggleDrawer(!state.showDrawer)}
            data-drawer-target="drawer-navigation"
            data-drawer-toggle="drawer-navigation"
            className="p-2 mr-2 rounded-lg cursor-pointer md:hidden  focus:bg-gray-100 :focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 "
          >
            <svg
              aria-hidden="true"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              aria-hidden="true"
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">Toggle sidebar</span>
          </button>
          <a
            href="https://voidzzle.com"
            className="flex items-center justify-between mr-4"
          >
            <Image
              src={logo.src}
              className="mr-3 rounded-full h-8"
              width={10}
              height={10}
              alt="Voidzzle Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              Voidzzle
            </span>
          </a>
          {isHomePath && <SearchForm />}
        </div>
        <div className="flex items-center lg:order-2">
          <button
            type="button"
            data-drawer-toggle="drawer-navigation"
            className="p-2 mr-1  rounded-lg md:hidden hover:text-gray-900 hover:bg-white/10  focus:ring-4 focus:ring-gray-300 "
          >
            <span className="sr-only">Toggle search</span>
            <svg
              aria-hidden="true"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              />
            </svg>
          </button>
          {authSlice.user ? (
            <>
              <NotificationBell />
              <UserMenu />
            </>
          ) : (
            <div className="auth space-x-2">
              <Link href="/auth/signin">
                <button
                  className={classNames(
                    'bg-transparent hover:shadow-red-600/40 border border-red-600/40 rounded-3xl px-4 py-1.5  transition-all hover:opacity-90 hover:shadow',
                  )}
                >
                  {t('navbar.Sign In')}
                </button>
              </Link>
              <Link href="/auth/signup">
                <button
                  className={classNames(
                    'hover:shadow-red-600/40 rounded-3xl px-4 py-1.5  transition-all hover:opacity-90 hover:shadow ',
                    {
                      'bg-dark-primary text-dark-textPrimary disabled:bg-dark-bgDisabled':
                        mode === 'dark',
                      'bg-light-primary text-white disabled:bg-light-bgDisabled':
                        mode === 'light',
                    },
                  )}
                >
                  {t('navbar.Sign Up')}
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

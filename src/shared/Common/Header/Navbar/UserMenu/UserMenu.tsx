import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useThemeContext } from 'core/context/ThemeContext';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'core/store';
import { logoutThunk } from 'core/store/auth/user.thunk';
import { useTranslation } from 'core/context/TranslationContext';

const UserMenu = () => {
  const { t } = useTranslation();

  const [showUserMenuDDL, setUserMenuDDL] = useState(false);
  const authSlice = useSelector((state: RootState) => state.user);
  const { user, tokens } = authSlice;

  const dispatch = useDispatch();

  const {
    theme: { mode },
  } = useThemeContext();

  function toggleUserMenu() {
    setUserMenuDDL(!showUserMenuDDL);
  }

  function handleLogoutDispatch(): void {
    dispatch(logoutThunk({ refreshToken: tokens?.refreshToken }));
  }

  return (
    <>
      <button
        onClick={toggleUserMenu}
        type="button"
        className="flex mx-3 text-sm rounded-full md:mr-0 focus:ring-4 focus:ring-white/10"
        id="user-menu-button"
      >
        <span className="sr-only">Open user menu</span>
        <svg
          className="w-7 h-7 bg-black/50 rounded-full text-white/70"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
      </button>
      <div
        className={classNames(
          'absolute opacity-0 transition-all duration-300 top-10 ltr:right-5 rtl:left-5 z-50 my-4 w-56 text-base list-none   divide-y  shadow-xl rounded-xl',
          { ' opacity-100 -translate-x-5': showUserMenuDDL },
          { hidden: !showUserMenuDDL },
          {
            'bg-dark-bgSecondary text-dark-textSecondary divide-dark-border':
              mode === 'dark',
            'bg-light-bgPrimary text-light-textSecondary divide-light-border':
              mode === 'light',
          },
        )}
        id="dropdown"
      >
        <div className="py-3 px-4">
          <span className="block text-sm font-semibold  ">
            {user?.firstname} {user?.lastname}
          </span>
          <span className="block text-sm  truncate ">{user?.email}</span>
        </div>
        <ul className="py-1  " aria-labelledby="dropdown">
          <li>
            <Link
              href={{
                pathname: '/profile',
                query: { name: 'test' },
              }}
              className="block  w-full py-2 px-4 text-sm hover:cursor-pointer hover:font-semibold transition-all duration-300"
            >
              {t('usermenu.My profile')}
            </Link>
          </li>
          <li>
            <Link
              href="/settings/account"
              className="block py-2 px-4 text-sm hover:cursor-pointer hover:font-semibold transition-all duration-300"
            >
              {t('usermenu.Account settings')}
            </Link>
          </li>
        </ul>
        <ul className="py-1" aria-labelledby="dropdown">
          <li>
            <a className="flex items-center py-2 px-4 text-sm hover:cursor-pointer hover:font-semibold transition-all duration-300">
              <svg
                className="mr-2 w-5 h-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
              {t('usermenu.My likes')}
            </a>
          </li>
        </ul>
        <ul className="py-1" aria-labelledby="dropdown">
          <li>
            <a
              onClick={handleLogoutDispatch}
              className="block py-2 px-4 text-sm hover:cursor-pointer hover:font-semibold transition-all duration-300"
            >
              {t('usermenu.Sign out')}
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

UserMenu.propTypes = {};

export default UserMenu;

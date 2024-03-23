import React, { useState } from 'react';
import classNames from 'classnames';
import Image from 'next/image';
import { useThemeContext } from 'core/context/ThemeContext';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'core/store';
import { logoutThunk } from 'core/store/user/user.thunk';

const UserMenu = () => {
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

  function handleDispatch(): void {
    dispatch(logoutThunk(tokens?.refreshToken || ''));
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
        <Image
          className="w-8 h-8 rounded-full"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png"
          alt="user photo"
          width={10}
          height={10}
        />
      </button>
      <div
        className={classNames(
          'absolute opacity-0 transition-all duration-300 top-10 right-5 z-50 my-4 w-56 text-base list-none   divide-y  shadow-xl rounded-xl',
          { 'opacity-100 -translate-x-5': showUserMenuDDL },
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
            <a className="block py-2 px-4 text-sm hover:cursor-pointer hover:font-semibold transition-all duration-300">
              My profile
            </a>
          </li>
          <li>
            <a className="block py-2 px-4 text-sm hover:cursor-pointer hover:font-semibold transition-all duration-300">
              Account settings
            </a>
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
              My likes
            </a>
          </li>
        </ul>
        <ul className="py-1" aria-labelledby="dropdown">
          <li>
            <a
              onClick={handleDispatch}
              className="block py-2 px-4 text-sm hover:cursor-pointer hover:font-semibold transition-all duration-300"
            >
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

UserMenu.propTypes = {};

export default UserMenu;

import { useDrawerContext } from 'core/context/DrawerContext';
import { useThemeContext } from 'core/context/ThemeContext';
import { useEffect } from 'react';
import Anchor from 'shared/Common/Anchor/Anchor';
import LanguageSwitcher from 'shared/Common/LanguageSwitcher/LanguageSwitcher';
import classnames from 'classnames';
import ThemeSwitcher from 'shared/Common/ThemeSwitcher/ThemeSwitcher';
import { useRouter } from 'next/router';
import useTranslation from 'core/hooks/useTranslation';
const Aside = () => {
  const { state, toggleDrawer } = useDrawerContext();
  const { showDrawer } = state;
  const { theme } = useThemeContext();
  const { mode } = theme;
  const { locale, pathname } = useRouter();
  const { t } = useTranslation(locale);

  return (
    <aside
      className={classnames(
        'fixed top-0 ltr:left-0 rtl:right-0 z-20 w-64 h-screen pt-14 transition-transform -translate-x-full  ltr:border-r rtl:border-l  md:translate-x-0 ',
        { 'translate-x-0': showDrawer },
        { '-translate-x-full': !showDrawer },
        {
          'bg-light-bgPrimary text-light-textPrimary border-light-border':
            mode === 'light',
        },
        {
          'bg-dark-bgPrimary text-dark-textPrimary border-dark-border':
            mode === 'dark',
        },
      )}
      aria-label="Sidenav"
      id="drawer-navigation"
    >
      {/* top side bar nav */}
      <div
        className={classnames(
          'overflow-y-auto py-5 px-3 h-full',
          { 'bg-light-bgPrimary': mode === 'light' },
          { 'bg-dark-bgPrimary': mode === 'dark' },
        )}
      >
        <form className="md:hidden mb-2">
          <label htmlFor="sidebar-search" className="sr-only">
            Search
          </label>
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5  "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                />
              </svg>
            </div>
            <input
              type="text"
              name="search"
              id="sidebar-search"
              className="bg-gray-50 p-2 border border-gray-300 text-gray-900  rounded-2xl focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 "
              placeholder="Search"
            />
          </div>
        </form>
        <ul className="space-y-2 rounded-2xl">
          <li>
            <Anchor href="/">
              <div className="p-2 flex items-center  text-base ltr:rounded-l-none rtl:rounded-r-none rounded-2xl  hover:bg-white/20  group">
                <svg
                  className="w-6 h-6  transition duration-75   group-hover:animate-pulse  "
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>

                <span className="ltr:ml-3 rtl:mr-3">{t('aside.home')}</span>
              </div>
            </Anchor>
          </li>
          <li>
            <Anchor href="/profile">
              <div className="relative transition">
                <div className="p-2 flex items-center text-base ltr:rounded-l-none rtl:rounded-r-none rounded-2xl hover:bg-white/20 group">
                  <svg
                    className="flex-shrink-0 w-6 h-6  transition
                duration-75  group-hover:animate-pulse
                "
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>

                  <span className="ltr:ml-3 rtl:mr-3">
                    {t('aside.profile')}
                  </span>
                </div>
              </div>
            </Anchor>
          </li>
          <li>
            <div className="relative transition">
              <input
                className="peer hidden"
                type="checkbox"
                id="menu-1"
                defaultChecked={false}
              />
              <button className="group flex peer relative w-full items-center ltr:border-l-black ltr:hover:border-l-4 rtl:border-r-black rtl:hover:border-r-4 py-3 px-2  outline-none transition-all duration-100 ease-in-out  ">
                <span className="flex ltr:mr-6 rtl:ml-6 w-6 ">
                  <svg
                    className="w-6 h-6 group-hover:animate-spin "
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
                    ></path>
                  </svg>
                </span>
                {t('aside.settings')}
                <label
                  htmlFor="menu-1"
                  className="absolute inset-0 h-full w-full cursor-pointer"
                />
              </button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="arrow-down-icon absolute ltr:right-0 rtl:left-0 top-4 ltr:ml-auto rtl:mr-auto ltr:mr-5 rtl:ml-auto h-4  transition peer-checked:rotate-180 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              <ul
                className={classnames(
                  'duration-400 flex m-2 max-h-0 flex-col overflow-hidden rounded-xl   transition-all duration-300 peer-checked:max-h-96',
                  {
                    'bg-light-bgSecondary text-light-textSecondary':
                      mode == 'light',
                  },
                  {
                    'bg-dark-bgSecondary text-dark-textSecondary':
                      mode === 'dark',
                  },
                )}
              >
                <li className="flex m-2 cursor-pointer border-l-black text-sm ">
                  <Anchor href="/settings/billing">
                    <span className="mr-5 flex items-center gap-5 py-3 pl-5 transition-all duration-100 ease-in-out  hover:text-black">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                        />
                      </svg>
                      Billing
                    </span>
                  </Anchor>
                </li>
                <li className="flex m-2 cursor-pointer border-l-black text-sm ">
                  <Anchor href="/settings/notifications">
                    <span className="mr-5 flex items-center gap-5 py-3 pl-5 transition-all duration-100 ease-in-out  hover:text-black">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
                        />
                      </svg>
                      Notifications
                    </span>
                  </Anchor>
                </li>
                <li className="flex m-2 cursor-pointer border-l-black text-sm ">
                  <Anchor href="/settings/account">
                    <span className="mr-5 flex items-center gap-5 py-3 pl-5 transition-all duration-100 ease-in-out  hover:text-black">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      Account
                    </span>
                  </Anchor>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Anchor href="/messages">
              <div className="flex items-center text-base ltr:rounded-l-none rtl:rounded-r-none rounded-2xl hover:bg-white/20 group p-2 ">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6  transition duration-300  group-hover:animate-bounce "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z" />
                  <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
                </svg>
                <span className="flex-1 ltr:ml-3 rtl:mr-3 whitespace-nowrap">
                  {t('aside.messages')}
                </span>
                <span className="inline-flex justify-center items-center w-5 h-5 text-xs font-semibold rounded-full ">
                  4
                </span>
              </div>
            </Anchor>
          </li>
          <li>
            <Anchor href="/notifications">
              <div className="flex items-center text-base  ltr:rounded-l-none rtl:rounded-r-none rounded-2xl  hover:bg-white/20 group p-2">
                <svg
                  className="flex-shrink-0 w-6 h-6  transition
                duration-75  group-hover:animate-pulse
                "
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg>
                <span className="flex-1 ltr:ml-3 rtl:mr-3 whitespace-nowrap">
                  {t('aside.notifications')}
                </span>
                <span className="inline-flex justify-center items-center w-5 h-5 text-xs font-semibold rounded-full text-primary-800 bg-primary-100">
                  4
                </span>
              </div>
            </Anchor>
          </li>
          <li>
            <div className="relative transition">
              <input
                className="peer hidden"
                type="checkbox"
                id="menu-2"
                defaultChecked={false}
              />
              <button className="group flex peer relative w-full items-center ltr:border-l-black ltr:hover:border-l-4 rtl:border-r-black rtl:hover:border-r-4 py-3 px-2  outline-none transition-all duration-100 ease-in-out  ">
                <span className="flex ltr:mr-6 rtl:ml-6 w-6 ">
                  <svg
                    className="w-6 h-6 group-hover:animate-bounce duration-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
                    />
                  </svg>
                </span>
                {t('aside.analytics')}
                <label
                  htmlFor="menu-2"
                  className="absolute inset-0 h-full w-full cursor-pointer"
                />
              </button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="arrow-down-icon absolute ltr:right-0 rtl:left-0 top-4 ltr:ml-auto rtl:mr-auto ltr:mr-5 rtl:ml-auto h-4  transition peer-checked:rotate-180 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              <ul
                className={classnames(
                  'duration-400 flex m-2 max-h-0 flex-col overflow-hidden rounded-xl   transition-all duration-300 peer-checked:max-h-96',
                  {
                    'bg-light-bgSecondary text-light-textSecondary':
                      mode == 'light',
                  },
                  {
                    'bg-dark-bgSecondary text-dark-textSecondary':
                      mode === 'dark',
                  },
                )}
              >
                <li className="flex m-2 cursor-pointer border-l-black text-sm ">
                  <Anchor href="/analytics/billing">
                    <span className="mr-5 flex items-center gap-5 py-3 pl-5 transition-all duration-100 ease-in-out  hover:text-black">
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
                          d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                        />
                      </svg>
                      Billing
                    </span>
                  </Anchor>
                </li>
                <li className="flex m-2 cursor-pointer border-l-black text-sm ">
                  <Anchor href="/analytics/refund">
                    <span className="mr-5 flex items-center gap-5 py-3 pl-5 transition-all duration-100 ease-in-out  hover:text-black">
                      <svg
                        fill="none"
                        className="w-5 h-5"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 9.75h4.875a2.625 2.625 0 010 5.25H12M8.25 9.75L10.5 7.5M8.25 9.75L10.5 12m9-7.243V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185z"
                        />
                      </svg>
                      Refund
                    </span>
                  </Anchor>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <div
          className={classnames(
            'h-0.5 w-full border',
            { 'border-light-border': mode === 'light' },
            { 'border-dark-border': mode === 'dark' },
          )}
        ></div>
        <ul>
          <li>
            <Anchor href="/dashboard">
              <div className="relative transition">
                <div className="p-2 flex items-center text-base ltr:rounded-l-none rtl:rounded-r-none rounded-2xl :text-white hover:bg-white/20 group">
                  <svg
                    className="flex-shrink-0 w-6 h-6  transition duration-75 :text-gray-400  group-hover:animate-pulse"
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
                      d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z"
                    />
                  </svg>
                  <span className="ltr:ml-3 rtl:mr-3">Dashboard</span>
                </div>
              </div>
            </Anchor>
          </li>
        </ul>
      </div>
      {/* top side bar nav */}
      {/* bottom side bar nav */}
      <div className=" absolute bottom-0 left-0 justify-center items-center p-4 space-x-4 w-full lg:flex z-20">
        <LanguageSwitcher />
        <ThemeSwitcher />
      </div>
    </aside>
  );
};

export default Aside;

import { MessagesLayout, RootLayout } from 'shared';
// Packages
import Head from 'next/head';
import classNames from 'classnames';

// Hooks & Services
import { useTranslation } from 'core/context/TranslationContext';
import { useThemeContext } from 'core/context/ThemeContext';

const Messages = () => {
  const { t } = useTranslation();
  const {
    theme: { mode },
  } = useThemeContext();

  return (
    <>
      <Head>
        <title>{t('billing.title')}</title>
        <meta
          name="description"
          content="Next.js + SWR codebase containing realworld examples (CRUD, auth, advanced patterns, etc) that adheres to the realworld spec and API"
        />
      </Head>
      <section className="flex h-[94vh] overflow-hidden flex-col gap-2 pt-4 ">
        <div className="grid grid-cols-5 gap-4 h-full">
          <div className="sm:col-span-2 xs:col-span-full h-full p-2 border border-gray-100/10 rounded-xl rounded-b-none  bg-white/5 sm:px-8 sm:shadow">
            <div className="flex items-center justify-between border-b border-gray-100/10">
              <span className="text-xl font-semibold my-2">
                {t('messages.name')}
              </span>
              <span className="relative group">
                {/* settings icon */}
                <svg
                  className="w-6 h-6 hover:cursor-pointer"
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
                    d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div
                  id="tooltip-default"
                  title="temp"
                  role="tooltip"
                  className="absolute opacity-0 group-hover:opacity-100 top-6 z-10  inline-block px-3 py-2 text-sm font-medium  transition-opacity duration-300  rounded-lg shadow-md tooltip "
                >
                  <div className="tooltip-arrow" data-popper-arrow="" />
                </div>
                {/* settings icon */}
              </span>
            </div>
            <input
              type="text"
              placeholder="search over your contacts ..."
              className="search-contacts  my-1 h-11 w-full items-center gap-2 rounded-xl pl-2 pr-3 text-sm text-zinc-500 ring-1 bg-white/10 placeholder:text-zinc-400 ring-zinc-900/10 transition hover:ring-zinc-900/20 ui-not-focus-visible:outline-none"
            />
            {/* conversations */}
            <ul className="h-[90%] overflow-y-scroll">
              {/* conversation */}
              <li className=" w-full p-2 my-1 border border-gray-100/10 shadow rounded-lg hover:cursor-pointer bg-white/5">
                <div className="flex justify-between space-x-2">
                  <div className="inline-flex">
                    <div className="p-3 border inline-flex rounded-full">
                      <svg
                        className="w-6 h-6 "
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
                          d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                        ></path>
                      </svg>
                    </div>
                    <div className="flex-col ml-2">
                      <div className="flex space-x-1 text-emerald-500 font-normal">
                        {' '}
                        /
                      </div>
                      <span />
                    </div>
                  </div>
                  <div className="mr-auto ">
                    <svg
                      className="w-7 h-7 text-zinc-500 hover:text-zinc-900 hover:cursor-pointer"
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
                        d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      ></path>
                    </svg>
                    {/* Dropdown menu */}
                    <div
                      id="dropdownComment1"
                      className={classNames(
                        'z-10 absolute rounded divide-y divide-gray-100 shadow opacity-0 transition-all duration-900',
                        { 'bg-light-bgSecondary': mode === 'light' },
                        { 'bg-dark-bgSecondary': mode === 'dark' },
                        { 'opacity-100': true },
                      )}
                    >
                      <ul
                        className="py-1 text-sm  w-full"
                        aria-labelledby="dropdownMenuIconHorizontalButton"
                      >
                        {/* conversation action */}
                        {/* conversation remove */}
                        <li>
                          <a
                            role="button"
                            className="inline-flex space-x-1 py-2 px-4 "
                          >
                            <span>
                              <svg
                                name="remove-icon"
                                id="remove-icon"
                                className="w-5 h-5 hover:text-red-500"
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
                                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                ></path>
                              </svg>
                            </span>
                            <span>Remove</span>
                          </a>
                        </li>
                        {/* conversation remove */}
                        {/* conversation report  */}
                        <li>
                          <a
                            role="button"
                            className=" inline-flex space-x-1 py-2 px-4 "
                          >
                            <span>
                              <svg
                                className="w-5 h-5 hover:text-blue-600"
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
                                  d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5"
                                ></path>
                              </svg>
                            </span>
                            <span>Report</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="p-2 flex justify-between items-center">
                  <h3 className=" text-lg">
                    conversation.messagesconversation.messages.length -
                  </h3>
                  <em className="text-xs font-thin">21 march 2022</em>
                </div>
              </li>
              {/* conversation */}
              <div className="flex-col h-full w-full items-center justify-center align-middle content-center self-center text-center origin-center object-center ">
                <div className="text-7xl my-2 font-extrabold align-middle self-center items-center content-center">
                  404
                </div>
                <span className="">no conversations found</span>
              </div>
            </ul>
            {/* conversations */}
          </div>
          {/* detailed content */}
          <div className="sm:col-span-3 xs:hidden sm:inline border border-gray-100/10 rounded-lg rounded-b-none h-full overflow-y-scroll bg-white/5 sm:px-8 sm:shadow"></div>
          {/* detailed content */}
        </div>
      </section>
    </>
  );
};
Messages.getLayout = (page) => {
  return (
    <RootLayout>
      <MessagesLayout>{page}</MessagesLayout>
    </RootLayout>
  );
};
export default Messages;

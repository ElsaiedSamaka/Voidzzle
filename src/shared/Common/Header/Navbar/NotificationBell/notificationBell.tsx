// packages
import classNames from "classnames";
// hooks
import { useThemeContext } from "core/context/ThemeContext";
import { useState } from "react";

const NotificationBell = ()=>{
    const [showNotificationDDL, setNotificationDDL] = useState<boolean>(true);
      const { theme } = useThemeContext();
      const { mode } = theme;
    function toggleNotificationDDL() {
        setNotificationDDL(!showNotificationDDL)
    }
    return (
      <>
        <button
          onClick={toggleNotificationDDL}
          type="button"
          data-dropdown-toggle="notification-dropdown"
          className="p-2 mr-1 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 :text-gray-400 :hover:text-white :hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 :focus:ring-gray-600"
        >
          <span className="sr-only">View notifications</span>
          <svg
            aria-hidden="true"
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
          </svg>
        </button>
        <div
          className={classNames(
            "absolute top-10 right-10 overflow-hidden z-50 my-4 max-w-sm text-base list-none shadow-lg opacity-0 divide-y transition-all duration-300 rounded-xl",
            {
              "opacity-100 -translate-x-10": showNotificationDDL,
              "bg-dark-bgSecondary text-dark-textSecondary divide-dark-border":
                mode === "dark",
              "bg-light-bgSecondary text-light-textSecondary divide-light-border":
                mode === "light",
            }
          )}
          id="notification-dropdown"
        >
          <div
            className={classNames(
              "block py-2 px-4 text-base font-medium text-center",
              {
                "bg-dark-bgPrimary text-dark-textSecondary divide-dark-border":
                  mode === "dark",
                "bg-light-bgPrimary text-light-textSecondary divide-light-border":
                  mode === "light",
              }
            )}
          >
            Notifications
          </div>
          <div className="notification-ddl h-64 overfolw-scroll">
            <a className="flex py-3 px-4 ">
              <div className="flex-shrink-0">
                <img
                  className="w-11 h-11 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                  alt="Bonnie Green avatar"
                />
                <div className="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 rounded-full border border-white/10 ">
                  <svg
                    aria-hidden="true"
                    className="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z" />
                    <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
                  </svg>
                </div>
              </div>
              <div className="pl-3 w-full">
                <div className="font-normal text-sm mb-1.5">
                  New message from
                  <span className="font-semibold">Bonnie Green</span>: "Hey,
                  what's up? All set for the presentation?"
                </div>
                <div className="text-xs font-medium text-primary-600 ">
                  a few moments ago
                </div>
              </div>
            </a>
          </div>
          <a className="block py-2 text-md font-medium text-center  hover:cursor-pointer">
            <div className="inline-flex items-center">
              <svg
                aria-hidden="true"
                className="mr-2 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path
                  fillRule="evenodd"
                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                  clipRule="evenodd"
                />
              </svg>
              View all
            </div>
          </a>
        </div>
      </>
    );
}
export default NotificationBell;
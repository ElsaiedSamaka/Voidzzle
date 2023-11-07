import classNames from "classnames";
import { useThemeContext } from "core/context/ThemeContext";
import { useEffect } from "react";

const ThemeSwitcher = () => {
  const { theme, dispatch } = useThemeContext();
  const { mode } = theme;
  
  function setDarkTheme() {
    dispatch({ type: "DARK" });
  }
  function setLightTheme() {
    dispatch({ type: "LIGHT" });
  }
  function setSystemTheme() {
    dispatch({ type: "SYSTEM" });
  }
  return (
    <div className={classNames("relative")}>
      <button
        id="user-settings-dropdown"
        className="flex items-center justify-center h-7 w-7 text-foreground"
        type="button"
        aria-haspopup="menu"
        aria-expanded="false"
        data-state="closed"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={18}
          height={18}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="sbui-icon h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
        >
          <circle cx={12} cy={12} r={5} />
          <line x1={12} y1={1} x2={12} y2={3} />
          <line x1={12} y1={21} x2={12} y2={23} />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1={1} y1={12} x2={3} y2={12} />
          <line x1={21} y1={12} x2={23} y2={12} />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={18}
          height={18}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="sbui-icon absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
        <span className="sr-only">Toggle theme</span>
      </button>
      <div
        className={classNames(
          "absolute -top-24 ",
          { "bg-light-bgSecondary": mode === "light" },
          { "bg-dark-bgSecondary": mode === "dark" }
        )}
      >
        <div
          role="menu"
          className={classNames(
            "z-50 min-w-[8rem]  rounded-md border p-1 text-foreground-light shadow-md max-w-60",
            { "border-light-border": mode === "light" },
            { "border-dark-border": mode === "dark" }
          )}
        >
          <div role="group">
            <div
              onClick={setSystemTheme}
              role="menuitemradio"
              className="relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-xs outline-none transition-colors focus:bg-overlay-hover focus:text-strong data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:cursor-pointer hover:bg-gray-200"
            >
              <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center" />
              System
            </div>
            <div
              onClick={setDarkTheme}
              role="menuitemradio"
              className="relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-xs outline-none transition-colors focus:bg-overlay-hover focus:text-strong data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:cursor-pointer hover:bg-gray-200"
            >
              <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-2 w-2 fill-current"
                  >
                    <circle cx={12} cy={12} r={10} />
                  </svg>
                </span>
              </span>
              Dark
            </div>
            <div
              onClick={setLightTheme}
              role="menuitemradio"
              className="relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-xs outline-none transition-colors focus:bg-overlay-hover focus:text-strong data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:cursor-pointer hover:bg-gray-200"
            >
              <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center" />
              Light
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSwitcher;

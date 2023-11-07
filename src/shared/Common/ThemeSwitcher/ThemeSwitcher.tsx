import classNames from "classnames";
import { useThemeContext } from "core/context/ThemeContext";
import { useEffect, useState } from "react";
import Switch from "../Switch/Switch";

const ThemeSwitcher = () => {
  const { theme, dispatch } = useThemeContext();
  const { mode } = theme;
  console.log("mode", mode);
  const [showThemPopOver, toggleThemePopOver] = useState<boolean>(false);

  function setDarkTheme() {
    dispatch({ type: "DARK" });
    handleThemePopOver();
  }
  function setLightTheme() {
    dispatch({ type: "LIGHT" });
    handleThemePopOver();
  }
  function setSystemTheme() {
    dispatch({ type: "SYSTEM" });
    handleThemePopOver();
  }
  function handleThemePopOver() {
    toggleThemePopOver(!showThemPopOver);
  }
  return (
    <div className={classNames("relative")}>
      <button
        onClick={handleThemePopOver}
        className="flex items-center justify-center h-7 w-7 text-foreground"
        type="button"
      >
        <Switch test={mode}>
          <svg
            key="light"
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
          <svg
            key="dark"
            width={18}
            height={18}
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
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            />
          </svg>
        </Switch>
        <span className="sr-only">Toggle theme</span>
      </button>

      <div
        className={classNames(
          "absolute rounded-md -top-24 opacity-0 transition-all duration-900",
          { "bg-light-bgSecondary": mode === "light" },
          { "bg-dark-bgSecondary": mode === "dark" },
          { "opacity-100": showThemPopOver }
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
              className="relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-xs outline-none transition-colors focus:bg-overlay-hover focus:text-strong  hover:cursor-pointer hover:bg-white/10"
            >
              <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center" />
              System
            </div>
            <div
              onClick={setDarkTheme}
              role="menuitemradio"
              className="relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-xs outline-none transition-colors focus:bg-overlay-hover focus:text-strong hover:cursor-pointer  hover:bg-white/10"
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
              className="relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-xs outline-none transition-colors focus:bg-overlay-hover focus:text-strong hover:cursor-pointer hover:bg-white/10"
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

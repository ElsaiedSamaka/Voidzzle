import { createContext, useReducer, useEffect, useContext } from "react";

export const ThemeContext = createContext({});

ThemeContext.displayName = "ThemeContext";

const storeTheme = (mode) => {
  localStorage.setItem("theme", mode);
};

const getStoredTheme = () => {
  return localStorage.getItem("theme");
};

const clearStoredTheme = () => {
  localStorage.removeItem("theme");
};

const getSystemTheme = () => {
  const mql = window.matchMedia("(prefers-color-scheme: dark)");
  return mql.matches ? "dark" : "light";
};

const addThemeToDOM = (mode) => {
  if (mode === "dark") document.documentElement.classList.add("dark");
  else document.documentElement.classList.remove("dark");
};

const init = (initialState) => {
  let storedTheme = getStoredTheme();
  if (storedTheme) {
    addThemeToDOM(storedTheme);
    return { mode: storedTheme };
  } else {
    addThemeToDOM(getSystemTheme());
    return initialState;
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LIGHT":
      storeTheme("light");
      addThemeToDOM("light");
      return { mode: "light" };
    case "DARK":
      storeTheme("dark");
      addThemeToDOM("dark");
      return { mode: "dark" };
    case "SYSTEM":
      clearStoredTheme();
      addThemeToDOM(getSystemTheme());
      return { mode: "system" };
    default:
      return init(state);
  }
};
// donot forget to provide the context to the whole app
const ThemeContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { mode: "system" });

  useEffect(() => {
    dispatch({ type: "init" });

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", ({ matches }) => {
        if (getStoredTheme()) return;
        addThemeToDOM(getSystemTheme());
      });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: state, dispatch }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
// useThemeContext
const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw Error(
      "Error, ThemeContext must be used inside ThemeContext Provider"
    );
  }

  return context;
};
export { ThemeContextProvider, useThemeContext };

// usage example
// - getting current theme mode
// const { theme, dispatch } = useThemeContext();
// const { mode } = theme;
// {
//   /* light , dark or system  */
// }
// - changing theme mode
//   dispatch({ type: "LIGHT" }); {/* change to light mode  */}

//   dispatch({ type: "DARK" });  {/* change to dark mode  */}

//   dispatch({ type: "SYSTEM" }); {/* change to os theme mode  */}

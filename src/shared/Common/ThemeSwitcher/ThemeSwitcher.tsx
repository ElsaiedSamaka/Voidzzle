import { useThemeContext } from "core/context/ThemeContext";
import { useEffect } from "react";

const ThemeSwitcher = () => {
  const { theme, dispatch } = useThemeContext();
  const { mode } = theme;
  useEffect(() => {
      dispatch({ type: "SYSTEM" });
  }, []);
  function setDarkTheme() {
    dispatch({ type: "DARK" });
  }
  function setLightTheme() {
    dispatch({ type: "LIGHT" });
  }
  return (
    <div>
      <span onClick={setDarkTheme}>dark</span>
      <span onClick={setLightTheme}>light</span>
    </div>
  );
};

export default ThemeSwitcher;

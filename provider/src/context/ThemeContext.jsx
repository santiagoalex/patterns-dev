import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";
import themes from "./themes";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const changeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const contextData = {
    theme: themes[theme],
    changeTheme,
  };

  return (
    <ThemeContext.Provider value={contextData}>
      {children}
    </ThemeContext.Provider>
  );
};

const useContextTheme = () => useContext(ThemeContext);

export const ThemeCtx = { ThemeContext: ThemeProvider, useContextTheme };

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

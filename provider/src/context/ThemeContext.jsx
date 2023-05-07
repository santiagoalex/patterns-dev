import React, { createContext, useState, useContext } from "react";

const themes = {
  ligth: {
    background: "#fff",
    color: "#000",
  },
  dark: {
    background: "#000",
    color: "#fff",
  },
};

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const changeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const data = { theme: themes[theme], changeTheme };
  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

const useContextTheme = () => useContext(ThemeContext);

export const ThemeCtx = { ThemeContext: ThemeProvider, useContextTheme };

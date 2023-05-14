import { createContext, useState } from "react";
import PropTypes from "prop-types";
import themes from "./themes";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [selectedTheme, setSelectedTheme] = useState("dark");

  const changeTheme = () => {
    setSelectedTheme(selectedTheme === "dark" ? "light" : "dark");
  };

  const contextData = {
    theme: themes[selectedTheme],
    changeTheme,
  };

  return (
    <ThemeContext.Provider value={contextData}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

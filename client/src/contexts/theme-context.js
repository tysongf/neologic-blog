import { createContext, useState } from "react";

const themes = {
   dark: {
      backgroundColor: "#292929",
      color: "white",
      secondaryBackgroundColor: "#444",
      borderColor: "#555",
      closeButton: "white",
   },
   light: {
      backgroundColor: "white",
      color: "black",
      secondaryBackgroundColor: "#F9F9F9",
      borderColor: "#CCC",
   },
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
   const [isDark, setIsDark] = useState(false);
   const theme = isDark ? themes.dark : themes.light;
   document.body.style.backgroundColor = theme.backgroundColor;
   const toggleTheme = () => {
      setIsDark(!isDark);
   };
   return (
      <ThemeContext.Provider value={[{ theme, isDark }, toggleTheme]}>
         {children}
      </ThemeContext.Provider>
   );
};

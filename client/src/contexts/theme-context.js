import React from "react";

const ThemeContext = React.createContext({
   theme: "light",
   setTheme: (theme) => {},
});

export default ThemeContext;

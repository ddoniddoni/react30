import React, { useContext, createContext } from "react";

const ThemeContext = createContext("black");
export const ContextSample = () => {
  const theme = useContext(ThemeContext);
  const style = {
    width: "24px",
    height: "24px",
    background: theme,
  };

  return <div style={style}></div>;
};

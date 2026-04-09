import { createContext, useState, useEffect, useContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
return <ThemeContext.Provider value={them}
};

import { createContext, useReducer } from "react";
import { lightTheme, themeReducer, ThemeState } from "../reducers/themeReducer";

interface themeContextProps {
  theme: ThemeState;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}


const ThemeContext = createContext<themeContextProps>({} as themeContextProps);


const ThemeProvider = ({ children }: any) => {

  const [theme, dispatch] = useReducer(themeReducer, lightTheme); //TODO leer tema global del cell

  const setDarkTheme = () => {
    dispatch({ type: "DarkTheme" });
  };
  const setLightTheme = () => {
    dispatch({ type: "LightTheme" });
  };

  return (
    <ThemeContext.Provider value={{ theme, setDarkTheme, setLightTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};


export { ThemeContext, ThemeProvider };

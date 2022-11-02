import { createContext, useEffect, useReducer } from "react";
import { Appearance, AppState, AppStateStatus } from "react-native";

import themeReducer from "../reducers/theme";
import { ThemeContextProps, ThemeState } from "../types/theme";

const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);


const themeLight: ThemeState = {
  currentTheme: "light",
  dark: false,
  dividerColor: "black",
  colors: {
    primary: "#1e426b",
    text: "black",
    background: "white",
    card: "white",
    border: "black",
    notification: "teal",
  },
};
const themeDark: ThemeState = {
  currentTheme: "dark",
  dark: true,
  dividerColor: "white",
  colors: {
    primary: "#1e426b",
    text: "white",
    background: "black",
    card: "white",
    border: "white",
    notification: "teal",
  },
};

const ThemeProvider = ({ children }: any) => {

  const [theme, dispatch] = useReducer(themeReducer, Appearance.getColorScheme() === "dark" ? themeDark : themeLight);

  useEffect(() => {
    AppState.addEventListener("change", (status: AppStateStatus) => {
      if (status === "active") {
        Appearance.getColorScheme() === "dark"
          ? setThemeDark()
          : setThemeLight();
      }
    });
  }, []);

  const setThemeDark = () => {
    dispatch({ type: "theme_dark", payload: themeDark });
  };
  const setThemeLight = () => {
    dispatch({ type: "theme_light", payload: themeLight });
  };

  return (
    <ThemeContext.Provider value={{ theme, setThemeDark, setThemeLight }}>
      {children}
    </ThemeContext.Provider>
  );
};


export { ThemeContext, ThemeProvider };

import { createContext, useEffect, useReducer } from "react";
import { darkTheme, lightTheme, themeReducer, ThemeState } from "../reducers/themeReducer";
import { Appearance, AppState, AppStateStatus, useColorScheme } from "react-native";

interface themeContextProps {
  theme: ThemeState;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}


const ThemeContext = createContext<themeContextProps>({} as themeContextProps);

const ThemeProvider = ({ children }: any) => {

  const [theme, dispatch] = useReducer(themeReducer, (Appearance.getColorScheme() === "dark") ? darkTheme : lightTheme);

  /*Forma dos para cambiar color dependiente el  color del celular */
  useEffect(() => {
    AppState.addEventListener("change", (state: AppStateStatus) => {
      if (state === "active") {
        Appearance.getColorScheme() === "dark"
          ? setDarkTheme()
          : setLightTheme();
      }
    });

  }, []);

  /*Forma uno para cambiar color dependiente el  color del celular */
  // const colorSchema = useColorScheme();
  // const [theme, dispatch] = useReducer(themeReducer, (colorSchema === "dark") ? darkTheme : lightTheme);
  // useEffect(() => {
  //   colorSchema === "dark"
  //     ? setDarkTheme()
  //     : setLightTheme();
  // }, [colorSchema]);

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

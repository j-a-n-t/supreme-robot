import { Theme } from "@react-navigation/native";

type ThemeAction =
  | { type: "DarkTheme" }
  | { type: "LightTheme" }

export interface ThemeState extends Theme {
  currentTheme: "light" | "dark";
  dividerColor: string;
}

const lightTheme: ThemeState = {
  currentTheme: "light",
  dividerColor: "rgba(0,0,0,0.7)",
  dark: false,
  colors: {
    primary: "#1e426b",
    background: "white",
    card: "white",
    text: "black",
    border: "black",
    notification: "teal",
  },
};

const darkTheme: ThemeState = {
  currentTheme: "dark",
  dividerColor: "rgba(0,0,0,0.7)",
  dark: true,
  colors: {
    primary: "#4c87d5",
    background: "black",
    card: "green",
    text: "white",
    border: "#c1c1c2",
    notification: "teal",
  },
};

const themeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {

  switch (action.type) {

    case "LightTheme":
      return { ...lightTheme };
    case "DarkTheme":
      return { ...darkTheme };
    default:
      return state;
  }
};

export { themeReducer, lightTheme,darkTheme };

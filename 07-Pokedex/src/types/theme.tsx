/* INTERFACE */
import { Theme } from "@react-navigation/native";

export interface ThemeContextProps {
  theme: ThemeState;
  setThemeDark: () => void;
  setThemeLight: () => void;
}

export interface ThemeState extends Theme {
  currentTheme: "dark" | "light";
  dividerColor: string,
}

/* TYPES */
export type ActionReducerTheme =
  | { type: "theme_light", payload: ThemeState }
  | { type: "theme_dark", payload: ThemeState }

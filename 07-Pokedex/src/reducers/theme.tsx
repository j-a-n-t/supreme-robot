import { ActionReducerTheme, ThemeState } from "../types/theme";

const themeReducer = (state: ThemeState, action: ActionReducerTheme): ThemeState => {

  switch (action.type) {
    case "theme_dark":
      return { ...action.payload };
    case "theme_light":
      return { ...action.payload };
    default:
      return state;
  }
};


export default themeReducer;

import { DefaultTheme, DarkTheme, NavigationContainer, Theme } from "@react-navigation/native";
import { StackNavigation } from "./src/navigation/StackNavigation";
import { useContext } from "react";
import { ThemeContext, ThemeProvider } from "./src/context/themeContext";

const App = () => {


  // const customTheme: Theme = {
  //   dark: true,
  //   colors: { ...DefaultTheme.colors },
  // };

  return (
    <ThemeProvider>
        <StackNavigation />
    </ThemeProvider>
  );
};

export default App;

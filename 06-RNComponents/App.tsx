import { DefaultTheme, DarkTheme, NavigationContainer, Theme } from "@react-navigation/native";
import { StackNavigation } from "./src/navigation/StackNavigation";

const App = () => {

  const customTheme: Theme = {
    dark: true,
    colors: { ...DarkTheme.colors },
  };

  return (
    <NavigationContainer theme={customTheme}>
      <StackNavigation />
    </NavigationContainer>
  );
};

export default App;

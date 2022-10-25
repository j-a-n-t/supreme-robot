import StackNavigation from "./src/navigation/StackNavigation";
import {  ThemeProvider } from "./src/context/themeContext";

const App = () => {
  return (
    <ThemeProvider>
      <StackNavigation />
    </ThemeProvider>
  );
};

export default App;

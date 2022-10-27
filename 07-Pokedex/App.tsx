import { ThemeProvider } from "./src/context/themeContext";
import TabsNavigation from "./src/navigation/TabsNavigation";

const App = () => {
  return (
    <ThemeProvider>
      <TabsNavigation />
    </ThemeProvider>
  );
};

export default App;

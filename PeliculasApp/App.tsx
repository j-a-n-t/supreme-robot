import { NavigationContainer } from "@react-navigation/native";
import { StackNavigation } from "./src/components/nav/StackNavigation";

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
};

export default App;

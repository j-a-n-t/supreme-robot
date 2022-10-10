import {NavigationContainer} from "@react-navigation/native";
import StackNavigator from "./src/nav/StackNavigator";

const App = () => {
    return (
        <NavigationContainer>
            <StackNavigator/>
        </NavigationContainer>
    );
};

export default App;

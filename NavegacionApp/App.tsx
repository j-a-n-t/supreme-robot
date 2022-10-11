import {NavigationContainer} from '@react-navigation/native';
import MenuLateral from './src/nav/MenuLateral';

// import StackNavigator from "./src/nav/StackNavigator";
// import MenuLateralBasico from "./src/nav/MenuLateralBasico";

const App = () => {
    return (
        <NavigationContainer>
            {/*<StackNavigator/>*/}
            {/*<MenuLateralBasico/>*/}
            <MenuLateral/>
        </NavigationContainer>
    );
};

export default App;

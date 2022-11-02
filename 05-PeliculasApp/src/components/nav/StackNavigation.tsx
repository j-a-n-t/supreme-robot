import {createStackNavigator} from "@react-navigation/stack";

import IndexScreen from "../../screens/IndexScreen";
import {Movies} from "../../interfaces/movie";

export type rootStackParams = {
    Home: undefined
    Detail: Movies
}

const StackButton = createStackNavigator<rootStackParams>();

const StackNavigation = () => {
    return (
        <StackButton.Navigator screenOptions={{
            headerShown: false,
            cardStyle: {backgroundColor: "white"},
        }}>
            <StackButton.Screen name={"Home"} component={IndexScreen.Home}/>
            <StackButton.Screen name={"Detail"} component={IndexScreen.Detail}/>
        </StackButton.Navigator>
    );
};

export {StackNavigation};

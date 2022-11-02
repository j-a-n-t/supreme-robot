import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import TabsNavigation from "./TabsNavigation";
import { ThemeContext } from "../context/themeContext";
import IndexScreen from "../screen/IndexScreen";
import { PokemonProps } from "../types/Pokemon";


export type StackNavProps =
  {
    "HomeScreen": undefined,
    "PokemonScreen": { pokemon: PokemonProps, color: string },
  }


const StackNav = createStackNavigator<StackNavProps>();

const StackNavigation = () => {

  return (
    <StackNav.Navigator
      screenOptions={
        {
          headerStyle: { elevation: 0 },
          headerShown: false,
          cardStyle: { backgroundColor: "white" },
        }}>

      {/*Menu Stack*/}
      <StackNav.Screen name={"HomeScreen"} component={IndexScreen.Home} />
      <StackNav.Screen name={"PokemonScreen"} component={IndexScreen.Pokemon} />
    </StackNav.Navigator>

  );
};

export default StackNavigation;

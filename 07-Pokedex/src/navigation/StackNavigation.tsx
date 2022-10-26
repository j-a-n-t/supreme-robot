import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useContext } from "react";

import { ThemeContext } from "../context/themeContext";
import IndexScreen from "../screen/IndexScreen";
import { StackNavProps } from "../types/navigation";

const StackNav = createStackNavigator<StackNavProps>();

const StackNavigation = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <NavigationContainer theme={theme}>
      <StackNav.Navigator
        screenOptions={
          {
            headerStyle: { elevation: 0 },
            headerShown: false,
            cardStyle: { backgroundColor: "white" },
          }}
      >
        <StackNav.Screen name={"HomeScreen"} component={IndexScreen.Home} />
        <StackNav.Screen name={"PokemonScreen"} component={IndexScreen.Pokemon} />
      </StackNav.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;

import { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import IndexScreen from "../screen/IndexScreen";
import { ThemeContext } from "../context/themeContext";
import StackNavigation from "./StackNavigation";
import Icon from "react-native-vector-icons/Ionicons";

type TabsProps = {
  "SearchScreen": undefined,
  "StackNav": undefined
}

const StackTabs = createBottomTabNavigator<TabsProps>();


const TabsNavigation = () => {

  const { theme, theme: { colors } } = useContext(ThemeContext);

  return (
    <NavigationContainer theme={theme}>
      <StackTabs.Navigator
        sceneContainerStyle={{ backgroundColor: "white" }}
        screenOptions={{
          headerStyle: { elevation: 0 },
          headerShown: false,
          tabBarStyle: {
            borderTopColor: "#284a7e",
            borderTopWidth: 0,
            elevation: 0,
            height: 70,
            position: "absolute",
            backgroundColor: "rgba(255,255,255,0.80)",
          },
          tabBarLabelStyle: { fontSize: 15, marginBottom: 10 },
          tabBarActiveTintColor: colors.primary,
        }}
      >

        {/*Menus Tabs  */}
        <StackTabs.Screen
          name={"StackNav"}
          component={StackNavigation}
          options={{ title: "Pokemon", tabBarIcon: ({ color }) => <Icon name={"list-outline"} size={20} /> }}
        />
        <StackTabs.Screen
          name={"SearchScreen"}
          options={{ title: "Busquedas", tabBarIcon: ({ color }) => <Icon name={"search-outline"} size={20} /> }}
          component={IndexScreen.FindPokemon} />
      </StackTabs.Navigator>

    </NavigationContainer>

  );
};

export default TabsNavigation;

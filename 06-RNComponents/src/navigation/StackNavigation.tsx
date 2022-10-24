import { createStackNavigator } from "@react-navigation/stack";
import indexScreen from "../screen/indexScreen";
import { NavigationContainer } from "@react-navigation/native";
import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";


export type RootStackParams = {
  home: undefined,
  animation101: undefined,
  animation102: undefined
  switch: undefined,
  alert: undefined,
  inputText: undefined,
  pullToRefresh: undefined,
  sectionLists: undefined,
  modals: undefined,
  infiniteScroll: undefined,
  slide: undefined
  changeTheme: undefined
}

const StackNav = createStackNavigator<RootStackParams>();

const StackNavigation = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <NavigationContainer theme={theme}>
      <StackNav.Navigator screenOptions={{
        headerStyle: { elevation: 0 },
        headerShown: false,
      }}>
        <StackNav.Screen name={"home"} component={indexScreen.home} />
        <StackNav.Screen name={"animation101"} component={indexScreen.animation101} />
        <StackNav.Screen name={"animation102"} component={indexScreen.animation102} />
        <StackNav.Screen name={"switch"} component={indexScreen.switch} />
        <StackNav.Screen name={"alert"} component={indexScreen.alerts} />
        <StackNav.Screen name={"inputText"} component={indexScreen.inputText} />
        <StackNav.Screen name={"pullToRefresh"} component={indexScreen.pullToRefresh} />
        <StackNav.Screen name={"sectionLists"} component={indexScreen.sectionLists} />
        <StackNav.Screen name={"modals"} component={indexScreen.modal} />
        <StackNav.Screen name={"infiniteScroll"} component={indexScreen.infiniteScroll} />
        <StackNav.Screen name={"slide"} component={indexScreen.slide} />
        <StackNav.Screen name={"changeTheme"} component={indexScreen.theme} />
      </StackNav.Navigator>
    </NavigationContainer>

  );
};

export { StackNavigation };

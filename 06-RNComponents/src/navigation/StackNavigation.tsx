import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screen/HomeScreen";
import indexScreen from "../screen/indexScreen";


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
  infiniteScroll: undefined
}

const StackNav = createStackNavigator<RootStackParams>();

const StackNavigation = () => {
  return (
    <StackNav.Navigator screenOptions={{
      headerStyle: { elevation: 0 },
      cardStyle: { backgroundColor: "white" },
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
    </StackNav.Navigator>
  );
};

export { StackNavigation };

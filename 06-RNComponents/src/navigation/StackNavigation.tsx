import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screen/HomeScreen";
import { AnimationScreen101 } from "../screen/AnimationScreen101";
import { AnimationScreen102 } from "../screen/AnimationScreen102";


export type RootStackParams = {
  HomeScreen: undefined,
  AnimationScreen101: undefined,
  AnimationScreen102: undefined
}

const StackNav = createStackNavigator<RootStackParams>();

const StackNavigation = () => {
  return (
    <StackNav.Navigator screenOptions={{
      headerStyle: { elevation: 0 },
      cardStyle: { backgroundColor: "white" },
      headerShown: false,
    }}>
      <StackNav.Screen name={"HomeScreen"} component={HomeScreen} />
      <StackNav.Screen name={"AnimationScreen101"} component={AnimationScreen101} />
      <StackNav.Screen name={"AnimationScreen102"} component={AnimationScreen102} />
    </StackNav.Navigator>
  );
};

export { StackNavigation };

import { createStackNavigator } from "@react-navigation/stack";
import IndexScreen from "../../screens/IndexScreen";


const StackButton = createStackNavigator();

const StackNavigation = () => {
  return (
    <StackButton.Navigator screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: "white" },
    }}>
      <StackButton.Screen name={"Home"} component={IndexScreen.Home} />
      <StackButton.Screen name={"Detail"} component={IndexScreen.Detail} />
    </StackButton.Navigator>
  );
};

export { StackNavigation };

import {createStackNavigator} from '@react-navigation/stack';

import Pagina1Screen from "../screens/Pagina1Screen";
import Pagina2Screen from "../screens/Pagina2Screen";
import Pagina3Screen from "../screens/Pagina3Screen";
import PersonaScreen from "../screens/PersonaScreen";


export type  RootStackParams = {
    Pagina1Screen: undefined,
    Pagina2Screen: undefined,
    Pagina3Screen: undefined,
    PersonaScreen: { id: number, nombre: string }
}

const Stack = createStackNavigator<RootStackParams>();

const StackNavigator = () => {
    return (
        <Stack.Navigator
            // initialRouteName={"Pagina2Screen"} -> indica el inicio del router
            screenOptions={{
                headerStyle: {elevation: 0},
                cardStyle: {backgroundColor: "white",}
            }}>
            <Stack.Screen name="Pagina1Screen" options={{title: "Página uno"}} component={Pagina1Screen}/>
            <Stack.Screen name="Pagina2Screen" options={{title: "Página dos"}} component={Pagina2Screen}/>
            <Stack.Screen name="Pagina3Screen" options={{title: "Página tres"}} component={Pagina3Screen}/>
            <Stack.Screen name={"PersonaScreen"} options={{title: "Personas"}} component={PersonaScreen}></Stack.Screen>
        </Stack.Navigator>
    );
}


export default StackNavigator;

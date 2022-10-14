import {createDrawerNavigator} from '@react-navigation/drawer';
import {useWindowDimensions} from 'react-native';

import StackNavigator from './StackNavigator';
import SettingsScreen from '../screens/SettingsScreen';

const Drawer = createDrawerNavigator();

const MenuLateralBasico = () => {

    const {width} = useWindowDimensions();

    return (
        <Drawer.Navigator screenOptions={
            {drawerPosition: 'right', drawerType: (width >= 768) ? 'permanent' : 'front'}}>
            <Drawer.Screen name="StackNavigator" options={{title: 'Home'}} component={StackNavigator}/>
            <Drawer.Screen name="SettingsScreen" options={{title: 'Setting'}} component={SettingsScreen}/>
        </Drawer.Navigator>
    );
};

export default MenuLateralBasico;


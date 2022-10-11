import StackNavigator from './StackNavigator';
import {createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView} from '@react-navigation/drawer';
import {Image, Text, TouchableOpacity, useWindowDimensions, View} from 'react-native';

import SettingsScreen from '../screens/SettingsScreen';
import {appStyle} from '../theme/AppStyle';
import Tabs from './Tabs';


const Drawer = createDrawerNavigator();

const MenuLateral = () => {

    const {width} = useWindowDimensions();

    return (
        <Drawer.Navigator
            screenOptions={{drawerPosition: 'right', drawerType: (width > 768) ? 'permanent' : 'front'}}
            drawerContent={(props: DrawerContentComponentProps) => <MenuInterno {...props}/>}
        >
            <Drawer.Screen name={'Tabs'} component={Tabs}/>
            <Drawer.Screen name={'SettingsScreen'} component={SettingsScreen}/>
        </Drawer.Navigator>
    );
};


const MenuInterno = ({navigation}: DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView>
            <View style={appStyle.avatarContainer}>
                <Image
                    style={appStyle.avatar}
                    source={{uri: 'https://hwchamber.co.uk/wp-content/uploads/2022/04/avatar-placeholder.gif'}}/>
            </View>

            {/*Menu Opciones*/}

            <View style={appStyle.menuContainer}>

                <TouchableOpacity
                    style={appStyle.menubotton}
                    onPress={() => navigation.navigate('Tabs')}
                >
                    <Text style={appStyle.menuItem}>Navegación</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={appStyle.menubotton}
                    onPress={() => navigation.navigate('SettingsScreen')}
                >
                    <Text style={appStyle.menuItem}>Ajustes</Text>
                </TouchableOpacity>

            </View>

        </DrawerContentScrollView>
    );
};

export default MenuLateral;

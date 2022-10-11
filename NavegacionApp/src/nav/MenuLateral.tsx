import {createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView} from '@react-navigation/drawer';
import {Image, Text, TouchableOpacity, useWindowDimensions, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import SettingsScreen from '../screens/SettingsScreen';
import StackNavigator from './StackNavigator';
import Tabs from './Tabs';
import {appStyle, colors} from '../theme/AppStyle';


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
                    <Text style={appStyle.menuItem}>
                        <Icon name={'compass-outline'} color={colors.primary} size={23}/>
                        Navegación
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={appStyle.menubotton}
                    onPress={() => navigation.navigate('SettingsScreen')}
                >
                    <Text style={appStyle.menuItem}>
                        <Icon name={'settings-outline'} color={colors.primary} size={23}/>
                        Ajustes
                    </Text>
                </TouchableOpacity>

            </View>

        </DrawerContentScrollView>
    );
};

export default MenuLateral;

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import ChatScreen from '../screens/ChatScreen';
import ContactScreen from '../screens/ContactScreen';
import AlbumScreen from '../screens/AlbumScreen';
import {colors} from '../theme/AppStyle';


const ButtonTop = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
    return (
        <ButtonTop.Navigator
            screenOptions={({route}) => ({
                tabBarStyle: {elevation: 0},
                tabBarIndicatorStyle: {backgroundColor: colors.colorTab},
                tabBarPressColor: colors.colorTab,
                tabBarShowIcon: true,
                tabBarShowLabel: true,
                tabBarIcon: ({color, focused}) => {
                    let iconName: string = '';
                    switch (route.name) {
                        case 'ChatScreen':
                            iconName = 'chatbox-ellipses-outline';
                            break;
                        case 'ContactScreen':
                            iconName = 'people-outline';
                            break;
                        case 'AlbumScreen':
                            iconName = 'book-outline';
                            break;
                        default:
                            iconName = 'T0';
                            break;
                    }
                    return <Text style={{color: color}}>
                        <Icon
                            name={iconName}
                            size={25}
                            color={colors.primary}/>
                    </Text>;
                },
            })}
            sceneContainerStyle={{backgroundColor: colors.bodyColor}}
        >
            <ButtonTop.Screen name={'ChatScreen'} options={{title: 'Chats'}} component={ChatScreen}/>
            <ButtonTop.Screen name={'ContactScreen'} options={{title: 'Contactos'}} component={ContactScreen}/>
            <ButtonTop.Screen name={'AlbumScreen'} options={{title: 'Albums'}} component={AlbumScreen}/>
        </ButtonTop.Navigator>
    );
};

export default TopTabNavigator;

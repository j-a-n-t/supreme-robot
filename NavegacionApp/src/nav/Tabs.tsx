import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Platform, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import TabUnoScreen from '../screens/TabUnoScreen';
import TabDosScreen from '../screens/TabDosScreen';
import StackNavigator from './StackNavigator';
import {colors} from '../theme/AppStyle';
import TopTabNavigator from './TopTabNavigator';

const BottonTabIOS = createBottomTabNavigator();
const BottonTabAndroid = createMaterialBottomTabNavigator();

const Tabs = () => {
    return Platform.OS === 'ios'
        ? <TabsIOS/>
        : <TabsAndroid/>;
};

const TabsIOS = () => {
    return (
        <BottonTabIOS.Navigator
            sceneContainerStyle={{backgroundColor: 'white'}}
            screenOptions={({route}) => ({
                tabBarActiveTintColor: colors.colorTab,
                tabBarStyle: {borderTopColor: '#284a7e', borderTopWidth: 0, elevation: 0},
                tabBarLabelStyle: {fontSize: 15},
                // Manera dos de poner iconos
                tabBarIcon: ({color, size, focused}) => {

                    let iconName: string = '';
                    switch (route.name) {
                        case 'TabUnoScreen':
                            iconName = 'T1';
                            break;
                        case 'TabDosScreen':
                            iconName = 'T2';
                            break;
                        case 'TabTresScreen':
                            iconName = 'T3';
                            break;
                        default:
                            iconName = 'T0';
                            break;
                    }
                    return <Text style={{color: color}}>{iconName}</Text>;
                },
            })}
        >
            {/*Manera uno de poner iconos*/}
            {/*<Tab.Screen name="TabUnoScreen"*/}
            {/*            options={{title: 'Tab1', tabBarIcon: (props) => <Text style={{color: props.color}}>T1</Text>}}*/}
            {/*            component={TabUnoScreen}/>*/}
            <BottonTabIOS.Screen name="TabUnoScreen" options={{title: 'Tab1'}} component={TabUnoScreen}/>
            <BottonTabIOS.Screen name="TabDosScreen" options={{title: 'Tab2'}} component={TabDosScreen}/>
            <BottonTabIOS.Screen name="TabTresScreen" options={{title: 'Stack'}} component={StackNavigator}/>
        </BottonTabIOS.Navigator>
    );
};
const TabsAndroid = () => {
    return (
        <BottonTabAndroid.Navigator
            barStyle={{backgroundColor: colors.colorTab}}
            sceneAnimationEnabled={true}
            screenOptions={({route}) => ({
                tabBarIcon: ({color, focused}) => {
                    let iconName: string = '';
                    switch (route.name) {
                        case 'TabUnoScreen':
                            iconName = 'brush-outline';
                            break;
                        case 'TabDosScreen':
                            iconName = 'color-palette-outline';
                            break;
                        case 'TabTresScreen':
                            iconName = 'create-outline';
                            break;
                        default:
                            iconName = 'code-slash-outline';
                            break;
                    }
                    return <Text
                        style={{color: color}}>
                        <Icon
                            name={iconName}
                            size={25}
                            color={colors.secondary}/>
                    </Text>;
                },
            })}
        >
            <BottonTabIOS.Screen name="TabUnoScreen" options={{title: 'Tab1'}} component={TabUnoScreen}/>
            <BottonTabAndroid.Screen name="TabDosScreen" options={{title: 'Tab2'}} component={TopTabNavigator}/>
            <BottonTabAndroid.Screen name="TabTresScreen" options={{title: 'Stack'}} component={StackNavigator}/>
        </BottonTabAndroid.Navigator>
    );
};

export default Tabs;

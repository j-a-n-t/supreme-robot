import {Text, View} from 'react-native';

import {appStyle, colors} from '../theme/AppStyle';
import TouchableIcon from '../components/TouchableIcon';

const TabUnoScreen = () => {

    return (
        <View>
            <Text style={{...appStyle.title, color: colors.primary}}>ICONOS</Text>

            <Text>
                <TouchableIcon iconName={'airplane-outline'} size={50}/>
                <TouchableIcon iconName={'body-outline'} size={50}/>
                <TouchableIcon iconName={'bonfire-outline'} size={50}/>
                <TouchableIcon iconName={'color-filter-outline'} size={50}/>
                <TouchableIcon iconName={'game-controller-outline'} size={50}/>
                <TouchableIcon iconName={'ribbon-outline'} size={50}/>
                <TouchableIcon iconName={'rose-outline'} size={50}/>
                <TouchableIcon iconName={'logo-javascript'} size={50}/>
                <TouchableIcon iconName={'logo-android'} size={50}/>
                <TouchableIcon iconName={'logo-react'} size={50}/>
                <TouchableIcon iconName={'logo-xbox'} size={50}/>
            </Text>
        </View>
    );
};

export default TabUnoScreen;

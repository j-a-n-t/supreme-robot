import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {colors, appStyle} from '../theme/AppStyle';

const TabUnoScreen = () => {

    return (
        <View>
            <Text style={{...appStyle.title, color: colors.primary}}>ICONOS</Text>

            <Text>
                <Icon name={'airplane-outline'} size={50} color={colors.colorTab}/>
                <Icon name={'body-outline'} size={50} color={colors.colorTab}/>
                <Icon name={'bonfire-outline'} size={50} color={colors.colorTab}/>
                <Icon name={'color-filter-outline'} size={50} color={colors.colorTab}/>
                <Icon name={'game-controller-outline'} size={50} color={colors.colorTab}/>
                <Icon name={'ribbon-outline'} size={50} color={colors.colorTab}/>
                <Icon name={'rose-outline'} size={50} color={colors.colorTab}/>
                <Icon name={'logo-javascript'} size={50} color={colors.colorTab}/>
                <Icon name={'logo-android'} size={50} color={colors.colorTab}/>
                <Icon name={'logo-react'} size={50} color={colors.colorTab}/>
                <Icon name={'logo-xbox'} size={50} color={colors.colorTab}/>
            </Text>
        </View>
    );
};

export default TabUnoScreen;

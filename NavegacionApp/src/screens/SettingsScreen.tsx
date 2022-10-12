import {Button, Text, View} from 'react-native';
import {useContext} from 'react';
import {AuthContext} from '../context/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../theme/AppStyle';

const SettingsScreen = () => {
    const {authState, singIn} = useContext(AuthContext);
    return (
        <View>
            <Text style={{color: 'black'}}>SettingScreen</Text>
            <Text style={{color: 'black'}}>{JSON.stringify(authState, null, 4)}</Text>

            {
                authState.favoriteIcon && <Icon name={authState.favoriteIcon} size={150} color={colors.colorTab}/>
            }

        </View>
    );
};

export default SettingsScreen;

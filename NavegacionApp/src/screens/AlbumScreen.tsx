import {Button, Text, View} from 'react-native';
import {useContext} from 'react';
import {AuthContext} from '../context/AuthContext';
import {colors} from '../theme/AppStyle';

const AlbumScreen = () => {
    const {authState, logout} = useContext(AuthContext);
    const {isLoggedIn} = authState;

    return (
        <View>
            <Text style={{color: colors.primary}}>{JSON.stringify(authState, null, 4)}</Text>

            {isLoggedIn && <Button
                title={'Salir de Sesion'}
                onPress={logout}/>}
        </View>
    );
};

export default AlbumScreen;

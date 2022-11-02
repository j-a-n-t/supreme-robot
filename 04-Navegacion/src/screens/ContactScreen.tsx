import {Button, Text, View} from 'react-native';
import {useContext} from 'react';
import {AuthContext} from '../context/AuthContext';
import {colors} from '../theme/AppStyle';

const ContactScreen = () => {
    const {authState, singIn} = useContext(AuthContext);
    const {isLoggedIn, username} = authState;
    return (
        <View>
            <Text>Contact</Text>
            {
                !isLoggedIn
                    ? <Button title={'envio'} onPress={singIn}></Button>
                    : <Text style={{color: colors.primary}}>Usted ya esta logueado con el usuario {username}</Text>
            }
        </View>
    );
};

export default ContactScreen;

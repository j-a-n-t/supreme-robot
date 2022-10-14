import {Text, View} from 'react-native';
import {useContext, useEffect} from 'react';
import {StackScreenProps} from '@react-navigation/stack';

import {appStyle} from '../theme/AppStyle';
import {AuthContext} from '../context/AuthContext';
import {RootStackParams} from '../nav/StackNavigator';

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'> {
};

const PersonaScreen = ({route, navigation}: Props) => {
    const params = route.params;

    const {changeName} = useContext(AuthContext);

    useEffect(() => {
        changeName(params.nombre);
    }, [params.nombre]);
    useEffect(() => {
        navigation.setOptions({
            title: params.nombre,
        });
    }, [navigation, params.nombre]);

    return (
        <View style={appStyle.globalMargin}>
            <Text style={appStyle.title}>{JSON.stringify(params)}</Text>
        </View>
    );
};

export default PersonaScreen;

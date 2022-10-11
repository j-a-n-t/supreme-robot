import {Button, Text, TouchableOpacity, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';

import {appStyle, colors} from '../theme/AppStyle';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends StackScreenProps<any, any> {
};

const Pagina1Screen = ({navigation}: Props) => {

    return (
        <View style={appStyle.globalMargin}>
            <Text style={appStyle.title}>Página1Screen</Text>

            <Button
                title={'ir pagina dos'}
                onPress={() => navigation.navigate('Pagina2Screen')}
            />

            <Text style={{color: 'black'}}>Navegar con argumentos</Text>

            <View style={{flexDirection: 'row'}}>

                <TouchableOpacity
                    style={{...appStyle.botonGrande, backgroundColor: '#187373'}}
                    onPress={() => navigation.navigate('PersonaScreen', {id: 1, nombre: 'Alexis'})}>
                    <Icon name={'body-outline'} size={35} color={colors.bodyColor}/>
                    <Text style={appStyle.botonGrandeTexto}>Hombre</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{...appStyle.botonGrande, backgroundColor: '#5856D6'}}
                    onPress={() => navigation.navigate('PersonaScreen', {id: 2, nombre: 'Erika'})}>
                    <Icon name={'woman-outline'} size={35} color={colors.bodyColor}/>
                    <Text style={{...appStyle.botonGrandeTexto}}>Mujer</Text>
                </TouchableOpacity>
            </View>


        </View>
    );

};

export default Pagina1Screen;

import {Animated, Button, View} from 'react-native';
import {useFade} from '../hooks/useFade';

const FadeScreen = () => {
    const {fadeIn, fadeOut, opacity} = useFade(0);

    return (
        <View style={{
            backgroundColor: 'grey',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Animated.View style={{
                backgroundColor: '#084F6A',
                width: 150,
                height: 150,
                borderColor: 'white',
                borderWidth: 10,
                marginBottom: 10,
                opacity,
            }}/>

            <Button
                title={'FadeIn'}
                onPress={() => fadeIn()}
            />
            <Button
                title={'FadeOut'}
                onPress={() => fadeOut()}
            />

        </View>
    );
};

export default FadeScreen;

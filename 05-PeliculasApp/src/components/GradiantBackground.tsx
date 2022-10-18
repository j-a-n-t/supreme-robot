import {StyleSheet, View, Animated} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useContext, useEffect} from 'react';
import {GradiantContext} from '../context/GradiantContext';
import {useFade} from '../hooks/useFade';

interface Props {
    children: JSX.Element | JSX.Element[];
}

const GradiantBackground = ({children}: Props) => {
    const {
        colors: {primary, secondary},
        prevColors: {primary: prevPrimary, secondary: prevSecondary},
        setPrevMainColors,
    } = useContext(GradiantContext);

    const {fadeIn, fadeOut, opacity} = useFade();

    useEffect(() => {
        fadeIn(() => {
            setPrevMainColors({primary, secondary});
            fadeOut();
        });
    }, [primary, secondary]);

    return (
        <View style={{flex: 1}}>
            <LinearGradient
                colors={[prevPrimary, prevSecondary, 'white']}
                style={{...StyleSheet.absoluteFillObject}}
                start={{x: 0.1, y: 0.1}}
                end={{x: 0.5, y: 0.7}}
            />

            <Animated.View
                style={{...StyleSheet.absoluteFillObject, opacity}}>
                <LinearGradient
                    colors={[primary, secondary, 'white']}
                    style={{...StyleSheet.absoluteFillObject}}
                    start={{x: 0.1, y: 0.1}}
                    end={{x: 0.5, y: 0.7}}
                />
            </Animated.View>

            {children}
        </View>
    );
};

export {GradiantBackground};

import {useRef} from 'react';
import {Animated} from 'react-native';

const useFade = (value: number = 0) => {
    const opacity = useRef(new Animated.Value(value)).current;

    const fadeIn = (callback?: Function) => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
        }).start(() => callback ? callback() : null);
    };
    const fadeOut = (time: number = 300) => {
        Animated.timing(opacity, {
            toValue: 0,
            duration: time,
            useNativeDriver: true,
        }).start();
    };

    return {
        opacity,
        fadeIn,
        fadeOut,
    };

};

export {useFade};

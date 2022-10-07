import React from 'react';
import {SafeAreaView} from 'react-native';

// import HolaMundoScreen from './src/screens/HolaMundoScreen';
// import BoxObjectModelScreen from './src/screens/BoxObjectModelScreen';
// import HolaMundoScreen from "./src/screens/HolaMundoScreen";
// import CounterScreen from "./src/screens/CounterScreen";
import DimensionesScreen from './src/screens/DimensionesScreen';

const App = () => {
    return (
        <SafeAreaView style={{flex: 1}}>
            {/* <HolaMundoScreen />*/}
            {/* <CounterScreen />*/}
            {/*<BoxObjectModelScreen />*/}
            <DimensionesScreen/>
        </SafeAreaView>

    );
};

export default App;

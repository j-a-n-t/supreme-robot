import React from 'react';
import {SafeAreaView, StatusBar} from "react-native";

import CalculadoraScreen from "./src/screens/CalculadoraScreen";
import className from "./src/theme/AppTheme";

const App = () => {
    return (
        <SafeAreaView style={className.theme}>
            <StatusBar backgroundColor={"black"}/>
            <CalculadoraScreen/>
        </SafeAreaView>
    );
};


export default App;

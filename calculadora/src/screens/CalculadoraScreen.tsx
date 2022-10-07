import React from 'react';
import {Text, View} from "react-native";
import className from "../theme/AppTheme";

const CalculadoraScreen = () => {
    return (
        <View style={className.calculadoraContainer}>
            <Text style={className.resultadoPequeno}>1,500.00</Text>
            <Text style={className.resultado}>1,500.00</Text>

            <View style={className.fila}>

                <View style={className.boton}>
                    <Text style={className.botonText}>1</Text>
                </View>
                <View style={className.boton}>
                    <Text style={className.botonText}>1</Text>
                </View>
                <View style={className.boton}>
                    <Text style={className.botonText}>1</Text>
                </View>
                <View style={className.boton}>
                    <Text style={className.botonText}>1</Text>
                </View>

            </View>

        </View>
    );
};

export default CalculadoraScreen;

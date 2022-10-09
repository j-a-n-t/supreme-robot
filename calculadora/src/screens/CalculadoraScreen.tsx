import {Text, View} from "react-native";

import className from "../theme/AppTheme";
import BotonCalc from "../components/BotonCalc";
import useCalculadora from "../hooks/useCalculadora";


const CalculadoraScreen = () => {

    const {
        btnDelete,
        btnMultiplicar,
        armarOperacion,
        btnRestart,
        btnDividir,
        btnSumar,
        clean,
        calcular,
        positivoNegativo,
        numero,
        numeroAnterior
    } = useCalculadora()

    return (
        <View style={className.calculadoraContainer}>
            {
                (numeroAnterior !== "0") && <Text style={className.resultadoPequeno}>{numeroAnterior}</Text>
            }
            <Text style={className.resultado}
                  numberOfLines={1}
                  adjustsFontSizeToFit={true}>
                {numero}
            </Text>

            <View style={className.fila}>
                <BotonCalc text={"C"} color={"#9B9B9B"} action={clean}/>
                <BotonCalc text={"+/-"} color={"#9B9B9B"} action={positivoNegativo}/>
                <BotonCalc text={"DEL"} color={"#9B9B9B"} action={btnDelete}/>
                <BotonCalc text={"/"} color={"#FF9427"} action={btnDividir}/>
            </View>

            <View style={className.fila}>
                <BotonCalc text={"7"} action={armarOperacion}/>
                <BotonCalc text={"8"} action={armarOperacion}/>
                <BotonCalc text={"9"} action={armarOperacion}/>
                <BotonCalc text={"*"} color={"#FF9427"} action={btnMultiplicar}/>
            </View>

            <View style={className.fila}>
                <BotonCalc text={"4"} action={armarOperacion}/>
                <BotonCalc text={"5"} action={armarOperacion}/>
                <BotonCalc text={"6"} action={armarOperacion}/>
                <BotonCalc text={"-"} color={"#FF9427"} action={btnRestart}/>
            </View>

            <View style={className.fila}>
                <BotonCalc text={"1"} action={armarOperacion}/>
                <BotonCalc text={"2"} action={armarOperacion}/>
                <BotonCalc text={"3"} action={armarOperacion}/>
                <BotonCalc text={"+"} color={"#FF9427"} action={btnSumar}/>
            </View>

            <View style={className.fila}>
                <BotonCalc text={"0"} size={true} action={armarOperacion}/>
                <BotonCalc text={"."} action={armarOperacion}/>
                <BotonCalc text={"="} color={"#FF9427"} action={calcular}/>
            </View>

        </View>
    );
};

export default CalculadoraScreen;

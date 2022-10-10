import {Text, TouchableOpacity, View} from "react-native";

import className from "../theme/AppTheme";

interface PropsBtn {
    text: string,
    color?: string,
    size?: boolean,
    action: (numeroTexto: string) => void,
}


const BotonCalc = ({text, color = "#2D2D2D", size = false, action}: PropsBtn) => {
    return (
        <TouchableOpacity onPress={() => action(text)}>
            <View style={{...className.boton, backgroundColor: color, width: size ? 180 : 80}}>
                <Text style={{...className.botonText, color: (color === "#9B9B9B") ? "black" : "white"}}>
                    {text}</Text>
            </View>
        </TouchableOpacity>

    );
};

export default BotonCalc;

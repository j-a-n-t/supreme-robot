import {Button, Text, View} from "react-native";
import {StackScreenProps} from "@react-navigation/stack";

interface Props extends StackScreenProps<any, any> {
};


/*
* POPTOTOP -> Destruye el stack y regresa a la pagina principal
* POP-> Destruye el stack y manda a pagina anteriori
* */
const Pagina3Screen = ({navigation}: Props) => {
    return (
        <View>
            <Text>Pagina 3</Text>
            <Button
                title={"Regresar Pagina dos"}
                onPress={() => navigation.pop()}/>

            <Button title={"Inicio"} onPress={() => navigation.popToTop()}></Button>
        </View>
    );
};

export default Pagina3Screen;

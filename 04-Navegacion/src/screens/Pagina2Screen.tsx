import {Button, Text, View} from "react-native";
import {appStyle} from "../theme/AppStyle";
// import {useNavigation} from "@react-navigation/native";
import {StackScreenProps} from "@react-navigation/stack";


interface Props extends StackScreenProps<any, any> {
};

/*
* Se puede usar un hook en lugar de los props
* const navigator = useNavigation();
* y lo ejecutamos de la siguiente manera
* navigation.navigate("Pagina1Screen")
* */
const Pagina2Screen = ({navigation}: Props) => {

    return (
        <View style={appStyle.globalMargin}>
            <Text style={appStyle.title}> Página2Screen </Text>

            <Button
                title={"ir pagina 3"}
                onPress={() => navigation.navigate("Pagina3Screen")}/>

            <Button
                title={"Regresar pagina uno"}
                onPress={() => navigation.navigate("Pagina1Screen")}
            />
        </View>
    );
};

export default Pagina2Screen;

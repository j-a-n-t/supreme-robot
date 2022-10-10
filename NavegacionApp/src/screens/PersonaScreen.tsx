import {Text, View} from "react-native";
import {useEffect} from "react";
import {StackScreenProps} from "@react-navigation/stack";

import appStyle from "../theme/AppStyle";
import {RootStackParams} from "../nav/StackNavigator";

interface Props extends StackScreenProps<RootStackParams, "PersonaScreen"> {
};

const PersonaScreen = ({route, navigation}: Props) => {
    const params = route.params;

    useEffect(() => {
        navigation.setOptions({
            title: params.nombre
        })
    }, [])

    return (
        <View style={appStyle.globalMargin}>
            <Text style={appStyle.title}>{JSON.stringify(params)}</Text>
        </View>
    );
};

export default PersonaScreen;

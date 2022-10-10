import {Button, Text, View} from "react-native";
import {StackScreenProps} from "@react-navigation/stack";
import appStyle from "../theme/AppStyle";

interface Props extends StackScreenProps<any, any> {
};

const Pagina1Screen = ({navigation}: Props) => {

    return (
        <View style={appStyle.globalMargin}>
            <Text style={{color: "black"}}>Pagina uno</Text>

            <Button
                title={"ir pagina dos"}
                onPress={() => navigation.navigate("Pagina2Screen")}
            />
        </View>
    );

};

export default Pagina1Screen;

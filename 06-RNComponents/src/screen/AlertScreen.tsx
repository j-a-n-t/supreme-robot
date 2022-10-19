import { Alert, Button, View } from "react-native";
import { HeaderTitle } from "../components/HeaderTitle";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import prompt from "react-native-prompt-android";

const AlertScreen = () => {
  const { top } = useSafeAreaInsets();

  const showAlert = () => {
    Alert.alert("Titulo", "Cuerpo de la Alerta", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel pressed"),
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => console.log("Ok pressed"),
        style: "default",
      },
    ]);
  };
  const showPrompt = () => {
    prompt(
      "Titulo Prompt",
      "Cuerpo del Prompt",
      [
        { text: "Cancel", style: "cancel", onPress: () => console.log("Cancel") },
        { text: "Ok", style: "default", onPress: (message: string) => console.log({ message }) },
      ]);
  };

  return (
    <View style={{ marginTop: top, marginHorizontal: 15 }}>
      <HeaderTitle title={"Alertas"} />

      <Button title={"Mostrar Alerta"} onPress={showAlert} />
      <View style={{ padding: 2 }} />
      <Button title={"Mostrar Propmt"} onPress={showPrompt} />

    </View>
  );
};

export { AlertScreen };

import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  Keyboard,
  Switch,
} from "react-native";
import { HeaderTitle } from "../components/HeaderTitle";
import { useState } from "react";
import { useForm } from "../hooks/useForm";

const InputTextScreen = () => {

  const { form, onChange, nombre, telefono, email, isSubscribed } = useForm({
    nombre: "",
    email: "",
    telefono: "",
    isSubscribed: false,
  });

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{ margin: 12 }}>
            <HeaderTitle title={"Input Text"} />

            <TextInput
              style={className.input}
              placeholder={"Ingresa nombre"}
              value={nombre}
              keyboardType={"default"}
              autoCapitalize={"words"}
              autoCorrect={false}
              autoFocus={true}
              onChangeText={(text: string) => onChange(text, "nombre")}
            />

            <TextInput
              style={className.input}
              placeholder={"Ingresa email"}
              value={email}
              keyboardType={"email-address"}
              autoCapitalize={"none"}
              onChangeText={(text: string) => onChange(text, "email")}
            />

            <TextInput
              style={{ ...className.input }}
              placeholder={"Ingresa telefono"}
              value={telefono}
              keyboardType={"numeric"}
              autoCapitalize={"none"}
              autoCorrect={false}
              onChangeText={(text: string) => onChange(text, "telefono")}
            />

            <View style={{
              alignContent: "center",
              flexDirection: "row",
              justifyContent: "space-between",
            }}>
              <Text>{!isSubscribed ? "No Suscrito" : "Suscrito"}</Text>
              <Switch
                trackColor={{ false: "#D9D9DB", true: "#7070de" }}
                thumbColor={(Platform.OS === "android") ? "#5856D6" : " "}
                onValueChange={() => onChange(!isSubscribed, "isSubscribed")}
                value={isSubscribed}
              />
            </View>

            <Text style={className.textInput}>{JSON.stringify(form, null, 5)}
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  )
    ;
};

const className = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 10,
    margin: 12,
    height: 40,
    borderRadius: 10,
    paddingHorizontal: 5,
    borderColor: "rgba(0,0,0,0.3)",
  },
  textInput: {
    fontSize: 25,
    fontWeight: "bold",
  },
});

export { InputTextScreen };

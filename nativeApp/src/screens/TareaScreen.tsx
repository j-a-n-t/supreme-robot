import React from "react";
import { StyleSheet, View } from "react-native";

const TareaScreen = () => {
  return (
    <View style={style.container}>
      <View style={style.cajaMorada}></View>
      <View style={style.cajaNaranja}></View>
      <View style={style.cajaAzul}></View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#28425B",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
  },
  cajaMorada: {
    width:100,
    height:100,
    borderWidth: 10,
    borderColor: "white",
    backgroundColor: "#5856D6",
  },
  cajaNaranja: {
    top:50,
    width:100,
    height:100,
    borderWidth: 10,
    borderColor: "white",
    backgroundColor: "#F0A23B",
  },
  cajaAzul: {
    width:100,
    height:100,
    borderWidth: 10,
    borderColor: "white",
    backgroundColor: "#31bfcb",
  },
});
export default TareaScreen;

import React from "react";
import { Dimensions, StyleSheet, Text, useWindowDimensions, View } from "react-native";

// const { width, height } = Dimensions.get("window");

const DimensionesScreen = () => {

  const { width, height } = useWindowDimensions();

  return (
    <>
      <View style={style.container}>
        <View style={style.cajaMorada}></View>
        <View style={style.cajaNaranja}></View>
      </View>
      <Text style={style.title}> W: {width} H: {height} </Text>
    </>

  );
};

const style = StyleSheet.create({
  container: {
    width: "100%",
    height: 400,
    backgroundColor: "red",
  },
  cajaMorada: {
    backgroundColor: "#5656D6",
    // width: "50%",
    height: "50%",
  },
  cajaNaranja: {
    backgroundColor: "#F0A23B",
  },
  title: {
    fontSize: 15,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default DimensionesScreen;

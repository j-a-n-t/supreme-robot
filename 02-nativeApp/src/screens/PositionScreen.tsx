import { StyleSheet, Text, View } from "react-native";

const PositionScreen = () => {
  return (
    <View style={style.container}>
      <View style={style.cajaMorada}></View>
      <View style={style.cajaNaranja}></View>
      <View style={style.cajaVerde}></View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    // flex: 1,
    width: 300,
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#24C4D9",
  },
  cajaMorada: {
    width: 100,
    height: 100,
    backgroundColor: "#5856D6",
    borderWidth: 10,
    borderColor: "white",
    position: "absolute",
    top: 0,
    right: 0,
  },
  cajaNaranja: {
    width: 100,
    height: 100,
    backgroundColor: "#F0A23B",
    borderWidth: 10,
    borderColor: "white",
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  cajaVerde: {
    width: 100,
    height: 100,
    backgroundColor: "#24521b",
    borderWidth: 10,
    borderColor: "white",
    position: "absolute",
    bottom: 0,
    left: 0,
  },
});


export default PositionScreen;

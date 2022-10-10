import { StyleSheet, Text, View } from "react-native";

const FlexScreen = () => {
  return (
    <View style={style.container}>
      <Text style={style.caja1}>Caja 1</Text>
      <Text style={style.caja2}>Caja 2</Text>
      <Text style={style.caja3}>Caja 3</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#28C4D9",
  },
  caja1: {
    fontSize: 20,
    borderWidth: 2,
    borderColor: "white",
  },
  caja2: {
    fontSize: 20,
    borderWidth: 2,
    borderColor: "white",
  },
  caja3: {
    fontSize: 20,
    borderWidth: 2,
    borderColor: "white",
  },
});

export default FlexScreen;

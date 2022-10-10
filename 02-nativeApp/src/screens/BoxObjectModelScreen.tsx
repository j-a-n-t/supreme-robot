import React from "react";
import { StyleSheet, Text, View } from "react-native";

const BoxObjectModelScreen = () => {
  return (
    <View style={style.container}>
      <Text style={style.title}>Box Object Model</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
  title: {
    fontSize: 20,
    padding: 10,
    marginHorizontal: 10,
    borderWidth: 5,
  },
});

export default BoxObjectModelScreen;

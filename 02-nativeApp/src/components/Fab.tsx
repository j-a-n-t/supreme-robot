import React from "react";
import { StyleSheet, Text, TouchableNativeFeedback, View } from "react-native";

interface Props {
  title: string,
  position?: "br" | "bl",
  onPress: () => void
}

const Fab = ({ title, onPress, position = "br" }: Props) => {

  return (
    <View style={[
      style.fabLocation,
      (position === "bl" ? style.FabLeft : style.FabRight)]}>
      <TouchableNativeFeedback
        onPress={onPress}
        background={TouchableNativeFeedback.Ripple("#24425B", false, 30)}>
        <View style={style.fab}>
          <Text style={style.fabText}>{title}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const style = StyleSheet.create({
  fabLocation: {
    position: "absolute",
    bottom: 25,
  },
  FabRight: {
    right: 25,
  },
  FabLeft: {
    left: 25,
  },
  fab: {
    backgroundColor: "#5856D6",
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 2,
  },
  fabText: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "center",
  },
});

export default Fab;


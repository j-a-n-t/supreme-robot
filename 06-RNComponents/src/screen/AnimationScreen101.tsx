import { Animated, Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useContext, useRef } from "react";
import { useAnimation } from "../hooks/useAnimation";
import { ThemeContext } from "../context/themeContext";


const AnimationScreen101 = () => {
  const { fadeIn, fadeOut, startMovingPosition, opacity, position } = useAnimation();

  return (
    <View style={className.container}>
      <Animated.View style={{
        ...className.purpleBox,
        opacity,
        marginBottom: 20,
        transform: [{ translateX: position }],
      }} />

      <View style={{ flexDirection: "row" }}>

        <Button title={"fadein"} onPress={() => {
          fadeIn();
          startMovingPosition(-100);
        }} />

        <Button onPress={fadeOut} title={"fadeout"} />

      </View>
    </View>
  );
};


const className = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  purpleBox: {
    backgroundColor: "#5856D6",
    width: 150,
    height: 150,
  },
});

export { AnimationScreen101 };

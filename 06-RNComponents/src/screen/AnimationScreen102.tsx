import { Animated, PanResponder, StyleSheet, Text, View } from "react-native";
import { useRef } from "react";

const AnimationScreen102 = () => {

  const pan = useRef(new Animated.ValueXY()).current;
  const responderMove = Animated.event([null, { dx: pan.x, dy: pan.y }], { useNativeDriver: false });

  const panResponder = useRef(PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: responderMove,
      onPanResponderRelease: () => Animated.spring(pan, { toValue: { x: 0, y: 0 }, useNativeDriver: true }).start(),
    }),
  ).current;

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Animated.View
        {...panResponder.panHandlers}
        style={{ ...className.blueBox, transform: [{ translateX: pan.x }, { translateY: pan.y }] }} />
    </View>
  );
};

const className = StyleSheet.create({
  blueBox: {
    backgroundColor: "#222177",
    width: 150,
    height: 150,
    borderRadius: 25,
  },
});

export { AnimationScreen102 };

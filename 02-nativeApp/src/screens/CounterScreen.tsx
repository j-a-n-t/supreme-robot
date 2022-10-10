import React, { useState } from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

import Fab from "../components/Fab";

const CounterScreen = () => {

  const [count, setCount] = useState<number>(10);

  return (
    <View style={style.container}>
      <Text style={style.title}>
        Counter: {count}
      </Text>

      <Fab title={"+1"} onPress={() => setCount(count + 1)} />
      <Fab title={"-1"} onPress={() => setCount(count - 1)} position={"bl"} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 45,
    top: -10,
    textAlign: "center",
  },
});


export default CounterScreen;

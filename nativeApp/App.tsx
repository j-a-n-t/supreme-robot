import React from "react";
import HolaMundoScreen from "./src/screens/HolaMundoScreen";
import BoxObjectModelScreen from "./src/screens/BoxObjectModelScreen";
import { SafeAreaView } from "react-native";
import DimensionesScreen from "./src/screens/DimensionesScreen";
// import HolaMundoScreen from "./src/screens/HolaMundoScreen";
// import CounterScreen from "./src/screens/CounterScreen";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <HolaMundoScreen />*/}
      {/* <CounterScreen />*/}
      {/*<BoxObjectModelScreen />*/}
      <DimensionesScreen />
    </SafeAreaView>

  );
};

export default App;

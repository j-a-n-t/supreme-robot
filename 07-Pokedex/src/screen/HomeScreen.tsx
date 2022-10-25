import { Text, View } from "react-native";
import { useContext } from "react";

import { ThemeContext } from "../context/themeContext";

const HomeScreen = () => {
  const { theme: { colors } } = useContext(ThemeContext);
  return (
    <View>
      <Text style={{ color: colors.text }}>Home Screen</Text>
    </View>
  );
};

export { HomeScreen };

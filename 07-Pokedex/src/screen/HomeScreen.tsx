import { Text, View } from "react-native";
import { useContext } from "react";
import Icon from "react-native-vector-icons/Ionicons";

import { ThemeContext } from "../context/themeContext";

const HomeScreen = () => {
  const { theme: { colors } } = useContext(ThemeContext);
  return (
    <View>
      <Text style={{ color: colors.text }}>Home Screen</Text>
      <Icon name="albums" size={30} color="#900" />
    </View>
  );
};

export { HomeScreen };

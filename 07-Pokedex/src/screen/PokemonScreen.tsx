import { Text, View } from "react-native";
import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

const PokemonScreen = () => {
  const { theme: { colors } } = useContext(ThemeContext);
  return (
    <View>
      <Text style={{ color: colors.text }}>Pokemon Screen</Text>
    </View>
  );
};

export { PokemonScreen };

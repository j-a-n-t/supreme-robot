import { Text, TouchableOpacity, View } from "react-native";
import { HeaderTitle } from "../components/HeaderTitle";
import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

const ChangeThemeScreen = () => {
  const { setLightTheme, setDarkTheme, theme: { colors } } = useContext(ThemeContext);

  return (
    <View>
      <HeaderTitle title={"Theme"} />

      <View style={{ flexDirection: "row",justifyContent:"space-between",marginHorizontal:20}}>
        <TouchableOpacity
          onPress={setDarkTheme}
          activeOpacity={0.8}
          style={{
            backgroundColor: colors.primary,
            justifyContent: "center",
            width: 150,
            height: 50,
            borderRadius: 20,
          }}>
          <Text style={{
            color: "white",
            textAlign: "center",
            fontSize: 22,
          }}>
            Dark
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={setLightTheme}
          activeOpacity={0.8}
          style={{
            backgroundColor: colors.primary,
            justifyContent: "center",
            width: 150,
            height: 50,
            borderRadius: 20,
          }}>
          <Text style={{
            color: "white",
            textAlign: "center",
            fontSize: 22,
          }}>
            Light
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export { ChangeThemeScreen };

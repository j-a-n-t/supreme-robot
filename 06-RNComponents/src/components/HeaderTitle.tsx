import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ThemeContext } from "../context/themeContext";

interface Props {
  title: string;
}

const HeaderTitle = ({ title }: Props) => {
  const { top } = useSafeAreaInsets();
  const { theme: { colors } } = useContext(ThemeContext);

  return (
    <View>
      <Text style={{ ...className.titleHeader, color: colors.text }}>{title}</Text>
    </View>
  );
};


const className = StyleSheet.create({
  titleHeader: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
  },

});

export { HeaderTitle };

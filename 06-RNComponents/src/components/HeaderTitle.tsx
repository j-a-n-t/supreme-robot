import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface Props {
  title: string;
}

const HeaderTitle = ({ title }: Props) => {
  const { top } = useSafeAreaInsets();

  return (
    <View>
      <Text style={className.titleHeader}>{title}</Text>
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

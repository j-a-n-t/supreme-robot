import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { ListMenu } from "../interface/menuItem";
import { NavigationProp, useNavigation, useTheme } from "@react-navigation/native";
import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";


const ListMenuItem = ({ menuItem: { title, icon, component } }: ListMenu) => {
  const { theme:{colors} } = useContext(ThemeContext);
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(component)}
      style={className.container}>

      <View style={className.itemTextContainer}>
        <Text style={{ ...className.itemText, color: colors.text }}>{title}</Text>
        {icon && <Icon name={icon} size={25} color={colors.primary} style={{ marginHorizontal: 5 }} />}
      </View>

      <Icon name={"chevron-forward"} size={25} color={colors.primary} style={{ marginHorizontal: 5 }} />

    </TouchableOpacity>
  );
};

export { ListMenuItem };


const className = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
  },
  itemTextContainer: {
    flexDirection: "row-reverse",
  },
  itemText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

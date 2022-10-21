import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { ListMenu } from "../interface/menuItem";
import { NavigationProp, useNavigation, useTheme } from "@react-navigation/native";


const ListMenuItem = ({ menuItem: { title, icon, component } }: ListMenu) => {
  const { colors } = useTheme();
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(component)}
      style={className.container}>

      <View style={className.itemTextContainer}>
        <Text style={{ ...className.itemText, color: colors.text }}>{title}</Text>
        {icon && <Icon name={icon} size={25} color={"#5856D6"} style={{ marginHorizontal: 5 }} />}
      </View>

      <Icon name={"chevron-forward"} size={25} color={"#5856D6"} style={{ marginHorizontal: 5 }} />

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

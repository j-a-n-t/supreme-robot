import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { ListMenuItem } from "../components/FlatListMenuItem";
import { MenuItem } from "../interface/menuItem";


const menuItems: MenuItem[] = [
  { id: 1, title: "Animation 101", icon: "cube", component: "AnimationScreen101" },
  { id: 2, title: "Animation 102", icon: "albums", component: "AnimationScreen102" },
  { id: 3, title: "Emiliano Mateo Martínez Torres", icon: "color-filter", component: "" },
  { id: 4, title: "Monica Torres Quiterio", icon: "color-filter", component: "" },
];


const HomeScreen = () => {
  const { top } = useSafeAreaInsets();

  const renderHeader = () => {
    return (
      <View style={{ marginTop: top }}>
        <Text style={className.titleHeader}>Opciones del Menú</Text>
      </View>
    );
  };
  const itemSeparetor = () => {
    return (<View style={{ borderBottomWidth: 1, borderBottomColor: "#818181", opacity: 0.4 }} />);
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={menuItems}
        keyExtractor={item => item.id.toString()}
        ListHeaderComponent={renderHeader}
        ItemSeparatorComponent={itemSeparetor}
        renderItem={({ item }) => <ListMenuItem menuItem={item} />}
      />
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

export { HomeScreen };

import { FlatList, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";

import menuItems from "../data/menuItem";
import { ListMenuItem } from "../components/FlatListMenuItem";
import { HeaderTitle } from "../components/HeaderTitle";

const HomeScreen = () => {
  const { top } = useSafeAreaInsets();

  const itemSeparetor = () => {
    return (<View style={{ borderBottomWidth: 1, borderBottomColor: "#818181", opacity: 0.4 }} />);
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={menuItems}
        keyExtractor={item => item.id.toString()}
        ListHeaderComponent={<HeaderTitle title={"Opciones del Menú"} />}
        ItemSeparatorComponent={itemSeparetor}
        renderItem={({ item }) => <ListMenuItem menuItem={item} />}
      />
    </View>
  );
};

export { HomeScreen };

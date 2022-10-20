import { FlatList, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";

import menuItems from "../data/menuItem";
import { ListMenuItem } from "../components/FlatListMenuItem";
import { HeaderTitle } from "../components/HeaderTitle";
import { ItemSeparator } from "../components/ItemSeparator";

const HomeScreen = () => {
  const { top } = useSafeAreaInsets();

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={menuItems}
        keyExtractor={item => item.id.toString()}
        ListHeaderComponent={<HeaderTitle title={"Opciones del Menú"} />}
        ItemSeparatorComponent={() => <ItemSeparator />}
        renderItem={({ item }) => <ListMenuItem menuItem={item} />}
      />
    </View>
  );
};

export { HomeScreen };

import { SectionList, Text, View } from "react-native";
import { HeaderTitle } from "../components/HeaderTitle";
import { Casas, casas } from "../data/Heros";
import { ItemSeparator } from "../components/ItemSeparator";
import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

const SectionListScreen = () => {
  const { theme: { colors } } = useContext(ThemeContext);
  const RenderItem = (item: string) => {
    return (
      <View>
        <Text style={{color:colors.text}}>{item}</Text>
      </View>
    );
  };

  return (
    <View style={{ marginBottom: 100, flex: 1 }}>

      <SectionList
        sections={casas}
        keyExtractor={(item, index) => item + index}
        ListHeaderComponent={<HeaderTitle title={"Section list"} />}
        ListFooterComponent={<HeaderTitle title={"Total de casas" + casas.length} />}
        renderItem={({ item }) => RenderItem(item)}
        stickySectionHeadersEnabled={true}
        renderSectionHeader={({ section }) => <HeaderTitle title={section.casa} />}
        renderSectionFooter={({ section }) => <HeaderTitle
          title={"Total de " + section.casa + " " + section.data.length} />}
        // ItemSeparatorComponent={() => <ItemSeparator />}
        SectionSeparatorComponent={() => <ItemSeparator />}
        showsVerticalScrollIndicator={false}
      />

    </View>
  );
};

export { SectionListScreen };

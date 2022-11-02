import { ActivityIndicator, FlatList, Image, SafeAreaView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useContext } from "react";
import Icon from "react-native-vector-icons/Ionicons";


import { ThemeContext } from "../context/themeContext";
import style from "../theme/appTheme";
import { usePokemonPagination } from "../hooks/usePokemonPagination";
import { PokemonCard } from "../components/PokemonCard";

const HomeScreen = () => {

  const { theme: { colors } } = useContext(ThemeContext);
  const { top } = useSafeAreaInsets();
  const { simplePokemon, isLoading, loadPokemons } = usePokemonPagination();

  return (
    <SafeAreaView style={{ top: top + 20 }}>
      <Image
        source={require("../assets/pokebola.png")}
        style={{ ...style.pokeballBG }}
      />

      <View style={{ alignItems: "center" }}>
        <FlatList
          data={simplePokemon}
          keyExtractor={pokemon => pokemon.id + pokemon.name}
          renderItem={({ item: pokemon }) => <PokemonCard pokemon={pokemon} />}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          //header
          ListHeaderComponent={
            <Text
              style={{
                ...style.title, ...style.globalMargin,
                color: colors.text,
                top: top + 20,
                marginBottom: top + 20,
                paddingBottom: 15,
              }}>
              Pokedex
            </Text>}
          //scroll infinite
          onEndReached={loadPokemons}
          onEndReachedThreshold={0.4}
          ListFooterComponent={
            <ActivityIndicator style={{ height: 100 }} size={20} color={colors.primary} />
          }
        />
      </View>

    </SafeAreaView>
  );
};

export { HomeScreen };

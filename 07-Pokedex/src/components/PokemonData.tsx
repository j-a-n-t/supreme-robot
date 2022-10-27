import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { PokemonDataProps, PokemonDetails, PoKemonFull, PokemonProps } from "../types/Pokemon";
import style from "../theme/appTheme";

const PokemonData = ({ pokemon }: PokemonDataProps) => {

  return (
    <ScrollView
      style={{ ...StyleSheet.absoluteFillObject }}
      showsVerticalScrollIndicator={false}>

      {/*Types & Peso*/}
      <View style={{ ...className.container }}>
        <Text style={{ ...className.title }}>Tipos</Text>
        <View style={{ flexDirection: "row" }}>
          {
            pokemon.types.map(({ type }, index: number) => (
              <Text
                style={{ ...className.regultarText, marginRight: 10 }}
                key={type.name + index}
              >
                {type.name}
              </Text>
            ))
          }
        </View>
        {/*Peso*/}
        <Text style={{ ...className.title }}>Peso</Text>
        <Text style={{ ...className.regultarText }}>{pokemon.weight}lb</Text>
      </View>

      {/*Sprite*/}
      <View style={{ ...className.container }}>
        <Text style={{ ...className.title }}>Sprites</Text>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Image
            style={{ ...className.basicSprite }}
            source={{ uri: pokemon.sprites.front_default }}
          />
          <Image
            style={{ ...className.basicSprite }}
            source={{ uri: pokemon.sprites.back_default }}
          />
          <Image
            style={{ ...className.basicSprite }}
            source={{ uri: pokemon.sprites.front_shiny }}
          />
          <Image
            style={{ ...className.basicSprite }}
            source={{ uri: pokemon.sprites.back_shiny }}
          />

        </ScrollView>

      </View>

      {/*Habilidades*/}
      <View style={{ ...className.container }}>
        <Text style={{ ...className.title }}>Habilidades Base</Text>
        <View style={{ flexDirection: "row" }}>
          {
            pokemon.abilities.map(({ ability }, index: number) => (
              <Text
                style={{ ...className.regultarText, marginRight: 10 }}
                key={ability.name + index}
              >
                {ability.name}
              </Text>
            ))
          }
        </View>
      </View>

      {/*Movimientos*/}
      <View style={{ ...className.container }}>
        <Text style={{ ...className.title }}>Movimientos</Text>
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          {
            pokemon.moves.map(({ move }, index: number) => (
              <Text
                style={{ ...className.regultarText, marginRight: 10 }}
                key={move.name + index}
              >
                {move.name}
              </Text>
            ))
          }
        </View>
      </View>

      {/*Stats*/}
      <View style={{ ...className.container }}>
        <Text style={{ ...className.title }}>Stats</Text>
        <View style={{}}>
          {
            pokemon.stats.map(({ stat, base_stat }, index: number) => (
              <View
                key={stat.name + index}
                style={{ flexDirection: "row" }}
              >
                <Text style={{ ...className.regultarText, marginRight: 10, width: 150 }}>
                  {stat.name}
                </Text>
                <Text style={{ ...className.regultarText, fontWeight: "bold" }}>
                  {base_stat}
                </Text>
              </View>
            ))
          }
        </View>

        <View style={{ alignItems: "center", marginBottom: 50 }}>
          <Image
            style={{ ...className.basicSprite }}
            source={{ uri: pokemon.sprites.front_default }}
          />
        </View>

      </View>

    </ScrollView>
  );
};


const className = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
    marginTop: 20,
  },
  regultarText: {
    fontSize: 19,
  },
  basicSprite: {
    width: 100,
    height: 100,
  },
});

export { PokemonData };

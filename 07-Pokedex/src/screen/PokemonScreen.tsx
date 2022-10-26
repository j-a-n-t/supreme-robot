import { useContext } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ActivityIndicator, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { PokemonDetails, PokemonProps } from "../types/Pokemon";
import { ThemeContext } from "../context/themeContext";
import { usePokemon } from "../hooks/usePokemon";
import Pokemon from "../apis/Pokemon";
import { PokemonData } from "../components/PokemonData";

const PokemonScreen = ({ route, navigation }: PokemonDetails) => {

  const { theme: { colors } } = useContext(ThemeContext);
  const { top } = useSafeAreaInsets();

  const { name, picture, id } = route.params.pokemon.pokemon;
  const color = route.params.color;

  const { pokemon: pokemonFull, isLoading } = usePokemon(id);


  return (
    <View style={{ flex: 1 }}>
      <View
        style={{ ...style.headerContainer, backgroundColor: color }}

      >
        {/*boton regresar*/}
        <TouchableOpacity
          activeOpacity={0.8}
          style={{ ...style.backButton, top: top + 10 }}
          onPress={() => navigation.pop()}
        >
          <Icon name={"arrow-back-outline"} color={"white"} size={50} />
        </TouchableOpacity>

        {/*nombre ppokemon*/}
        <Text style={{ ...style.pokemoName, top: top + 60 }}>
          {name + "\n"}
          {"#" + id}
        </Text>

        {/*Pokebola blanca*/}

        <Image
          source={require("../assets/pokebola-blanca.png")}
          style={{ ...style.pokeball }}
        />

        {/*Imagen Pokemon*/}
        <Image
          source={{ uri: picture }}
          style={{ ...style.image }}
        />
      </View>

      {/*Detalles y Loading*/}
      <View style={{ ...style.loading }}>

        {isLoading
          ? <ActivityIndicator size={50} color={colors.primary} />
          : <PokemonData />
        }


      </View>


    </View>
  );

};


const style = StyleSheet.create({
  headerContainer: {
    height: 400,
    zIndex: 999,
    alignItems: "center",
    borderBottomRightRadius: 1000,
    borderBottomLeftRadius: 1000,
  },
  backButton: {
    position: "absolute",
    left: 20,
  },
  pokemoName: {
    color: "white",
    fontSize: 40,
    alignSelf: "flex-start",
    let: 20,
    textTransform: "uppercase",
  },
  pokeball: {
    width: 250,
    height: 250,
    bottom: -50,
    opacity: 0.7,
  },
  image: {
    width: 250,
    height: 250,
    position: "absolute",
    bottom: -25,
  },
  loading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export { PokemonScreen };

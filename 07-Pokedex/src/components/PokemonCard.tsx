import { useContext, useEffect, useState } from "react";
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";

import { PokemonCardProps } from "../types/Pokemon";
import style from "../theme/appTheme";
import { ThemeContext } from "../context/themeContext";
import { useCardColor } from "../hooks/useCardColor";


const PokemonCard = ({ pokemon: { name, picture, id, color } }: PokemonCardProps) => {

  const { theme: { colors } } = useContext(ThemeContext);
  const { bgColor } = useCardColor(picture);
  const { width } = Dimensions.get("window");

  return (

    <TouchableOpacity activeOpacity={0.5}>
      <View style={{ ...style.cardContainer, width: width * 0.4, backgroundColor: bgColor }}>
        {/*Nombre del Pokemon*/}
        <Text
          style={{ ...style.nameCard }}>
          {name}
          {"\n#" + id}
        </Text>
      </View>

      <View style={{ ...style.pokeballContainer }}>
        <Image
          source={require("../assets/pokebola-blanca.png")}
          style={{ ...style.pokeball }} />
      </View>


      <Image
        source={{ uri: picture }}
        style={{ ...style.pokeballImage }}
      />
    </TouchableOpacity>
  );
};

export { PokemonCard };

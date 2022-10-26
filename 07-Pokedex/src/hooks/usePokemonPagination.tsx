import { useEffect, useRef, useState } from "react";
import PokemonAPI from "../apis/Pokemon";
import { Pokemon, PokemonPaginationResp, SimplePokemon } from "../types/Pokemon";

const usePokemonPagination = () => {

  const [isLoading, setIsloading] = useState<boolean>(true);
  const [simplePokemon, setSimplePokemon] = useState<SimplePokemon[]>([]);
  const nextUrl = useRef("https://pokeapi.co/api/v2/pokemon?limit=20");

  const loadPokemons = async () => {
    try {
      setIsloading(true);
      const { data, data: { results } } = await PokemonAPI.get<PokemonPaginationResp>(nextUrl.current);
      nextUrl.current = data.next;

      mapPokemonListToSimplePokemon(results);

    } catch (e) {
      console.log(e);
    }
  };


  const mapPokemonListToSimplePokemon = (pokemonList: Pokemon[]): void => {

    const newPokemonList: SimplePokemon[] = pokemonList.map(({ name, url }) => {
      const urlParts = url.split("/");
      const id = urlParts[urlParts.length - 2];
      const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
      return { id, name, picture };
    });
    setSimplePokemon([...simplePokemon, ...newPokemonList]);
    setIsloading(false);
  };


  useEffect(() => {
    loadPokemons();

  }, []);


  return {
    simplePokemon,
    isLoading,
    loadPokemons,
  };

};

export { usePokemonPagination };

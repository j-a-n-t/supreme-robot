import { useEffect, useState } from "react";
import { PoKemonFull } from "../types/Pokemon";
import PokemonAPI from "../apis/Pokemon";

const usePokemon = (id: string) => {

  const [isLoading, setIsloading] = useState<boolean>(true);
  const [pokemon, setPokemon] = useState<PoKemonFull>({} as PoKemonFull);


  const loadPokemonDetails = async () => {

    const { data } = await PokemonAPI.get<PoKemonFull>(`https://pokeapi.co/api/v2/pokemon/${id}`);
    setPokemon(data);
    setIsloading(false);
  };

  useEffect(() => {
    loadPokemonDetails();
  }, []);

  return {
    pokemon,
    isLoading,
  };

};

export { usePokemon };

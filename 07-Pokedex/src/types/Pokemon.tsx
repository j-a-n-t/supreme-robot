export interface PokemonPaginationResp {
  count: number;
  next: string;
  previous: null;
  results: Pokemon[];
}

export interface Pokemon {
  name: string;
  url: string;
}

export interface SimplePokemon {
  id: string,
  name: string,
  picture: string,
  color?: string
}


export interface PokemonCardProps {
  pokemon: SimplePokemon;
}

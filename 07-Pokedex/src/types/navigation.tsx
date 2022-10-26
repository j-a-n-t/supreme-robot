import { PokemonProps } from "./Pokemon";

export type StackNavProps =
  {
    "HomeScreen": undefined,
    "PokemonScreen": { pokemon: PokemonProps, color: string }
  }

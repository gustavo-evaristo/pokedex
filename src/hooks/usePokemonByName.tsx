import { useQuery } from 'react-query';
import { findPokemon } from '~/api/pokemon.api';

export function usePokemonByName(name: string) {
  return useQuery<Pokemon>(['findPokemon', name], async () => await findPokemon(name), {
    enabled: false,
  });
}

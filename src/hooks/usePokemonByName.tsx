import axios from 'axios';
import { useQuery } from 'react-query';

async function findPokemon(name: string) {
  const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);

  return data;
}

export function usePokemonByName(name: string) {
  return useQuery<Pokemon>(
    'findPokemons',
    async () => {
      const response = await findPokemon(name);

      const { id, sprites, types } = response;

      const image =
        sprites?.other?.['official-artwork']?.front_default ||
        sprites?.other?.dream_world?.front_default ||
        sprites?.other?.home?.front_default;

      const formattedTypes = types.map(({ type }) => type.name);

      return {
        id,
        name,
        image,
        types: formattedTypes,
      };
    },
    {
      enabled: false,
    },
  );
}

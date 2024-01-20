import axios from 'axios';
import { useQuery } from 'react-query';

interface Output {
  results: Pokemon[];
}

async function findPokemons() {
  const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=890');

  return data;
}

async function findPokemonByUrl(url: string) {
  const { data } = await axios.get(url);

  return data;
}

export function usePokemons() {
  return useQuery<Output>('findPokemons', async () => {
    const response = await findPokemons();

    const pokemons = await Promise.all(
      response?.results?.map(async (pokemon) => {
        const { id, name, sprites, types } = await findPokemonByUrl(pokemon.url);

        const { front_default, other } = sprites;

        const image =
          other?.['official-artwork']?.front_default ||
          other?.dream_world?.front_default ||
          front_default;

        const formattedTypes = types.map(({ type }) => type.name);

        return { id, name, image, types: formattedTypes };
      }),
    );

    return {
      ...response,
      results: pokemons,
    };
  });
}

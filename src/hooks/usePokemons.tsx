import axios from 'axios';
import { useInfiniteQuery } from 'react-query';

interface Output {
  pokemons: Pokemon[];
}

async function findPokemons(page: number) {
  const size = 15;

  const offset = (page - 1) * size;

  const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon', {
    params: {
      limit: size,
      offset,
    },
  });

  return data;
}

async function findPokemonByUrl(url: string) {
  const { data } = await axios.get(url);

  return data;
}

export function usePokemons() {
  return useInfiniteQuery<Output>(
    'findPokemons',
    async ({ pageParam = 1 }) => {
      const response = await findPokemons(pageParam);

      const pokemons = await Promise.all(
        response?.results?.map(async (pokemon) => {
          const { id, name, sprites, types } = await findPokemonByUrl(pokemon.url);

          const image =
            sprites?.other?.['official-artwork']?.front_default ||
            sprites?.other?.dream_world?.front_default ||
            sprites?.other?.home?.front_default;

          const formattedTypes = types.map(({ type }) => type.name);

          return { id, name, image, types: formattedTypes };
        }),
      );

      return {
        ...response,
        pokemons,
      };
    },
    {
      staleTime: 1000 * 60 * 5, // 5 minutes
      getNextPageParam: (lastPage, allPages) =>
        lastPage?.pokemons?.length ? allPages?.length + 1 : null,
    },
  );
}

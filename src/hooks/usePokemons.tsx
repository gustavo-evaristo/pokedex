import { useInfiniteQuery } from 'react-query';
import { findPokemonByUrl, findPokemons } from '~/api/pokemon.api';

interface Output {
  pokemons: Pokemon[];
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

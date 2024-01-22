import { useQuery } from 'react-query';
import { findPokemon } from '~/api/pokemon.api';
import { toast } from '~/utils/toast';

export function usePokemonByName(name: string) {
  return useQuery<Pokemon>(
    ['findPokemon', name],
    async () => {
      const { id, sprites, types } = await findPokemon(name);

      const image =
        sprites?.other?.['official-artwork']?.front_default ||
        sprites?.other?.dream_world?.front_default ||
        sprites?.other?.home?.front_default;

      const formattedTypes = types.map(({ type }) => type.name);

      return { id, name, image, types: formattedTypes };
    },
    {
      enabled: false,
      retry: false,
      onError: () => toast({ message: 'Pokemon não encontrado' }),
    },
  );
}

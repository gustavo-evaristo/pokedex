import { useQuery } from 'react-query';
import { findPokemon } from '~/api/pokemon.api';
import { toast } from '~/utils/toast';

export function usePokemonByNameOrId(param: string) {
  return useQuery<Pokemon>(
    ['findPokemon', param],
    async () => {
      const { id, name, sprites, types } = await findPokemon(param);

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

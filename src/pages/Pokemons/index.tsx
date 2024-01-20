import { useMemo } from 'react';
import { CardPokemon } from '~/components/CardPokemon';
import { Loading } from '~/components/Loading';
import { usePokemonByName } from '~/hooks/usePokemonByName';
import { usePokemons } from '~/hooks/usePokemons';
import { ButtonFilter, Container, InputContent, List, Section } from './styles';

export function Pokemons() {
  const { data, isFetchingNextPage, fetchNextPage, hasNextPage } = usePokemons();

  const pokemons = useMemo(() => {
    return data?.pages?.reduce((acc, page) => {
      return [...acc, ...page.pokemons];
    }, []);
  }, [data]);

  usePokemonByName('pikachu');

  return (
    <Container>
      <Section>
        <div>
          <h1>Pokédex</h1>
          <h6>Busque Pokémons por nome ou tipo</h6>
        </div>

        <div>
          <InputContent>
            <img src="/svg/search-icon.svg" alt="Buscar" />
            <input placeholder="Digite o nome" type="text" />
          </InputContent>

          <ButtonFilter>
            <img src="/svg/filter-light.svg" alt="Filtrar pokemons" />
          </ButtonFilter>
        </div>
      </Section>

      <List
        dataLength={pokemons?.length || 0}
        next={isFetchingNextPage ? () => {} : fetchNextPage}
        hasMore={hasNextPage || false}
        loader={<Loading />}
      >
        {pokemons?.map((pokemon) => (
          <CardPokemon {...pokemon} key={pokemon.id} />
        ))}
      </List>
    </Container>
  );
}

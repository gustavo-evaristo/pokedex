import { debounce } from 'lodash';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { CardPokemon } from '~/components/CardPokemon';
import { Loading } from '~/components/Loading';
import { Modal } from '~/components/Modal';
import { usePokemonByName } from '~/hooks/usePokemonByName';
import { usePokemons } from '~/hooks/usePokemons';
import { ButtonFilter, Container, InputContent, List, Section } from './styles';

interface Query {
  name: string;
}

export function Pokemons() {
  const [query, setQuery] = useState({} as Query);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const { data, isFetchingNextPage, fetchNextPage, hasNextPage } = usePokemons();

  const pokemons = useMemo(() => {
    return data?.pages?.reduce((acc, page) => {
      return [...acc, ...page.pokemons];
    }, []);
  }, [data]);

  const {
    refetch,
    data: pokemon,
    isFetched: isFetchedPokemon,
    isFetching: isFetchingPokemon,
  } = usePokemonByName(query?.name);

  const handleDebounceSearch = useCallback((e) => {
    debounceSearch(e);
  }, []);

  const debounceSearch = debounce((e) => {
    setQuery((state) => ({
      ...state,
      name: e?.target?.value,
    }));
  }, 1000);

  const showFindedPokemon = query?.name?.length > 0 && isFetchedPokemon && !!pokemon?.id;

  const showPokemonList = !showFindedPokemon && !isFetchingPokemon;

  function handleSelectType(type: string) {
    if (selectedTypes.includes(type)) {
      const newTypes = selectedTypes.filter((state) => state !== type);

      return setSelectedTypes(newTypes);
    }

    return setSelectedTypes((state) => [type, ...state]);
  }

  useEffect(() => {
    if (query?.name) {
      refetch();
    }
  }, [query]);

  return (
    <Container>
      <Modal handleSelectType={handleSelectType} selectedTypes={selectedTypes} />

      <Section>
        <div>
          <h1>Pokédex</h1>
          <h6>Busque Pokémons por nome ou tipo</h6>
        </div>

        <div>
          <InputContent>
            <img src="/svg/search-icon.svg" alt="Buscar" />
            <input placeholder="Digite o nome" type="text" onChange={handleDebounceSearch} />
          </InputContent>

          <ButtonFilter>
            <img src="/svg/filter-light.svg" alt="Filtrar pokemons" />
          </ButtonFilter>
        </div>
      </Section>

      {isFetchingPokemon && <Loading />}

      {showFindedPokemon && <CardPokemon {...pokemon} />}

      {showPokemonList && (
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
      )}
    </Container>
  );
}

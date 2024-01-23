import { debounce } from 'lodash';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { CardPokemon } from '~/components/CardPokemon';
import { Loading } from '~/components/Loading';
import { Modal } from '~/components/Modal';
import { usePokemonByNameOrId } from '~/hooks/usePokemonByNameOrId';
import { usePokemons } from '~/hooks/usePokemons';
import { ButtonFilter, Container, InputContent, List, Section } from './styles';

interface Query {
  name: string;
}

export function Pokemons() {
  const [query, setQuery] = useState({} as Query);
  const { data, isFetchingNextPage, fetchNextPage, hasNextPage } = usePokemons();
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [showModal, setShowModal] = useState(false);

  const handleSelectType = useCallback(
    (type: string) => {
      const typeAlreadySelected = selectedTypes.includes(type);

      if (typeAlreadySelected) {
        const newTypes = selectedTypes.filter((state) => state !== type);

        return setSelectedTypes(newTypes);
      }

      return setSelectedTypes((state) => [type, ...state]);
    },
    [selectedTypes],
  );

  function handleModal() {
    setShowModal((state) => !state);
  }

  function handleConfirm() {
    return handleModal();
  }

  function handleReset() {
    return handleModal();
  }

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
  } = usePokemonByNameOrId(query?.name?.toLowerCase());

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

  useEffect(() => {
    if (query?.name) {
      refetch();
    }
  }, [query]);

  return (
    <Container>
      <Modal
        handleSelectType={handleSelectType}
        selectedTypes={selectedTypes}
        handleClose={handleModal}
        visible={showModal}
        handleConfirm={handleConfirm}
        handleReset={handleReset}
      />

      <Section>
        <div>
          <h1>Pokédex</h1>
          <h6>Busque Pokémons por nome, id ou tipo</h6>
        </div>

        <div>
          <InputContent>
            <img src="/svg/search-icon.svg" alt="Buscar" />
            <input placeholder="Digite o nome ou id" type="text" onChange={handleDebounceSearch} />
          </InputContent>

          <ButtonFilter onClick={handleModal}>
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

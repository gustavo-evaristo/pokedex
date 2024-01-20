import { CardPokemon } from '~/components/CardPokemon';
import { usePokemons } from '~/hooks/usePokemons';
import { ButtonFilter, Container, InputContent, List, Section } from './styles';

export function Pokemons() {
  const { data, isFetching } = usePokemons();

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

      {isFetching ? (
        <span>Loading...</span>
      ) : (
        <List>
          {data?.results?.map((pokemon) => (
            <CardPokemon {...pokemon} key={pokemon.id} />
          ))}
        </List>
      )}
    </Container>
  );
}

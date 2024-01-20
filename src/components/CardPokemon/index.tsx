import { getTypeIcon } from '~/utils/get-type-icon';
import { translateType } from '~/utils/translate-type';
import { Badge, Container, Details, Pokemon, PokemonContainer, TypesContainer } from './styles';

export function CardPokemon({ id, name, image, types = [] }) {
  return (
    <Container $variant={types[0]}>
      <Details>
        <h6>#{id}</h6>
        <h3>{name}</h3>

        <TypesContainer>
          {types.map((type) => (
            <Badge key={type} $variant={type}>
              <img src={getTypeIcon(type).secondary} alt={type} />

              <span>{translateType(type)}</span>
            </Badge>
          ))}
        </TypesContainer>
      </Details>

      <PokemonContainer>
        <Pokemon src={image} />
      </PokemonContainer>
    </Container>
  );
}

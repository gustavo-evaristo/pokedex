import { getTypeIcon } from '~/utils/get-type-icon';
import { pokemonTypes } from '~/utils/pokemon-types';
import { Container, Type, Types } from './styles';

export function Modal({ selectedTypes = [], handleSelectType }) {
  return (
    <Container isOpen>
      <div>
        <h4>Filtros</h4>
        <h6>Use a pesquisa avançada para explorar Pokémon por tipo!</h6>
      </div>

      <div>
        <h5>Tipos</h5>

        <Types>
          {pokemonTypes.map((type: string) => (
            <Type
              key={type}
              $isSelected={selectedTypes.includes(type)}
              $variant={type}
              onClick={() => handleSelectType(type)}
            >
              <img
                src={getTypeIcon(type)[selectedTypes.includes(type) ? 'secondary' : 'primary']}
                alt={type}
              />
            </Type>
          ))}
        </Types>
      </div>

      <button>Aplicar</button>
    </Container>
  );
}

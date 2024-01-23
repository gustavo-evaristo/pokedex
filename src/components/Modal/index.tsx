import { useEffect } from 'react';
import { getTypeIcon } from '~/utils/get-type-icon';
import { pokemonTypes } from '~/utils/pokemon-types';
import { Buttons, CloseIcon, Container, Content, IconContent, Type, Types } from './styles';

interface Props {
  handleClose: () => void;
  selectedTypes: string[];
  handleSelectType: (type: string) => void;
  visible: boolean;
  handleReset: () => void;
  handleConfirm: () => void;
}

export function Modal({
  handleClose,
  selectedTypes,
  handleSelectType,
  visible,
  handleConfirm,
  handleReset,
}: Props) {
  function onClickContainer(e) {
    if (e.target.id === 'modal-container') {
      return handleClose();
    }
  }

  useEffect(() => {
    if (visible) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [visible]);

  return (
    <Container id="modal-container" onClick={onClickContainer} className={visible ? 'visible' : ''}>
      <Content className={visible ? 'visible' : ''}>
        <div>
          <IconContent>
            <CloseIcon onClick={handleClose} />
          </IconContent>

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
                onClick={() => handleSelectType(type)}
              >
                <img src={getTypeIcon(type).primary} alt={type} />
              </Type>
            ))}
          </Types>
        </div>

        <Buttons>
          <button onClick={handleReset}>Resetar</button>
          <button onClick={handleConfirm}>Aplicar</button>
        </Buttons>
      </Content>
    </Container>
  );
}

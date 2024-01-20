import styled from 'styled-components';

interface Props {
  variant: string;
}

export const Container = styled.div<Props>`
  width: 34.5rem;

  background-color: ${({ theme, variant }) => theme[`background-type-${variant}`]};

  border-radius: 1rem;

  display: flex;
  justify-content: space-between;

  margin-bottom: 1.5rem;

  cursor: pointer;

  box-shadow: 0px 8px 20px 8px rgba(139, 190, 138, 0.4);
`;

export const PokemonContainer = styled.div`
  background-image: url('/svg/pokeball-background.svg');
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  justify-content: flex-end;
`;

export const Pokemon = styled.img`
  margin-top: -20%;

  width: 13.5rem;
  height: 13rem;

  transition: all 0.1s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Details = styled.div`
  background-image: url('/svg/dot-icon.svg');
  background-repeat: no-repeat;
  background-position-x: right;
  background-position-y: top;

  display: flex;
  flex-direction: column;

  flex: 1;

  padding: 2rem 0 2rem 2rem;

  & h6 {
    font-size: 1.2rem;
    color: ${({ theme }) => theme['text-number']};
    font-weight: 700;
  }

  & h3 {
    font-size: 2.6rem;
    color: ${({ theme }) => theme['text-white']};
    font-weight: 700;

    margin-bottom: 0.4rem;
  }
`;

export const TypesContainer = styled.div`
  display: flex;
  gap: 0.8rem;
`;

export const Badge = styled.div<Props>`
  height: 2.5rem;

  padding: 0.8rem;

  background-color: ${({ theme, variant }) => theme[`type-${variant}`]};

  border-radius: 0.4rem;

  display: flex;
  align-items: center;

  gap: 0.8rem;

  & img {
    width: 1rem;
    height: 1rem;
  }

  & span {
    font-size: 1.2rem;
    font-weight: 500;
    color: ${({ theme }) => theme['text-white']};
  }
`;

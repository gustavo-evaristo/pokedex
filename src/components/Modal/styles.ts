import Modal from 'react-modal';
import styled, { css } from 'styled-components';

interface Type {
  $variant: string;
  $isSelected?: boolean;
}

export const Container = styled(Modal)`
  width: 100%;
  height: 100%;
  outline: none;
  background-color: #fff;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 3rem 4rem;

  & h4 {
    color: ${({ theme }) => theme['text-black']};
    font-size: 2.6rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  & h6 {
    color: ${({ theme }) => theme['text-gray']};
    font-size: 1.6rem;
    font-weight: 400;
  }

  & h5 {
    color: ${({ theme }) => theme['text-black']};
    font-size: 1.6rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  button {
    font-size: 1.6rem;
    font-weight: 400;
    color: ${({ theme }) => theme['text-white']};

    background-color: ${({ theme }) => theme['type-psychic']};
    box-shadow: 0px 10px 20px 0px ${({ theme }) => `${theme['type-psychic']}30`};
    border-radius: 10px;

    width: 100%;

    border: none;
    padding: 2rem 3rem;
  }
`;

export const Types = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const Type = styled.div<Type>`
  width: 5rem;
  height: 5rem;

  cursor: pointer;

  background-color: ${({ theme, $variant, $isSelected }) =>
    theme[$isSelected ? `type-${$variant}` : 'background-white']};

  border-radius: 100px;

  display: flex;
  align-items: center;
  justify-content: center;

  ${({ $isSelected, $variant, theme }) =>
    $isSelected &&
    css`
      background-color: ${theme[`type-${$variant}`]};

      box-shadow: 0px 0px 20px 0px ${`${theme[`type-${$variant}`]}50`};
    `}

  & img {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

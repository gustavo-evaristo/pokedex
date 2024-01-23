import { IoMdCloseCircleOutline } from 'react-icons/io';
import styled, { css } from 'styled-components';

interface Type {
  $isSelected?: boolean;
}

export const Container = styled.div`
  position: fixed;

  cursor: pointer;

  top: 0;
  right: 0;
  left: 0;
  bottom: 0;

  background-color: rgba(0, 0, 0, 0.9);

  backdrop-filter: blur(5px);

  z-index: 1000;

  display: flex;
  align-items: center;
  justify-content: center;

  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;

  &.visible {
    opacity: 1;
    pointer-events: auto;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;

  @media (min-width: 760px) {
    max-width: 70rem;
    max-height: 50rem;

    border-radius: 3rem;
  }

  background-color: ${({ theme }) => theme['background-white']};

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 3rem 4rem;

  transform: translateY(-20px);
  opacity: 0;
  transition: transform 0.3s ease, opacity 0.3s ease;

  &.visible {
    transform: translateY(0);
    opacity: 1;
  }

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
`;

export const IconContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`;

export const CloseIcon = styled(IoMdCloseCircleOutline).attrs({
  size: 20,
})`
  cursor: pointer;
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

  border-radius: 100px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme['background-white']};

  transition: 0.2s ease-in-out;

  &:hover {
    box-shadow: 0px 10px 20px 0px rgba(157, 160, 170, 0.3);
  }

  ${({ $isSelected }) =>
    $isSelected &&
    css`
      box-shadow: 0px 10px 20px 0px rgba(157, 160, 170, 0.3);
    `}

  & img {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  button {
    font-size: 1.6rem;
    font-weight: 400;
    color: ${({ theme }) => theme['text-white']};

    background-color: ${({ theme }) => theme['type-psychic']};
    border-radius: 10px;

    width: 100%;

    border: none;
    padding: 2rem 3rem;
  }

  & button:first-child {
    background-color: ${({ theme }) => theme['background-default-input']};
    color: ${({ theme }) => theme['text-gray']};
  }

  & button:last-child {
    box-shadow: 0px 10px 20px 0px rgba(234, 93, 96, 0.3);
  }
`;

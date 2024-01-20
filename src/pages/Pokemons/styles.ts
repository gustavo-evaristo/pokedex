import InfiniteScroll from 'react-infinite-scroll-component';
import styled from 'styled-components';

export const Container = styled.main`
  padding: 2rem;
  margin: 0 auto;
  max-width: 113.5rem;
`;

export const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;

  & h1 {
    font-size: 3.2rem;
    font-weight: 700;
  }

  & h6 {
    font-size: 1.6rem;
    font-weight: 400;
    color: ${({ theme }) => theme['text-gray']};
  }

  & div:last-child {
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

    margin: 1.6rem 0 3.2rem;
  }

  @media (min-width: 760px) {
    align-items: center;

    margin-bottom: 6rem;

    & div:last-child {
      width: auto;
      gap: 1rem;
    }

    & h1 {
      font-size: 5.2rem;
    }

    & h1 {
      font-size: 5.2rem;
    }
  }
`;

export const InputContent = styled.div`
  width: 85%;
  height: 4.2rem;

  padding: 2rem 2.5rem;

  display: flex;
  align-items: center;
  gap: 1rem;

  background-color: ${({ theme }) => theme['background-default-input']};

  border-radius: 1rem;

  & input {
    width: 100%;

    background-color: transparent;

    color: ${({ theme }) => theme['text-gray']};
    font-size: 1.4rem;
    font-weight: 400;

    border: none;
    outline: none;
  }

  @media (min-width: 760px) {
    width: 34.5rem;
    height: 4.8rem;
  }
`;

export const ButtonFilter = styled.button`
  width: 4.2rem;
  height: 4.2rem;

  background-color: ${({ theme }) => theme['type-psychic']};

  border: none;
  border-radius: 1rem;

  box-shadow: 0px 1px 20px 0px rgba(234, 93, 96, 0.3);

  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 760px) {
    width: 4.8rem;
    height: 4.8rem;
    box-shadow: 0px 10px 20px 0px rgba(234, 93, 96, 0.3);
  }
`;

export const List = styled(InfiniteScroll)`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3rem;

  padding: 2rem 0;
`;

export const LoadingContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

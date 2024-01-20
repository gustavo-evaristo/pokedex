import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: Sf Pro;
    src: url('/fonts/Sf-regular.otf');
    font-weight: 400;
    font-style: normal;
  }

@font-face {
    font-family: Sf Pro;
    src: url('/fonts/Sf-medium.otf');
    font-weight: 500;
    font-style: normal;
  }

@font-face {
    font-family: Sf Pro;
    src: url('/fonts/Sf-bold.otf');
    font-weight: 600;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }
  
  :root {
    font-size: 62.5%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background-color: ${({ theme }) => theme['background-white']};
  }

  body, input, button {
    font-family: Sf Pro, sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    color: ${(props) => props.theme['text-black']};
  }

  button, a {
    cursor: pointer;
  }
`;

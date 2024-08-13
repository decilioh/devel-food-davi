//Inclui arquivos CSS globais e a configuração do tema do Material-UI. O arquivo 

import { createGlobalStyle } from 'styled-components';



export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
    font-family: "Roboto Condensed", sans-serif;
    font-weight: 400;
    font-size: 18px;
  }
`;


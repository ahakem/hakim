import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: sans-serif;
    background-color: ${props => props.theme.header};
    padding-bottom:50px;
    @media (min-width: 600px) { 
      padding-bottom:0;
      background-color: ${props => props.theme.body};
    }
  }
`;

export default GlobalStyle;

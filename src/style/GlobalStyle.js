import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: sans-serif;
    background-color: ${props => (props.theme.header)};
    @media (min-width: 992px) { 
      background-color: ${props => (props.theme.body)};
    }
  }
`;

export default GlobalStyle;

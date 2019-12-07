import { createGlobalStyle } from 'styled-components';
import bg from '../img/bg.png';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    // background: url('${bg}') top left no-repeat;
    background-color: ${props => (props.theme.header)};
    @media (min-width: 992px) { 
      background-color: ${props => (props.theme.body)};
    }
  }
`;

export default GlobalStyle;

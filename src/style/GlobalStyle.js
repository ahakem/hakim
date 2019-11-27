import { createGlobalStyle } from 'styled-components';
import bg from '../img/bg.png';

const GlobalStyle = createGlobalStyle`
  body {
    background: url('${bg}') top left no-repeat;
    background-color: ${props => (props.colors.bg)};
   a{
    color: ${props => (props.colors.text)};
  }
  }
`;

export default GlobalStyle;

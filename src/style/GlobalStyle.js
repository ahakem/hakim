import { createGlobalStyle } from 'styled-components';
import bg from '../img/bg.png';

const GlobalStyle = createGlobalStyle`
  body {
    background: url('${bg}') top left no-repeat;
    background-color: ${props => (props.dark? "#1d1d1d": "#f1f1f1")};

   a{
  }
  }
`;

export default GlobalStyle;

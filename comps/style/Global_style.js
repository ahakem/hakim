import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => (props.colors.text)};
    background: ${props => (props.colors.bg)};
    a{
      color: ${props => (props.colors.text)};
    }
  }
`
const SiteBody = styled.div`
  width:900px;
  border:1px solid red;
  margin 100px auto;
  }
`;

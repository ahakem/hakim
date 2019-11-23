import Header from './Header';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import React, { useState } from 'react';

const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => (props.colors.text)};
    background: url('/img/bg.png') top left no-repeat;
    background-color: ${props => (props.colors.bg)};
    a{
      color: ${props => (props.colors.text)};
    }
  }
`;
const SiteBody = styled.div`
  width:900px;
  border:1px solid red;
  margin 100px auto;
  }
`;



const Layout = props => {
  const [light, setLight] = useState(false);
  let colors={
    bg: light? "#F5F6F7" : "#272333",
    box: light? "#f5f8f9" : "#2F2C40",
    smallBox:light? "#F1F1F1" : "#2C283A",
    text:light? "#44566c" : "#fff",
    theme: "#F29639"
  }
  return(
  <>
   <GlobalStyle colors={colors} />
  <SiteBody>
    <Header />
    {props.children}
  </SiteBody>
  </>
)};

export default Layout;
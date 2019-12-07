import React from 'react';
import styled from "styled-components";

const SiteHeader = styled.header`
  @media (min-width: 992px) { 
    background:  ${props => (props.theme.header)};
    
  }
`;

const HeaderWrap = styled.div`
  @media (min-width: 992px) { 
    width: 1024px;
    height: 223px;
    background: red;
    margin: 0 auto;
  }
`;

const Header = (theme) => (
  <SiteHeader theme={theme}>
    <HeaderWrap theme={theme}>Header</HeaderWrap>
  </SiteHeader>
);
export default Header;


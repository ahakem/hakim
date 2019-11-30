import React from "react";
import styled from "styled-components";
import { Route} from "react-router-dom";

import Header from './Header'
import About from '../About';
import Resume from '../Resume';

const ContentWrap = styled.main`
  border-radius: 14px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: ${props => props.colors.box};
  width: 100%;
  @media screen and (min-width: 40em) {
    width: auto;
  }

  @media screen and (min-width: 64em) {
    width: auto;
    flex-grow: 1;
    margin-left: 16px;
  }
  
`;


const Content = props => (
  <>
    <ContentWrap colors={props.colors}>
      <Header/>
      <Route path='/' exact component={About}/>
      <Route path='/resume' exact component={Resume}/>
      
    </ContentWrap>
  </>
);

export default Content;

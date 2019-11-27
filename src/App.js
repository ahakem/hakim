import React from 'react';
import { useState } from 'react';
import { Route} from "react-router-dom";
// import styled from 'styled-components';
// import { createGlobalStyle } from 'styled-components';
import GlobalStyle from "./style/GlobalStyle"

import Layout from './style/Layout';
import About from './About';
import Home from './Home';


const App = props =>{
  const [light, setLight] = useState(false);
  let colors={
    bg: light? "#F5F6F7" : "#272333",
    box: light? "#f5f8f9" : "#2F2C40",
    smallBox:light? "#F1F1F1" : "#2C283A",
    text:light? "#44566c" : "#fff",
    theme: "#F29639"
  }
  return (
    <>
      <GlobalStyle colors={colors} />
      
      <Layout>
       
        <Route path='/about' exact component={About}/>
        <Route path='/' exact component={Home}/>
      </Layout>
    </>
  );
}

export default App;

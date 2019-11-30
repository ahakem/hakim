import React , { useState } from 'react';
import GlobalStyle from "./style/GlobalStyle"
import './style/icons.css'

import SiteBody from './style/SiteBody';
import Aside from './componenets/Aside';
import Content from './componenets/Content'
import Navigation from './componenets/Navigation'

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
      <SiteBody>
        <Navigation colors={colors}/>
        <Aside colors={colors}/>
        <Content colors={colors}/>
      </SiteBody>
      
    </>
  );
}

export default App;

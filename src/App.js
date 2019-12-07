import React , { useState } from 'react';
import GlobalStyle from "./style/GlobalStyle"
import './style/icons.css'

import SiteBody from './style/SiteBody';


const App = props =>{
  // const [light, setLight] = useState(false);
  const [dark, setDark] = useState(true);
  // let colors={
  //   bg: light? "#F5F6F7" : "#272333",
  //   box: light? "#f5f8f9" : "#2F2C40",
  //   smallBox:light? "#F1F1F1" : "#2C283A",
  //   text:light? "#44566c" : "#fff",
  //   theme: "#F29639"
  // }
  return (
    <>
      <GlobalStyle  dark={dark} />
      <SiteBody>
        
      </SiteBody>
      
    </>
  );
}

export default App;

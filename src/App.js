import React , { useState } from 'react';
import GlobalStyle from "./style/GlobalStyle"
import './style/icons.css'
import colors from "./data/colors";
import Themes from  "./componenets/Themes"
import Header from  "./componenets/Header"

import SiteBody from './style/SiteBody';


const App = props =>{
  const [theme, setTheme] = useState(colors.dark);
  const changeTheme = () => {
    theme.id == "dark" ? setTheme(colors.light) : setTheme(colors.dark);
  }

  return (
    <>
      <GlobalStyle  theme={theme} />
      <Themes
        theme={theme}
        changeTheme={changeTheme}
      />
      <Header theme={theme} />
      <SiteBody>
        
      </SiteBody>
      
    </>
  );
}

export default App;

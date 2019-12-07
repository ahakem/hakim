import React , { useState } from 'react';
import GlobalStyle from "./style/GlobalStyle"
import './style/icons.css'
import colors from "./data/colors";
import Themes from  "./componenets/Themes"
import Header from  "./componenets/Header"
import Experience from "./componenets/Experience"
import { ThemeContext } from 'styled-components';
import SiteBody from './style/SiteBody';


const App = props =>{
  const [theme, setTheme] = useState(colors.dark);
  const changeTheme = () => {
    theme.id == "dark" ? setTheme(colors.light) : setTheme(colors.dark);
  }

  return (
    <ThemeContext.Provider value={theme}>
      <GlobalStyle  theme={theme} />
      <Themes
        theme={theme}
        changeTheme={changeTheme}
      />
      <Header/>
      <SiteBody>
        <Experience/>
      </SiteBody>
      
    </ThemeContext.Provider>
  );
}

export default App;

import React , { useState, useEffect } from 'react';
import styled from "styled-components";
import GlobalStyle from "./style/GlobalStyle"
import colors from "./data/colors";
import Themes from  "./componenets/Themes"
import Header from  "./componenets/Header"
import Experience from "./componenets/Experience"
import { ThemeContext } from 'styled-components';
import SiteBody from './style/SiteBody';
import About from './componenets/About'

const RightCol = styled.div`
order: 0
@media (min-width: 992px) {
  width: 50%;
  padding-left:24px;
  box-sizing: border-box;
}
`;
const App = props =>{
  const [theme, setTheme] = useState(colors[window.localStorage.getItem('theme') || 'dark']);
  const changeTheme = () => {

    if (theme.id === 'light') {
      window.localStorage.setItem('theme', 'dark')
      setTheme(colors.dark)
    } else {
      window.localStorage.setItem('theme', 'light')
      setTheme(colors.light)
    }
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme && setTheme(colors[localTheme]);
  }, []);

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
        <RightCol>
          <About/>
        </RightCol>
      </SiteBody>
      
    </ThemeContext.Provider>
  );
}

export default App;

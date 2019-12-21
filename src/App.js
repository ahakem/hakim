import React, { useState, useEffect } from "react";
import styled from "styled-components";
import GlobalStyle from "./style/GlobalStyle";
import colors from "./data/colors";
import Themes from "./componenets/Themes";
import Header from "./componenets/Header";
import Experience from "./componenets/Experience";
import { ThemeContext } from "styled-components";
import SiteBody from "./style/SiteBody";
import About from "./componenets/About";
import Skills from "./componenets/Skills";
import GetResume from "./componenets/Resume";
import Contacts from "./componenets/contacts";

const RightCol = styled.div`
  order: 0 @media (min-width: 992px) {
    width: 50%;
    padding-left: 24px;
    box-sizing: border-box;
  }
`;
const SiteWraper = styled.div`
  margin: 24px 36px;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) and (max-width: 991.98px) {
    max-width: 650px;
    margin: 50px auto 30px auto;
  }
  @media screen and (min-width: 992px) {
    margin: 100px auto;
    max-width: 960px;
  }
  @media screen and (min-width: 1025px) {
    max-width: 1024px;
    margin-bottom: 0;
  }
`;
const App = props => {
  const [theme, setTheme] = useState(
    colors[window.localStorage.getItem("theme") || "dark"]
  );
  const changeTheme = () => {
    if (theme.id === "light") {
      window.localStorage.setItem("theme", "dark");
      setTheme(colors.dark);
    } else {
      window.localStorage.setItem("theme", "light");
      setTheme(colors.light);
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setTheme(colors[localTheme]);
  }, []);

  return (
    <ThemeContext.Provider value={theme}>
      <GlobalStyle theme={theme} />
      <Themes theme={theme} changeTheme={changeTheme} />
      <Header />
      <GetResume />
      <SiteWraper>
        <Contacts />
        <SiteBody>
          <Experience />
          <RightCol>
            <About />
            <Skills />
          </RightCol>
        </SiteBody>
      </SiteWraper>
    </ThemeContext.Provider>
  );
};

export default App;

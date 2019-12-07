import React from "react";
import styled from "styled-components";

const TheamBar = styled.section`
  text-align:right;
  padding-right:24px;
  margin-top:36px;
  button{
    background: none;
    width: 48px;
    height: 48px;
    font-size:24px;
    cursor: pointer;
    border: 0;
    outline: none
    color: ${props => (props.theme.themeIcon)};
    background:  ${props => (props.theme.body)};
    // background: red;
    border-radius:50%;
    span{
      margin-top: 3px;
      display: inline-block;
    }
  }
  @media (min-width: 992px) { 
    text-align:center;
    margin-top:0;
  }
`;


const Theme = ({theme, changeTheme}) => {

  return(
  <>
    <TheamBar theme={theme}>
      {theme.id == "dark"?
        <button onClick={changeTheme}><span className="icon-sun"></span></button>
      : <button onClick={changeTheme}><span className="icon-moon"></span></button>
    }
    </TheamBar>
  </>
)};

export default Theme;

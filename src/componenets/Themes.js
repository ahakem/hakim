import React from "react";
import styled from "styled-components";
const TheamBar = styled.section`
  text-align:right;
  padding-right:24px;
  margin-top:36px;
  @media (min-width: 992px) { 
    position: relative;
    height: 36px;
    text-align:center;
    margin-top:0;
  }
  button{
    position: absolute;
    background: none;
    width: 48px;
    height: 48px;
    font-size:24px;
    cursor: pointer;
    border: 0;
    outline: none
    color: ${props => props.theme.themeIcon};
    border-radius:50%;
    right:16px;
    @media (min-width: 992px) { 
      background:  ${props => props.theme.body};
      bottom: -50%;
      right: 50%;
      margin-right:-24px;
    }
    span{
      margin-top: 3px;
      display: inline-block;
    }
  }
`;

const Theme = ({ theme, changeTheme }) => {
  return (
    <TheamBar>
      {theme.id == "dark" ? (
        <button onClick={changeTheme}>
          <span className="icon-sun"></span>
        </button>
      ) : (
        <button onClick={changeTheme}>
          <span className="icon-moon"></span>
        </button>
      )}
    </TheamBar>
  );
};

export default Theme;

import React from "react";
import styled from "styled-components";
import icons from "../style/icon.svg";

const TheamBar = styled.section`
  text-align:right;
  padding-right:24px;
  margin-top:36px;
  @media (min-width: 600px) { 
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
    
    border-radius:50%;
    right:16px;
    svg{
      width: 24px;
      height: 24px;
      fill: ${props => props.theme.themeIcon};
    }
    @media (min-width: 600px) { 
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
      {theme.id === "dark" ? (
        <button title="Active the Light Mode" onClick={changeTheme}>
          <svg>
            <use xlinkHref={`${icons}#icon-sun`}></use>
          </svg>
        </button>
      ) : (
        <button title="Active the Dark Mode" onClick={changeTheme}>
          <svg>
            <use xlinkHref={`${icons}#icon-moon`}></use>
          </svg>
        </button>
      )}
    </TheamBar>
  );
};

export default Theme;

import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Nav = styled.nav`
  position: absolute;
  top:-125px;
  right:0px;
  background:${props => props.colors.theme};
  color:${props => props.colors.text};
  box-shadow: 0 1.5px 3px 0 rgba(0, 0, 0, 0.16);
  height: 50px;
  min-width:50px;
  border-radius: 25px 8px 25px 25px;
  justify-content:flex-start;
  align-items:center;
  align-content: space-around
  flex-direction: row-reverse;
  display: flex;
  overflow: hidden;
  flex-wrap:nowrap;
  padding: 0 10px;

  @media screen and (min-width: 40em) {
    top:0
  }
  .current span{
    color: rgba(255,255,255,1);
  }

`;

const Anchor = styled.span`
  margin: 0 16px;
  line-height: 50px;
  display: inline-block;
  color: rgba(255,255,255,0.5);
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
    color: rgba(255,255,255,1);
  }
`;

const Content = props => {
  return (
    <>
      <Nav id="navgation" colors={props.colors} className="opened">
        <div className="links">
          <NavLink exact activeClassName="current" to="/">
            <Anchor>About</Anchor>
          </NavLink>
          <NavLink exact activeClassName="current" to="/resume">
            <Anchor>Resume</Anchor>
          </NavLink>
        </div>
      </Nav>
    </>
  );
};

export default Content;

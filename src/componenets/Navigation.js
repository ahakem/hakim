import React  from "react";
import styled from "styled-components";
import { keyframes } from "styled-components"
import { Link } from "react-router-dom";

const changeWidth = keyframes`
  from {
    width: 0;
  }

  to {
    width: 170px
  }
`;

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

  // .links{
  //   display: none;
  // }
  // &.opened{
  //   animation: ${changeWidth} .5s;
  //   .links{display: flex;}
  // }
`;


// const Button = styled.button`
//   width: 50px;
//   height: 50px;
//   background: transparent;
//   border: 0;
//   font-size: 16px;
//   color: #fff;
//   cursor: pointer;
//   outline: none;
//   display: none;
// `;

const Anchor = styled.span`
  margin:0 16px;
  line-height: 50px;
  display: inline-block;
  color: #fff;
`;

const Content = props => {
  
  // const toggleMenu = () => {
  //   document.getElementById("navgation").classList.toggle("opened")
  // };

  return(
  <>
    <Nav id="navgation" colors={props.colors} className="opened" >
      {/* <Button onClick={toggleMenu} colors={props.colors}>
        <span className="icon-menu"></span>
      </Button> */}
      
        <div className="links" >
        
          <Link to="/">
            <Anchor colors={props.colors}>About</Anchor>
          </Link>
          <Link to="/resume">
            <Anchor colors={props.colors}>Resume</Anchor>
          </Link>
         
        </div>
      
    </Nav>
  </>
)};

export default Content;

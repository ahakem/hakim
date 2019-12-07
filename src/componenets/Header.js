import React from 'react';
import styled from "styled-components";
import hakim from '../img/hakim.jpg';


const SiteHeader = styled.header`
  @media (min-width: 992px) { 
    background:${props => (props.theme.header)};
  }
`;

const HeaderWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 16px;
  @media (min-width: 992px) { 
    flex-direction: row;
    width: 1024px;
    height: 223px;
    margin: 0 auto;
  }
`;
const DeveloperInfo = styled.div`
  display: flex;
  align-items:center;
  width: 100%;
  @media (min-width: 992px) { 
    width: 50%;
  }

  img{
    width: 100px;
    height: 100px;
    border-radius: 18px;
    margin-right:16px;
  }
`;

const DeveloperName = styled.h1`
 color:${props => (props.theme.name)};
 font-size: 23px;
 margin: 0;
 font-weight: normal;

`;
const DeveloperSubHead = styled.span`
 color:${props => (props.theme.subTExt)};
 font-size: 15px;
 display: block;

`;

const DeveloperNote = styled.div`
  display: flex;
  align-items:center;
  flex-grow: 1;
  justify-content: flex-end;

  color:${props => (props.theme.subTExt)};
  font-size: 15px;
  p{
    position: relative;
    padding-left:16px;
    border-left:3px solid ${props => (props.theme.name)};
    position: relative;
    font-size:12px;
    z-index: 1;
    max-width:210px;

    &::after{
      position: absolute;
      content: "";
      width: 40px;
      height: 40px;
      background: ${props => (props.theme.shape)};
      z-index: -1;
      right: 20px;
      top: -20px;
    }
    
  }
  @media (max-width: 992px) { display: none; }
`;

const Header = () => {
  return(
  <SiteHeader>
    <HeaderWrap>
      <DeveloperInfo>
        <img src={hakim} alt="Ahmed Hakim" />
        <div>
          <DeveloperName>Ahmed Hakim</DeveloperName>
          <DeveloperSubHead>Front-End Developer</DeveloperSubHead>
          <DeveloperSubHead>Alexandria, Egypt</DeveloperSubHead>
        </div>

      </DeveloperInfo>
      <DeveloperNote>
        <p>I am a web developer in Alexandria.<br/>
I spend my days with my hands in many
different areas of development.</p>
      </DeveloperNote>
    </HeaderWrap>
  </SiteHeader>
)};
export default Header;


import React from "react";
import styled from "styled-components";
import hakim from "../img/hakim.jpg";

const SiteHeader = styled.header`
  @media (min-width: 600px) {
    background: ${props => props.theme.header};
  }
`;

const HeaderWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 16px;
  @media (min-width: 600px) {
    flex-direction: row;
  }
  @media (min-width: 768px) {
    flex-direction: row;
    width: 960px;
    height: 223px;
    margin: 0 auto;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    flex-direction: row;
    width: 650px;
    height: 223px;
    margin: 0 auto;
  }
  @media screen and (min-width: 992px) {
    max-width: 1024px;
  }
`;
const DeveloperInfo = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  @media (min-width: 992px) {
    width: 50%;
  }

  img {
    width: 100px;
    height: 100px;
    border-radius: 18px;
    margin-right: 16px;
  }
`;

const DeveloperName = styled.h1`
  color: ${props => props.theme.name};
  font-size: 23px;
  margin: 0;
  font-weight: normal;
`;
const DeveloperSubHead = styled.span`
  color: ${props => props.theme.subTExt};
  font-size: 15px;
  display: block;
`;

const DeveloperNote = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  justify-content: flex-end;

  color: ${props => props.theme.subTExt};
  font-size: 15px;
  p {
    position: relative;
    padding-left: 16px;
    border-left: 3px solid ${props => props.theme.name};
    position: relative;
    font-size: 12px;
    z-index: 1;
    max-width: 210px;
    @media (min-width: 768px) and (max-width: 991.98px) {
      max-width: 310px;
    }

    &::after {
      position: absolute;
      content: "";
      width: 40px;
      height: 40px;
      background: ${props => props.theme.shape};
      z-index: -1;
      right: 20px;
      top: -20px;
      display: none;
    }
  }
  @media (max-width: 700px) {
    display: none;
  }
`;

const Header = () => {
  return (
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
          <p>
            I am a web developer in Alexandria.
            <br />I spend my days with my hands in many different areas of
            development.
          </p>
        </DeveloperNote>
      </HeaderWrap>
    </SiteHeader>
  );
};
export default Header;

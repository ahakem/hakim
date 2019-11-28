import React, { Component } from "react";
import styled from "styled-components";
import infoCard from "../data/infoCard";
import hakim from "../img/hakim.jpg";

const SideInfo = styled.aside`
  border-radius: 14px;
  box-shadow: 0 1.5px 3px 0 rgba(0, 0, 0, 0.16);
  background-color: ${props => props.colors.box};
  min-height: 200px;
  text-align: center;
  width: 300px;
  @media screen and (min-width: 40em) {
    width: 210px;
  }

  @media screen and (min-width: 64em) {
    width: 210px;
  }
  .profile-photo {
    width: 130px;
    margin-top: -70px;
    border-radius: 18px;
  }
`;

const Name = styled.div`
  font-size: 24px;
  margin-top: 16px;
  color: ${props => props.colors.text};
`;

const Title = styled.span`
  border-radius: 10px;
  background-color: ${props => props.colors.smallBox};
  color: ${props => props.colors.text};
  display: inline-block;
  padding: 5px 10px;
  margin-top: 10px;
`;
const Linkedin = styled.a`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid ${props => props.colors.text};
  display: flex;
  margin: 24px auto;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  font-size: 13px;
  &:hover {
    transform: scale(1.1);
  }
`;
const InfoWrap = styled.ul`
  list-style: none;
  padding: 0;
`;
const InfoItem = styled.a`
  display: flex;
  padding: 8px 16px;
  color:${props => props.colors.text}
  text-decoration:none;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }

`;

const InfoName = styled.span`
  font-size:12px;
  padding-left:16px;
`;

const Aside = props => (
  <>
    <SideInfo colors={props.colors}>
      <img className="profile-photo" src={hakim} alt="Ahmed Hakim" />
      <Name colors={props.colors}>
        {infoCard.name.first} <b>{infoCard.name.last}</b>
      </Name>
      <Title colors={props.colors}>{infoCard.title}</Title>
      <Linkedin href={infoCard.linkedin} colors={props.colors}>
        <span className="icon-linkedin2"></span>
      </Linkedin>
      <InfoWrap>
        {infoCard.info.map((info, index) => {
          return (
            <li key={index}>
              <InfoItem  colors={props.colors} href={info.link ? info.link : null}>
                <span className={info.icon}></span>
                <InfoName> {info.name}</InfoName>
              </InfoItem>
            </li>
          );
        })}
      </InfoWrap>
    </SideInfo>
  </>
);

export default Aside;

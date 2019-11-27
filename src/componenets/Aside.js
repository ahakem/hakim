import React, { Component } from 'react';
import styled from 'styled-components';

// import SideInfo from "../style/SideInfo"
import hakim from '../img/hakim.jpg';
const Name = styled.div`
  font-size:24px;
  margin-top:16px;
  color:  ${props => (props.colors.text)};
`;

const Title = styled.span`
  border-radius: 10px;
  background-color: ${props => (props.colors.smallBox)};
  color:  ${props => (props.colors.text)};
  display: inline-block;
  padding: 5px 10px;
  margin-top:10px;
`;

const SideInfo = styled.aside`
  border-radius: 14px;
  box-shadow: 0 1.5px 3px 0 rgba(0, 0, 0, 0.16);
  background-color: ${props => (props.colors.box)};
  min-height:200px;
    text-align: center;
  @media screen and (min-width: 40em) {
    width: 210px;
  }

  @media screen and (min-width: 64em) {
    width: 210px;
  }
    .profile-photo{
      width: 130px;
      margin-top:-70px;
      border-radius: 18px;
    }
`;

const Aside = (props) => (
  <>
  <SideInfo colors={props.colors}>
    <img className="profile-photo" src={hakim} alt="Ahmed Hakim"/>
    <Name colors={props.colors}>Ahmed <b>Hakim</b></Name>
    <Title colors={props.colors}>Front-End Developer</Title>
  </SideInfo> 
  </>
);

export default Aside;
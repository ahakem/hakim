import React from "react";
import styled from "styled-components";
import icons from "../style/icon.svg";
import infoCard from "../data/infoCard";

const ContactsWraper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  @media screen and (min-width: 1024px) {
    order: 1;
    flex-wrap: wrap;
    justify-content: end;
    margin-top: 36px;
    padding-top: 16px;
    border-top: 3px solid ${props => props.theme.header};
  }
`;

const Contact = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  width: 33%;
  @media screen and (min-width: 1024px) {
    margin-bottom: 16px;
  }
`;

const Icon = styled.span`
  width: 48px;
  height: 48px;
  border: solid 2px #707070;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${props => props.theme.header};
  @media screen and (min-width: 1024px) {
    margin-right: 8px;
    width: 26px;
    height: 26px;
  }

  svg {
    width: 24px;
    height: 24px;
    fill: ${props => props.theme.themeIcon};
    @media screen and (min-width: 1024px) {
      width: 12px;
      height: 12px;
    }
  }
`;
const Text = styled.span`
  font-size: 12px;
  color: ${props => props.theme.themeIcon};
  @media screen and (max-width: 1023px) {
    display: none;
  }
`;
const Contacts = () => {
  return (
    <ContactsWraper>
      {infoCard.map((contact, index) => {
        return (
          <Contact href={contact.link}>
            <Icon>
              <svg>
                <use xlinkHref={`${icons}#icon-${contact.icon}`}></use>
              </svg>
            </Icon>
            <Text>{contact.name}</Text>
          </Contact>
        );
      })}
    </ContactsWraper>
  );
};
export default Contacts;

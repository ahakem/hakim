import React from "react";
import styled from "styled-components";
import Title from "./Title"

const Bio = styled.p`
  color: ${props => props.theme.bullets};
  display: block;
  font-size:15px;
  line-height:20px;
  margin: 0 0 36px 0;
  @media (min-width: 992px) {font-size:12px}
`;

const About = () => {
  return (
    <>
    <Title data="About Me" />
    <Bio>I create responsive websites that allow the user to experience your website in the best and most appropriate way suited to the device they are using. By working using progressive enhancement, your website is delivered with a responsive layout that can best make use of the space available on the smallest to largest devices. </Bio>
    </>
  );
};
export default About;

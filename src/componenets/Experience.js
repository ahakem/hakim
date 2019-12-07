import React from 'react';
import styled from "styled-components";


const ExperienceSection = styled.section`
  @media (min-width: 992px) { 
    width: 50%;
    background:${props => (props.theme.header)};
  }
`;


const Experience = () => {
  return(
  <ExperienceSection>
    dd
  </ExperienceSection>
)};
export default Experience;


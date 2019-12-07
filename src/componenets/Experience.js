import React from 'react';
import styled from "styled-components";


const ExperienceSection = styled.section`
  @media (min-width: 992px) { 
    width: 50%;
  }
`;

const Company = styled.div`
  display: flex;
  &:last-child .line{
    display: none;
  }
`;
const TimeLine = styled.div`
  width: 24px;
  display: flex;
  flex-direction: column;

  .shape{
    width: 7px;
    height: 7px;
    border-radius:50%;
    background: ${props => (props.theme.timeLine)};
    margin-top:16px;
  }
  .line{
    width: 1px;
    height: 100%;
    background: ${props => (props.theme.timeLine)};
    margin-left: 3px;
    margin-top: -1px;
    margin-bottom:-16px;
  }
  
`;
const Content = styled.div`
  background: blue;
  flex-grow:1;
  min-height:200px;
`;

const Experience = () => {
  return(
  <ExperienceSection>
    <Company>
      <TimeLine>
        <div className="shape"></div>
        <div className="line"></div>
      </TimeLine>
      <Content>s</Content>
    </Company>
    <Company>
      <TimeLine>
        <div className="shape"></div>
        <div className="line"></div>
      </TimeLine>
      <Content>s</Content>
    </Company>
    <Company>
      <TimeLine>
        <div className="shape"></div>
        <div className="line"></div>
      </TimeLine>
      <Content>s</Content>
    </Company>
    
  </ExperienceSection>
)};
export default Experience;


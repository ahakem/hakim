import React from "react";
import styled from "styled-components";
import ExperianceContent from "./Company";
import experianceList from "../data/experianceList";

const ExperienceSection = styled.section`
  @media (min-width: 992px) {
    width: 50%;
  }
`;

const Company = styled.div`
  display: flex;
  &:last-child .line {
    display: none;
  }
`;
const TimeLine = styled.div`
  // width: 36px;
  display: flex;
  flex-direction: column;

  .shape {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: ${props => props.theme.timeLine};
    margin-top: 24px;
    @media (min-width: 992px) {
      border-radius: 0;
      width: 16px;
      height: 29px;
      margin-top: 0;
      background: ${props => props.theme.subTExt};
    }
  }
  .line {
    width: 1px;
    height: 100%;
    background: ${props => props.theme.timeLine};
    margin-left: 3px;
    margin-top: -1px;
    margin-bottom: -24px;
    @media (min-width: 992px) {
      display: none;
    }
  }
`;

const Experience = () => {
  return (
    <ExperienceSection>
      {experianceList.map((experiance, index) => {
        return (
          <Company key={index}>
            <TimeLine>
              <div className="shape"></div>
              <div className="line"></div>
            </TimeLine>
            <ExperianceContent {...experiance} />
          </Company>
        );
      })}
    </ExperienceSection>
  );
};
export default Experience;

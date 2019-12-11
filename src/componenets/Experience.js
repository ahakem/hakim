import React, {useState} from "react";
import styled from "styled-components";
import ExperianceContent from "./Company";
import experianceList from "../data/experianceList";
import Title from "./Title"

const ExperienceSection = styled.section`
  order:1;
  @media (min-width: 992px) {
    order:0;
    width: 50%;
    padding-right:24px;
    box-sizing: border-box;
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

const ShowMore = styled.button`
 color: ${props => props.theme.name}
 font-size:12px;
 margin: 14px;
 border: 1px solid ${props => props.theme.name};
 background: none;
 border-radius: 3px;
 padding: 4px 8px;
 @media (min-width: 992px) {
  margin-top:4px;
}
`;

const Experience = () => {
  const [count, setCount] = useState(3);
  return (
    <>
    
      <ExperienceSection>
        <Title data="Experience" />
        {experianceList.slice(0,count).map((experiance, index) => {
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
        {count < experianceList.length &&
        <Company>
          <TimeLine>
            <div className="shape"></div>
            <div className="line"></div>
          </TimeLine>
          <ShowMore onClick={() => setCount(count + 2)}>Show More Experiences</ShowMore>
        </Company>
          
        }
      </ExperienceSection>
    </>
  );
};
export default Experience;

import React from "react";
import styled from "styled-components";
import Title from "./Title";
import skills from '../img/skills.svg';


const SkillsList = styled.div`
  color: ${props => props.theme.bullets};
  display: flex;
  justify-content:space-between;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

const Skill = styled.div`
  background: ${props => props.theme.shape};
  width: 50px;
  height: 50px;
  display: flex;
  margin:0 15px 30px 0;
  border-radius: 3px;
  justify-content:center;
  align-items:center;
  &:nth-child(4n){
    margin-right:0;
  }
  @media screen and (min-width: 414px) {
    margin-right:24px;
    &:nth-child(4n){
      margin-right:0;
    }
  }

  @media (min-width: 768px) {
    margin:0 30px 30px 0;
    &:nth-child(4n){
      margin-right:30px;
    }
  }

  @media (min-width: 992px) {
    margin:0 30px 30px 0;
    &:nth-child(4n){
      margin-right:30px;
    }
  }
  
  
  // flex-grow:1;
  svg{
    fill:${props => props.theme.timeLine};
    width: 32px;
    height: 32px;
  }
  
  @media (min-width: 992px) {font-size:12px}
`;
const skillList = [
  "javascript",
  "react",
  "redux",
  "babel",
  "jquery",
  "webpack",
  "grunt",
  "html5",
  "css3",
  "npmmark",
  "yarn",
  "jasmine",
  "wordpress",
  "visualstudio",
  "sass",
  "less",
  "foundation",
  "bootstrap",
  "ruby",
  "rails",
  "php",
  "git",
  "github",
  "gitlab",
  "bitbucket",
  "sourcetree",
  "photoshop",
  "illustrator",
  "atom"
]
const Skills = () => {
  return (
    <>
    <Title data="Skills" />
    <SkillsList>
    {skillList.map((skill, index) => {
      return (
      <Skill>
      <svg>
        <use xlinkHref={`${skills}#${skill}`}></use>
      </svg>
      </Skill>
      );
    })}
      

    </SkillsList>
    </>
  );
};
export default Skills;

import React from "react";
import styled from "styled-components";
import Title from "./Title";
import skills from "../img/skills.svg";

const SkillsList = styled.div`
  color: ${props => props.theme.bullets};
  margin-bottom: 36px;
  display: grid;
  grid-template-columns: repeat(4, 50px);
  grid-row-gap: 15px;
  grid-column-gap: 15px;

  @media (min-width: 360px) {
    grid-column-gap: 30px;
    grid-row-gap: 30px;
  }
  @media (min-width: 600px) {
    grid-template-columns: repeat(10, 50px);
    grid-column-gap: 30px;
  }
  @media (orientation: landscape) {
    grid-template-columns: repeat(6, 50px);
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(8, 50px);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(6, 50px);
  }
`;

const Skill = styled.div`
  background: ${props => props.theme.shape};
  width: 50px;
  height: 50px;
  display: flex;
  border-radius: 3px;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  position: relative;
  &:hover {
    transform: scale(1.1);
    .skillName{
      visibility: visible;
    }
  }

  @media (max-width: 417px) {
    // margin-right: 28px;
    // &:nth-child(4n) {
    //   margin-right: 0;
    // }
  }

  svg {
    fill: ${props => props.theme.timeLine};
    width: 32px;
    height: 32px;
  }

  @media (min-width: 992px) {
    font-size: 12px;
  }
`;

const SkillName = styled.div`
  position: absolute;
  background: ${props => props.theme.timeLine};
  padding: 4px;
  bottom: 102%;
  border-radius: 3px;
  text-transform: capitalize;
  visibility: hidden;
  white-space: nowrap;
`;
const skillList = [
  {icon:"javascript",name:"javaScript"},

  {icon:"react", name:"React"},
  {icon:"redux", name:"Redux"},
  {icon:"babel", name:"babel"},
  {icon:"jquery", name:"jQuery"},
  {icon:"webpack", name:"webPack"},
  {icon:"grunt", name:"Grunt"},
  {icon:"html5", name:"HTML5"},
  {icon:"css3", name:"CSS3"},
  {icon:"npmmark", name:"npm"},
  {icon:"yarn", name:"yarn"},
  {icon:"jasmine", name:"Jasmine"},
  {icon:"wordpress", name:"WordPress"},
  {icon:"visualstudio", name:"Visual Studio"},
  {icon:"sass", name:"SASS"},
  {icon:"less", name:"Less"},
  {icon:"foundation", name:"Foundation"},
  {icon:"bootstrap", name:"Bootstrap"},
  {icon:"ruby", name:"ruby"},
  {icon:"rails", name:"rails"},
  {icon:"php", name:"PHP"},
  {icon:"git", name:"Git"},
  {icon:"github", name:"GitHub"},
  {icon:"gitlab", name:"GitLab"},
  {icon:"bitbucket", name:"Bitbucket"},
  {icon:"sourcetree", name:"Source Tree"},
  {icon:"photoshop", name:"Photoshop"},
  {icon:"illustrator", name:"Illustrator"},
  {icon:"atom", name:"Atom"}
];
const Skills = () => {
  return (
    <>
      <Title data="Skills" />
      <SkillsList>
        {skillList.map((skill, index) => {
          return (
            <Skill key={index}>
              <div>
                <svg>
                  <use xlinkHref={`${skills}#${skill.icon}`}></use>
                </svg>
              </div>
              <SkillName className="skillName">{skill.name}</SkillName>
            </Skill>
          );
        })}
      </SkillsList>
    </>
  );
};
export default Skills;

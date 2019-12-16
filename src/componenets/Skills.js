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
  &:hover {
    transform: scale(1.3);
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
];
const Skills = () => {
  return (
    <>
      <Title data="Skills" />
      <SkillsList>
        {skillList.map((skill, index) => {
          return (
            <Skill>
              <div>
                <svg>
                  <use xlinkHref={`${skills}#${skill}`}></use>
                </svg>
              </div>
            </Skill>
          );
        })}
      </SkillsList>
    </>
  );
};
export default Skills;

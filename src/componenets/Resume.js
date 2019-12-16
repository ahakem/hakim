import React from "react";
import styled from "styled-components";
import icons from "../style/icon.svg";
import resumeFile from "../ahmed-hakim.pdf";

const ResumeBar = styled.div`
  color: ${props => props.theme.subTExt};
  font-size: 15px;
  display: block;
  height: 46px;
  margin-top: -20px;
  text-align: center;
  position: relative;
  z-index:100;
`;

const ResumeBtn = styled.a`
  color: #fff;
  font-size: 15px;
  padding: 12px 16px;
  background-color: #0f0f0f;
  display: inline-flex;
  text-decoration: none;
  justify-content: center;
  align-items:center;
  height: 32px;
  position: fixed;
  bottom: 0px;
  left:0px;
  right:0px;
  zIndex: 100;
  @media (min-width: 768px) {
    border: solid 1px #e3e3e3;
    position: static;
    height: auto;
    border-radius: 20px;
  }
  svg {
    width: 16px;
    height: 16px;
    fill: #fff;
    margin-right: 8px;
  }
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

const GetResume = () => {
  return (
    <ResumeBar>
      <ResumeBtn href={resumeFile}>
        <svg>
          <use xlinkHref={`${icons}#icon-download`}></use>
        </svg>
        <span>Download Resume</span>
      </ResumeBtn>
    </ResumeBar>
  );
};
export default GetResume;

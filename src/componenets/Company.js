import React, { useState, useEffect } from "react";
import styled from "styled-components";
import icons from "../style/icon.svg";

const Content = styled.div`
  flex-grow: 1;
  padding-bottom: 24px;
  display: flex;
  flex-direction: column;
`;
const CompanyHeader = styled.header`
  font-size: 15px;
  margin-left: 16px;
  width: 100%;
  color: ${props => props.theme.name};
  display: flex;
  flex-direction: column;
  @media (min-width: 992px) {
    flex-direction: row;
  }
  .dash {
    display: none;
    @media (min-width: 768px) {
      display: flex;
      padding: 0 4px;
    }
  }
`;
const Location = styled.div`
  font-size: 12px;
  color: ${props => props.theme.subTExt};
  display: flex;
  flex-direction: column;
  margin: 8px 16px;
  @media (min-width: 992px) {
    flex-direction: row;
  }
  .dash {
    display: none;
    @media (min-width: 992px) {
      display: flex;
      padding: 0 4px;
    }
  }
`;

const Work = styled.ul`
  color: ${props => props.theme.bullets};
  padding: 0;
  margin: 0 0 0 18px;

  li {
    font-size: 15px;
    margin-bottom: 16px;
    line-height:16px;
    @media (min-width: 992px) {
      font-size: 12px;
    }
    span,b,a{
      color: #1f6cb5;
    }
  }
`;

const JobTitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 16px;
  @media (min-width: 1025px) {
    a {
      display: none;
    }
  }
`;
const Toggler = styled.button`
  width: 46px;
  height: 46px;
  padding: 0;
  background: none;
  border: 0;
  margin-top: -24px;
  svg {
    width: 21px;
    height: 21px;
    fill: ${props => props.theme.name};
  }
`;

const ExperianceContent = props => {
  const [state, setstate] = useState(true);
  const IsMobile = window.innerWidth < 768;
  useEffect(() => {
    IsMobile && setstate(false);
  }, []);
  const ToggleContent = () => {
    setstate(!state);
  };
  return (
    <Content>
      <CompanyHeader>
        <span>{props.companyName}</span>
        <span className="dash"> - </span>
        <JobTitle>
          {props.jobTitle}
          {IsMobile && (
            <Toggler onClick={ToggleContent}>
              {!state ? (
                <svg>
                  <use xlinkHref={`${icons}#icon-circle-down`}></use>
                </svg>
              ) : (
                <svg>
                  <use xlinkHref={`${icons}#icon-circle-up`}></use>
                </svg>
              )}
            </Toggler>
          )}
        </JobTitle>
      </CompanyHeader>

      <Location>
        <span>{props.location}</span>
        <span className="dash"> - </span>
        <span>{props.duration}</span>
      </Location>
      {state && (
        <Work>
          {props.list.map((item, index) => {
          return <li key={index} dangerouslySetInnerHTML={{__html: item}} />;
          })}
        </Work>
      )}
    </Content>
  );
};
export default ExperianceContent;

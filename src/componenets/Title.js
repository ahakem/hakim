import React from "react";
import styled from "styled-components";

const Heading = styled.h4`
  font-size: 15px;
  font-weight: normal;
  color: ${props => props.theme.name};
  display: inline-block;
  margin-bottom:8px;
  text-transform
  @media (min-width: 992px) {
    position: relative;
    &:after {
      content: " ";
      width: 25px;
      height: 1px;
      background: ${props => props.theme.name};
      position: absolute;
      top: 50%;
      right: -40px;
    }
  }
`;

const Title = ({ data }) => {
  return <Heading>{data}</Heading>;
};
export default Title;

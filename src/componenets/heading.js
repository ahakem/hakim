import React from "react";
import styled from "styled-components";
const Title = styled.h4`
  font-size:30px;
  color: ${props => props.colors.text}
  font-wight:bold;
  
`;

const Heading = props => {
  return (
    <>
      <Title colors={props.colors}>{props.data}</Title>
    </>
  );
};

export default Heading;

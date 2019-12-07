import React from "react";
import styled from "styled-components";
import Heading from "./heading"



const BioSection = styled.section`
  
  
`;


const Bio = props => {
  return(
  <>
    <BioSection colors={props.colors}>
     <Heading colors={props.colors} data="About Me" />
      
    </BioSection>
  </>
)};

export default Bio;

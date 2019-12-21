import React from "react";
import Bio from "./componenets/Bio";

function About(props) {
  return (
    <>
      <Bio colors={props.colors} />
    </>
  );
}

export default About;

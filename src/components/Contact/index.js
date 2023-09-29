import React from "react";
import {
  StyledCardContainer,
  StyledCardHeadingContainer,
  StyledHeading1,
  StyledMoreInformation,
} from "@/styles/Styles";

export const Contact = () => {
  return (
    <StyledCardContainer id="contact">
      <StyledCardHeadingContainer>
        <StyledMoreInformation>Get In Touch</StyledMoreInformation>
        <StyledHeading1>Contact Me</StyledHeading1>
      </StyledCardHeadingContainer>
    </StyledCardContainer>
  );
};

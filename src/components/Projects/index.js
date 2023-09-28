import React from "react";
import {
  StyledCardContainer,
  StyledCardHeadingContainer,
  StyledHeading1,
  StyledMoreInformation,
} from "@/styles/Styles";

export const Projects = () => {
  return (
    <StyledCardContainer id="projects">
      <StyledCardHeadingContainer>
        <StyledMoreInformation>Browse My Recent</StyledMoreInformation>
        <StyledHeading1>Projects</StyledHeading1>
      </StyledCardHeadingContainer>
    </StyledCardContainer>
  );
};

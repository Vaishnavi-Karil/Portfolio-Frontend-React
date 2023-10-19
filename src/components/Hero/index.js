import React from "react";
import {
  StyledButtonContainer,
  StyledDescriptionContainer,
  StyledHeroContainer,
  StyledImageContainer,
  StyledProfileImage,
} from "./HeroStyle";
import { Img } from "@/app/data/images";
import {
  StyledButtongGreyBg,
  StyledDisplayPdfBlackPage,
  StyledHeading1,
  StyledHeading3,
  StyledHeading6,
} from "@/styles/Styles";

export const Hero = () => {
  const { profile_photo } = Img;
  return (
    <StyledHeroContainer id="/">
      <StyledImageContainer>
        <StyledProfileImage src={profile_photo} alt={profile_photo} />
      </StyledImageContainer>
      <StyledDescriptionContainer>
        <StyledHeading6>Hello, I'm </StyledHeading6>
        <StyledHeading1>Vaishnavi Karil</StyledHeading1>
        <StyledHeading3>Full Stack Developer</StyledHeading3>
        <StyledButtonContainer>
          <StyledDisplayPdfBlackPage
            href="/fullstackdeveloper.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </StyledDisplayPdfBlackPage>
          <StyledButtongGreyBg href="/#contact">
            Contact Info
          </StyledButtongGreyBg>
        </StyledButtonContainer>
      </StyledDescriptionContainer>
    </StyledHeroContainer>
  );
};

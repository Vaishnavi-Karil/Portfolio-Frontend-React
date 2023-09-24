import React from "react";
import {
  ButtonContainer,
  DescriptionContainer,
  HeroContainer,
  ImageContainer,
  ProfileImage,
} from "./HeroStyle";
import { Img } from "@/app/data/images";
import {
  ButtongGreyBg,
  DisplayPdfBlackPage,
  Heading1,
  Heading3,
  Heading6
} from "@/styles/Styles";

export const Hero = () => {
  const { profile_pic } = Img;
  return (
    <HeroContainer>
      <ImageContainer>
        <ProfileImage src={profile_pic} alt={profile_pic} />
      </ImageContainer>
      <DescriptionContainer>
        <Heading6>Hello, I'm </Heading6>
        <Heading1>Vaishnavi Karil</Heading1>
        <Heading3>Full Stack Developer</Heading3>
        <ButtonContainer>
    
          <DisplayPdfBlackPage
            href='/fullstackdeveloper.pdf'
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </DisplayPdfBlackPage>
          <ButtongGreyBg href ="/#contact">Contact Info</ButtongGreyBg>
        </ButtonContainer>
      </DescriptionContainer>
    </HeroContainer>
  );
};

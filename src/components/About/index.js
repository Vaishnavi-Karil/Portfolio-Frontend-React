import React from "react";
import {
  StyledCardContainer,
  StyledCardHeadingContainer,
  StyledHeading1,
  StyledMoreInformation,
} from "@/styles/Styles";
import {
  StyledAboutContainer,
  StyledAboutHeader,
  StyledAboutMeSummary,
  StyledBackendExperience,
  StyledContainer,
  StyledDetails,
  StyledEducationDetails,
  StyledExperienceDetails,
  StyledFrontendExperience,
  StyledIntenship,
  StyledIntenshipDetails,
  StyledProfileImage,
  StyledTotalExperience,
  StyledDetailsHeader,
  StyledStrong,
} from "./AboutStyle";
import { Img } from "@/app/data/images";

export const About = () => {
  const { experience_pic, education_pic } = Img;
  return (
    <StyledCardContainer id="about">
      <StyledCardHeadingContainer>
        <StyledMoreInformation>Get To Know More</StyledMoreInformation>
        <StyledHeading1>About Me</StyledHeading1>
      </StyledCardHeadingContainer>
      <StyledAboutMeSummary>
        Hello, I'm <StyledStrong> full-stack developer</StyledStrong> with
        <StyledStrong>
           3+ Years experiences of frontend React experience
        </StyledStrong>
        and
        <StyledStrong>
           6 months of REST API's Developement experience
        </StyledStrong>
        . I am enjoy developing websites or a web application using
        <StyledStrong> Next.js</StyledStrong> and
        <StyledStrong> Express</StyledStrong>.
      </StyledAboutMeSummary>
      <StyledAboutContainer>
        <StyledTotalExperience>
          <StyledContainer>
            <StyledProfileImage src={experience_pic} alt={experience_pic} />
            <StyledExperienceDetails>
              <StyledAboutHeader>Experience</StyledAboutHeader>
              <StyledDetails>
                <StyledFrontendExperience>
                  <StyledDetailsHeader> 3+ Years</StyledDetailsHeader>
                  <p>Frontend Experience</p>
                </StyledFrontendExperience>
                <StyledBackendExperience>
                  <StyledDetailsHeader> 6+ Months</StyledDetailsHeader>
                  <p>Backend Experience</p>
                </StyledBackendExperience>
              </StyledDetails>
            </StyledExperienceDetails>
          </StyledContainer>
        </StyledTotalExperience>
        <StyledIntenship>
          <StyledContainer>
            <StyledProfileImage src={experience_pic} alt={experience_pic} />
            <StyledAboutHeader>Intenship</StyledAboutHeader>
            <StyledDetails>
              <StyledIntenshipDetails>
                Achievement is getting a better understanding of frontend
                technologies which helps to build React projects and Start
                working with Live projects on it.
              </StyledIntenshipDetails>
            </StyledDetails>
          </StyledContainer>
        </StyledIntenship>
        <StyledEducationDetails>
          <StyledContainer>
            <StyledProfileImage src={education_pic} alt={education_pic} />
            <StyledAboutHeader>Education</StyledAboutHeader>
            <StyledDetails>
              <StyledFrontendExperience>
                <StyledDetailsHeader>B.Sc</StyledDetailsHeader>
                <p>Bachelor of Science, CS</p>
              </StyledFrontendExperience>
              <StyledBackendExperience>
                <StyledDetailsHeader>M.Sc</StyledDetailsHeader>
                <p>Master of Science, IT</p>
              </StyledBackendExperience>
            </StyledDetails>
          </StyledContainer>
        </StyledEducationDetails>
      </StyledAboutContainer>
    </StyledCardContainer>
  );
};

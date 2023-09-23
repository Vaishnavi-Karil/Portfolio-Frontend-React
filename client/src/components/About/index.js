import React from "react";
import {
  CardContainer,
  CardHeadingContainer,
  Heading1,
  MoreInformation,
} from "@/styles/Styles";
import {
  AboutContainer,
  AboutHeader,
  BackendExperience,
  Container,
  Details,
  EducationDetails,
  EductionDetails,
  ExperienceDetails,
  FrontendExperience,
  Intenship,
  IntenshipDetails,
  ProfileImage,
  TotalExperience,
} from "./AboutStyle";
import { Img } from "@/app/data/images";

export const About = () => {
  const { experience_pic, education_pic } = Img;
  return (
    <CardContainer id="about">
      <CardHeadingContainer>
        <MoreInformation>Get To Know More</MoreInformation>
        <Heading1>About Me</Heading1>
      </CardHeadingContainer>
      <AboutContainer>
        <TotalExperience>
          <Container>
            <ProfileImage src={experience_pic} alt={experience_pic} />
            <Details>
              <AboutHeader>Experience</AboutHeader>
              <ExperienceDetails>
              <FrontendExperience>
                  <p> 3 Years</p>
                  <p>Frontend Experience</p>
              </FrontendExperience>
                <BackendExperience>
                  <p> 6 + Months</p>
                  <p>Backend Experience</p>
                </BackendExperience>
              </ExperienceDetails>
            </Details>
          </Container>
        </TotalExperience>
        <Intenship>
          <Container>
            <ProfileImage src={experience_pic} alt={experience_pic} />
            <Details>
              <AboutHeader>Intenship</AboutHeader>
              <IntenshipDetails>
                
              </IntenshipDetails>
            </Details>
          </Container>
        </Intenship>
        <EducationDetails>
          <Container>
            <ProfileImage src={education_pic} alt={education_pic} />
            <Details>
              <AboutHeader>Education</AboutHeader>
              <EductionDetails></EductionDetails>
            </Details>
          </Container>
        </EducationDetails>
      </AboutContainer>
    </CardContainer>
  );
};

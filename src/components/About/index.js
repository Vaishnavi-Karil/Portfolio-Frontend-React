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
  AboutMeSummary,
  BackendExperience,
  Container,
  Details,
  EducationDetails,
  ExperienceDetails,
  FrontendExperience,
  Intenship,
  IntenshipDetails,
  ProfileImage,
  TotalExperience,
  DetailsHeader,
  Strong
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
      <AboutMeSummary>
        Hello,  I'm <Strong>full-stack developer</Strong> with <Strong>3+ Years experiences of frontend React experience</Strong>  and <Strong>6 months of REST API's Developement experience</Strong> . I am enjoy developing websites or a web application using <Strong>Next.js</Strong>  and <Strong>Express</Strong>.
      </AboutMeSummary>
      <AboutContainer>
        <TotalExperience>
          <Container>
            <ProfileImage src={experience_pic} alt={experience_pic} />
            <ExperienceDetails>
              <AboutHeader>Experience</AboutHeader>
              <Details>
                <FrontendExperience>
                  <DetailsHeader> 3+ Years</DetailsHeader>
                  <p>Frontend Experience</p>
                </FrontendExperience>
                <BackendExperience>
                  <DetailsHeader> 6+ Months</DetailsHeader>
                  <p>Backend Experience</p>
                </BackendExperience>
              </Details>
            </ExperienceDetails>
          </Container>
        </TotalExperience>
        <Intenship>
          <Container>
            <ProfileImage src={experience_pic} alt={experience_pic} />
            <AboutHeader>Intenship</AboutHeader>
            <Details>
              <IntenshipDetails>
                Achievement is getting a better understanding of frontend
                technologies which helps to build React projects and Start
                working with Live projects on it.
              </IntenshipDetails>
            </Details>
          </Container>
        </Intenship>
        <EducationDetails>
          <Container>
            <ProfileImage src={education_pic} alt={education_pic} />
            <AboutHeader>Education</AboutHeader>
            <Details>
              <FrontendExperience>
                <DetailsHeader>B.Sc</DetailsHeader>
                <p>Bachelor of Science, CS</p>
              </FrontendExperience>
              <BackendExperience>
                <DetailsHeader>M.Sc</DetailsHeader>
                <p>Master of Science, IT</p>
              </BackendExperience>
            </Details>
          </Container>
        </EducationDetails>
      </AboutContainer>
     
    </CardContainer>
  );
};

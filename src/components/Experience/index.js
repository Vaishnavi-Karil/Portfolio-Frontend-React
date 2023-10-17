"use client";
import React, { useState, useEffect } from "react";

import {
  StyledCardContainer,
  StyledCardHeadingContainer,
  StyledHeading1,
  StyledMoreInformation,
} from "@/styles/Styles";
import { ArrayofExperiences } from "@/app/data/constants";
import { StyledExperience } from "./ExperienceStyle";
import Loader from "@/app/loader";

export const Experience = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const experience = ArrayofExperiences.map((experience_details, index) => {
    const {
      companyname,
      designation,
      startdate,
      enddate,
      experience,
      description,
      plateform,
      projectname,
      workingOnTotalProjects,
      technologies: { frontendtechnologies, backendtechnologies, tools },
    } = experience_details;
    return (
      <StyledExperience key={index}>
        <ul>
          <li> {companyname}</li>
          <li> {designation}</li>
          <li>{startdate}</li>
          <li>{enddate}</li>
          <li>{experience}</li>
          <li> {description}</li>
          <li> {plateform}</li>
          <li> {projectname}</li>
          <li>{workingOnTotalProjects}</li>
        </ul>
        <div>
          <ul>
            <li>{frontendtechnologies}</li>
            <li> {backendtechnologies}</li>
            <li>{tools}</li>
          </ul>
        </div>
      </StyledExperience>
    );
  });
  return (
    <>
      <StyledCardContainer id="experience">
        <StyledCardHeadingContainer>
          <StyledMoreInformation>Explore My</StyledMoreInformation>
          <StyledHeading1>Experience</StyledHeading1>
        </StyledCardHeadingContainer>

        {isClient ? <Loader/> : experience}
      </StyledCardContainer>
    </>
  );
};

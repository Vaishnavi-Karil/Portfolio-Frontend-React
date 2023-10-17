import {
  StyledCardContainer,
  StyledCardHeadingContainer,
  StyledHeading1,
  StyledMoreInformation,
} from "@/styles/Styles";
import { ArrayofExperiences } from "@/app/data/constants";
import { StyledExperience } from "./ExperienceStyle";

export const Experience = () => {
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
        <div>
          <p>{companyname}</p>
          <p>{designation}</p>
          <p>{startdate}</p>
          <p>{enddate}</p>
          <p>{experience}</p>
          <p>{description}</p>
          <p>{plateform}</p>
          <p>{projectname}</p>
          <p>{workingOnTotalProjects}</p>
        </div>
        <div>
          <div>
            <p>{frontendtechnologies}</p>
            <p> {backendtechnologies}</p>
            <p>{tools}</p>
          </div>
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

        {experience}
      </StyledCardContainer>
    </>
  );
};

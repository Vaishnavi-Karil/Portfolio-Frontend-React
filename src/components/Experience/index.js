import {
  StyledCardContainer,
  StyledCardHeadingContainer,
  StyledHeading1,
  StyledHeading3,
  StyledHeading6,
  StyledMoreInformation,
} from "@/styles/Styles";
import { ArrayofExperiences } from "@/app/data/constants";
import {
  CompanyName,
  StyledCompanyName,
  StyledDescription,
  StyledExperience,
  StyledExperienceHeadingContainer,
  StyledHeaderTypography,
  StyledRoleAndDurationOfWork,
  StyledTotalExperience,
} from "./ExperienceStyle";

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
      responsibility,
      technologies: { frontendtechnologies, backendtechnologies, tools },
    } = experience_details;
    return (
      <StyledExperience key={index}>
        <div style={{ lineHeight: "1.6rem" }}>
          <StyledExperienceHeadingContainer>
          <StyledCompanyName>{companyname}</StyledCompanyName>
          <StyledTotalExperience>8 months</StyledTotalExperience>
          </StyledExperienceHeadingContainer>
          <StyledRoleAndDurationOfWork>
            <p>{designation}</p>
            <p>
              {startdate} - {enddate}
            </p>
          </StyledRoleAndDurationOfWork>

          <StyledDescription>
            {description(designation, companyname, responsibility)}
          </StyledDescription>
        </div>
      </StyledExperience>
    );
  });
  return (
    <>
      <StyledCardContainer id="experience" styling={{ alignItem: "left" }}>
        <StyledCardHeadingContainer>
          <StyledMoreInformation>Explore My</StyledMoreInformation>
          <StyledHeading1>Experience</StyledHeading1>
        </StyledCardHeadingContainer>
        {experience}
      </StyledCardContainer>
    </>
  );
};

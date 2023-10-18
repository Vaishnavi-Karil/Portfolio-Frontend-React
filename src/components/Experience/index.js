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
      projectdetails: { workingOnTotalProjects, projects },
      // technologies: { frontendtechnologies, backendtechnologies, tools },
    } = experience_details;

    const projectdetailsare = projects.map((project, index) => {
      const {
        plateform,
        projectname,
        workingTimeDuration,
        responsibility,
        description,
        technologies: { frontendtechnologies, backendtechnologies, tools },
      } = project;
      return (
        <>
          <StyledExperienceHeadingContainer key={index}>
            <StyledCompanyName
              styling={{ fontSize: "1rem", borderBottom: "2px solid" }}
            >
              {projectname}
            </StyledCompanyName>
            <StyledTotalExperience>{plateform}</StyledTotalExperience>
          </StyledExperienceHeadingContainer>
          <StyledDescription key={index}>
            {description(designation, companyname, projectname)}
          </StyledDescription>
        </>
      );
    });

    return (
      <StyledExperience key={index}>
        <div style={{ lineHeight: "1.6rem" }}>
          <StyledExperienceHeadingContainer>
            <StyledCompanyName>{companyname}</StyledCompanyName>
            <StyledTotalExperience>{experience}</StyledTotalExperience>
          </StyledExperienceHeadingContainer>

          <StyledRoleAndDurationOfWork>
            <p>{designation}</p>
            <p>
              {startdate} - {enddate}
            </p>
          </StyledRoleAndDurationOfWork>
          {projectdetailsare}
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

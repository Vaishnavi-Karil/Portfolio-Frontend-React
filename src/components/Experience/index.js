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
  StyledFlexBoxContainer,
  StyledHeaderTypography,
  StyledRoleAndDurationOfWork,
  StyledTotalExperience,
} from "./ExperienceStyle";

export const Experience = () => {
  const experience = ArrayofExperiences.map((experience_details, index) => {
    const {
      id,
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
        projectduration,
        workingTimeDuration,
        responsibility,
        description,
        technologies: { frontendtechnologies, backendtechnologies, tools },
      } = project;

      return (
        <div key={index}>
          <StyledExperienceHeadingContainer>
            <StyledCompanyName
              styling={{
                fontSize: "1.2rem",
                textDecoration: "underline",
                textUnderlineOffset: "9px",
              }}
            >
              {projectname} - {plateform}
            </StyledCompanyName>
            {/* <StyledTotalExperience> </StyledTotalExperience> */}

            <StyledTotalExperience>{projectduration}</StyledTotalExperience>
          </StyledExperienceHeadingContainer>
          <StyledDescription>
            {description(designation, companyname, projectname)}
          </StyledDescription>
          <StyledFlexBoxContainer>
            <StyledTotalExperience> Used Skills</StyledTotalExperience>
            <div>
              
              <StyledCompanyName
                styling={{
                  fontSize: "1rem",
                  textDecoration: "underline",
                  textUnderlineOffset: "9px",
                }}
              >
            frontend : {frontendtechnologies.join(", ")}
              </StyledCompanyName>
              <StyledCompanyName
                styling={{
                  fontSize: "1rem",
                  textDecoration: "underline",
                  textUnderlineOffset: "9px",
                }}
              >
               backend :  {backendtechnologies.join(", ")}
              </StyledCompanyName>
            </div>
          </StyledFlexBoxContainer>
        </div>
      );
    });

    return (
      <StyledExperience key={id}>
        <div style={{ lineHeight: "1.6rem" }}>
          <StyledExperienceHeadingContainer>
            <StyledCompanyName>{companyname}</StyledCompanyName>
            <StyledTotalExperience>
              {startdate} - {enddate}
            </StyledTotalExperience>
          </StyledExperienceHeadingContainer>

          <StyledRoleAndDurationOfWork>
            <p>{designation}</p>
            <p>{experience}</p>
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

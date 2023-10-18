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
      projectname,
      responsibility,
      // technologies: { frontendtechnologies, backendtechnologies, tools },
    } = experience_details;
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

          <StyledDescription>
            {/* {description(designation, companyname, projectname)} */}
            I'm a React.js developer is a specialized software engineer proficient in designing and implementing dynamic user interfaces for web applications using React.js, a popular JavaScript library. They combine engineering principles with expertise in frontend technologies to create interactive and responsive user experiences.
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

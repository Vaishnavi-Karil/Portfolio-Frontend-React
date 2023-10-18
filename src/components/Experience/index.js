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
      plateform
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
          <StyledExperienceHeadingContainer>
            <StyledCompanyName styling = {{fontSize: "1rem", borderBottom : '2px solid'}}>{projectname}</StyledCompanyName>
            <StyledTotalExperience>{plateform}</StyledTotalExperience>
          </StyledExperienceHeadingContainer>
          <StyledDescription>
            {description(designation, companyname, projectname)}         
            {/* I'm working as an React Js Developer for Cyber Information
            Technology Corportion and my responsibility to handle and manage
            complete frontend development using Next.js React Framework. */}


{/* 
            I'm working as an React Js Developer at Phixman and my responsibility to handle and manage complete frontend development using React.js Frontend JavaScript Library. */}

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

import React from "react";
import {
  StyledCardContainer,
  StyledCardHeadingContainer,
  StyledHeading1,
  StyledIcon,
  StyledMoreInformation,
  StyledParaTypography,
} from "@/styles/Styles";
import {
  StyledCardDetails,
  StyledCardDetailsContainer,
  StyledRenderSkillContainer,
  StyledSkillCardHeader,
  StyledSkillElement,
} from "./SkillsStyle";
import checkmark from "../../../assets/checkmark.png";
import { ArrayOfSkills } from "@/app/data/constants";
export const Skills = () => {
  return (
    <StyledCardContainer id="skills">
      <StyledCardHeadingContainer>
        <StyledMoreInformation>Explore My</StyledMoreInformation>
        <StyledHeading1>Skills</StyledHeading1>
      </StyledCardHeadingContainer>
      <StyledCardDetails>
        {ArrayOfSkills.map((element, index) => {
          const { title, skills } = element;
          return (
            <StyledCardDetailsContainer key={index}>
              <StyledSkillCardHeader>{title}</StyledSkillCardHeader>
              <StyledRenderSkillContainer>
                {skills.map((skill, index) => {
                  const { skillname, proficiency } = skill;
                  return (
                    <StyledSkillElement key={index}>
                      <StyledIcon src={checkmark} alt="checkmark" />
                      <div>
                        <p>{skillname}</p>
                        <StyledParaTypography>
                          {proficiency}
                        </StyledParaTypography>
                      </div>
                    </StyledSkillElement>
                  );
                })}
              </StyledRenderSkillContainer>
            </StyledCardDetailsContainer>
          );
        })}
      </StyledCardDetails>
    </StyledCardContainer>
  );
};

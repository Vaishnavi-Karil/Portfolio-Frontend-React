import React from "react";
import {
  CardContainer,
  CardHeadingContainer,
  Heading1,
  Icon,
  MoreInformation,
  ParaTypography,
} from "@/styles/Styles";
import {
  CardDetails,
  CardDetailsContainer,
  RenderSkillContainer,
  SkillCardHeader,
  SkillElement,
} from "./SkillsStyle";
import checkmark from "../../../assets/checkmark.png";
import { ArrayOfSkills } from "@/app/data/constants";
export const Skills = () => {
  return (
    <CardContainer id="skills">
      <CardHeadingContainer>
        <MoreInformation>Explore My</MoreInformation>
        <Heading1>Skills</Heading1>
      </CardHeadingContainer>
      <CardDetails>
        {ArrayOfSkills.map((element, index) => {
          const { title, skills } = element;
          return (
            <CardDetailsContainer key={index}>
              <SkillCardHeader>{title}</SkillCardHeader>
              <RenderSkillContainer>
                {skills.map((skill, index) => {
                  const { skillname, proficiency } = skill;
                  return (
                    <SkillElement key={index}>
                      <Icon src={checkmark} alt="checkmark" />
                      <div>
                        <p>{skillname}</p>
                        <ParaTypography> {proficiency}</ParaTypography>
                      </div>
                    </SkillElement>
                  );
                })}
              </RenderSkillContainer>
            </CardDetailsContainer>
          );
        })}
      </CardDetails>
    </CardContainer>
  );
};

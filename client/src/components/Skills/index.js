import React from "react";
import {
  CardContainer,
  CardHeadingContainer,
  Heading1,
  Icon,
  MoreInformation,
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
    <CardContainer>
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
                {skills.map((skill) => {
                  return (
                    <SkillElement key={skill}>
                      <Icon src={checkmark} alt="checkmark" />
                      {skill}
                    </SkillElement>
                  );
                })}
              </RenderSkillContainer>
            </CardDetailsContainer>
          );
        })}

        {/* <CardDetailsContainer>
          <SkillCardHeader></SkillCardHeader>
        </CardDetailsContainer> */}
      </CardDetails>
    </CardContainer>
  );
};

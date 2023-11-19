import React, { useState } from "react";
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
  StyledRenderToolContainer,
  StyledTab,
  StyledTabLink,
  StyledTabs,
  StyledToolBarHeader,
  StyledToolElement,
} from "./SkillsStyle";
import checkmark from "../../../assets/checkmark.png";
import { ArrayOfSkills } from "@/app/data/constants";

import Link from "next/link";
export const Skills = ({
  currentTab,
  setcurrentTab,
  currentId,
  setcurrentId,
}) => {
  return (
    <StyledCardContainer id="skills">
      <StyledCardHeadingContainer>
        <StyledMoreInformation>Explore My</StyledMoreInformation>
        <StyledHeading1>Skills</StyledHeading1>
        <StyledTabs>
          <StyledTabLink
            href="/#skills"
            color={currentTab === "Skills" ? "rgb(53, 53, 53)" : "white"}
            background={currentTab === "Skills" ? "white" : "transparent"}
            onClick={() => {
              setcurrentTab("Skills");
            }}
          >
            <StyledTab>Technical Skills</StyledTab>
          </StyledTabLink>
          <StyledTabLink
            href="/#tools"
            color={currentTab === "Tools" ? "rgb(53, 53, 53)" : "white"}
            background={currentTab === "Tools" ? "white" : "transparent"}
            onClick={() => {
              setcurrentTab("Tools");
            }}
          >
            <StyledTab>Developer Tools</StyledTab>
          </StyledTabLink>
        </StyledTabs>
      </StyledCardHeadingContainer>
      <StyledCardDetails>
        {ArrayOfSkills.map((element, index) => {
          const { title, skills } = element;
          return (
            <StyledCardDetailsContainer key={"skills" + index}>
              <StyledToolBarHeader>{title}</StyledToolBarHeader>
              <StyledRenderToolContainer>
                {skills.map((Skill) => {
                  const { skillname, proficiency } = Skill;
                  return (
                    <StyledToolElement key={Skill}>
                      <StyledIcon src={checkmark} alt="checkmark" />
                      <div>
                        <p>{skillname}</p>
                        <StyledParaTypography>
                          {proficiency}
                        </StyledParaTypography>
                      </div>
                    </StyledToolElement>
                  );
                })}
              </StyledRenderToolContainer>
            </StyledCardDetailsContainer>
          );
        })}
      </StyledCardDetails>
    </StyledCardContainer>
  );
};

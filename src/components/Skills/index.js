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
  StyledRenderSkillContainer,
  StyledRenderToolContainer,
  StyledSkillCardHeader,
  StyledSkillElement,
  StyledTab,
  StyledTabs,
  StyledToolBarHeader,
  StyledToolElement,
} from "./SkillsStyle";
import checkmark from "../../../assets/checkmark.png";
import { ArrayOfSkills, ArrayOfTools } from "@/app/data/constants";
import { useRouter } from "next/navigation";
export const Skills = () => {
  const [currentTab, setcurrentTab] = useState("Skills");
  const router = useRouter();
  return (
    <StyledCardContainer id="skills&tools">
      <StyledCardHeadingContainer>
        <StyledMoreInformation>Explore My</StyledMoreInformation>
        <StyledHeading1>Skills & Tools</StyledHeading1>
        <StyledTabs>
          <StyledTab
            onClick={() => {
              setcurrentTab("Skills");
              router.push("/#skills");
            }}
            color={currentTab === "Skills" ? "rgb(53, 53, 53)" : "white"}
            background={currentTab === "Skills" ? "white" : "transparent"}
          >
            Skills
          </StyledTab>
          <StyledTab
            onClick={() => {
              setcurrentTab("Tools");
              router.push("/#tools");
            }}
            color={currentTab === "Tools" ? "rgb(53, 53, 53)" : "white"}
            background={currentTab === "Tools" ? "white" : "transparent"}
          >
            Tools
          </StyledTab>
        </StyledTabs>
      </StyledCardHeadingContainer>

      {currentTab === "Skills" && (
        <StyledCardDetails id="skills">
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
      )}

      {currentTab === "Tools" && (
        <StyledCardDetails id="tools">
          {ArrayOfTools.map((element, index) => {
            const { title, tools } = element;
            return (
              <StyledCardDetailsContainer key={index}>
                <StyledToolBarHeader>{title}</StyledToolBarHeader>
                <StyledRenderToolContainer>
                  {tools.map((Tool) => {
                    const { toolname, proficiency } = Tool;
                    return (
                      <StyledToolElement key={Tool}>
                        <StyledIcon src={checkmark} alt="checkmark" />
                        <div>
                          <p>{toolname}</p>
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
      )}
    </StyledCardContainer>
  );
};

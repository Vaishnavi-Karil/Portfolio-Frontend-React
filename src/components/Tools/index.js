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
  StyledTabLink,
  StyledTabs,
  StyledToolBarHeader,
  StyledToolElement,
} from "./ToolsStyle";
import checkmark from "../../../assets/checkmark.png";
import { ArrayOfTools } from "@/app/data/constants";
import { useRouter } from "next/navigation";
import Link from "next/link";
export const Tools = ({ currentTab, setcurrentTab }) => {
  return (
    <StyledCardContainer id="tools">
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
            <StyledTab>Development Tools</StyledTab>
          </StyledTabLink>
        </StyledTabs>
      </StyledCardHeadingContainer>
      <StyledCardDetails>
        {ArrayOfTools.map((element, index) => {
          const { title, tools } = element;
          return (
            <StyledCardDetailsContainer key={"tools" + index}>
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
    </StyledCardContainer>
  );
};

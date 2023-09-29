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
  StyledRenderToolContainer,
  StyledToolBarHeader,
  StyledToolElement,
} from "./ToolsStyle";
import checkmark from "../../../assets/checkmark.png";
import { ArrayOfTools } from "@/app/data/constants";
export const Tools = () => {
  return (
    <StyledCardContainer id="tools">
      <StyledCardHeadingContainer>
        <StyledMoreInformation>Explore My </StyledMoreInformation>
        <StyledHeading1>Tools</StyledHeading1>
      </StyledCardHeadingContainer>
      <StyledCardDetails>
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
    </StyledCardContainer>
  );
};

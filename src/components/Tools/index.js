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
  RenderToolContainer,
  ToolCardHeader,
  ToolElement,
} from "./ToolsStyle";
import checkmark from "../../../assets/checkmark.png";
import { ArrayOfTools } from "@/app/data/constants";
export const Tools = () => {
  return (
    <CardContainer id ="tools">
      <CardHeadingContainer>
        <MoreInformation>Explore My </MoreInformation>
        <Heading1>Tools</Heading1>
      </CardHeadingContainer>
      <CardDetails>
        {ArrayOfTools.map((element, index) => {
          const { title, tools } = element;
          return (
            <CardDetailsContainer key={index}>
              <ToolCardHeader>{title}</ToolCardHeader>
              <RenderToolContainer>
                {tools.map((Tool) => {
                   const { toolname, proficiency } = Tool;
                  return (
                    <ToolElement key={Tool}>
                      <Icon src={checkmark} alt="checkmark" />
                      <div>
                        <p>{toolname}</p>
                        <ParaTypography> {proficiency}</ParaTypography>
                      </div>
                    </ToolElement>
                  );
                })}
              </RenderToolContainer>
            </CardDetailsContainer>
          );
        })}
      </CardDetails>
    </CardContainer>
  );
};

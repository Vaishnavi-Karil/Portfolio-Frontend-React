import { route } from "@/app/utils/routes";
import React from "react";
import {
  StyledCopyRightContainer,
  StyledFooterContainer,
  StyledFooterLink,
  StyledFooterNavigationContainer,
} from "./FooterStyle";

export const Footer = () => {
  return (
    <StyledFooterContainer>
      <StyledFooterNavigationContainer>
        {route.map((pg, index) => {
          const { id, path, component, text } = pg;
          return (
            <StyledFooterLink key={id} href={path}>
              {text}
            </StyledFooterLink>
          );
        })}
      </StyledFooterNavigationContainer>
      <StyledCopyRightContainer>
        Copyright © 2023 Vaishnavi Karil. All Rights Reserved
      </StyledCopyRightContainer>
    </StyledFooterContainer>
  );
};

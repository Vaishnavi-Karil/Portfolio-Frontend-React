import { route } from "@/app/utils/routes";
import React from "react";
import {
  DesignedBy,
  StyledCopyRightContainer,
  StyledFooterContainer,
} from "./FooterStyle";

export const Footer = () => {
  return (
    <StyledFooterContainer>
      <StyledCopyRightContainer>Copyright © 2023</StyledCopyRightContainer>
      <StyledCopyRightContainer>
        Designed by <DesignedBy>Vaishnavi Karil.</DesignedBy>
      </StyledCopyRightContainer>
    </StyledFooterContainer>
  );
};

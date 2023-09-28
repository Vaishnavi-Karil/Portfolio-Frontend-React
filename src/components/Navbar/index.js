import React, { useState } from "react";
import {
  StyledLogo,
  StyledLogoContainer,
  StyledMenu,
  StyledNavItems,
  StyledNavLink,
  StyledNavbarContainer,
} from "./NavbarStyle";
import { route } from "@/app/utils/routes";
import { AiOutlineMenu } from "react-icons/ai";
export const Navbar = () => {
  const [openMenuDrawer, setopenMenuDrawer] = useState(false);
  return (
    <StyledNavbarContainer>
      <StyledLogoContainer>
        <StyledLogo href="/">Portfolio.</StyledLogo>
      </StyledLogoContainer>
      <StyledMenu onClick={() => setopenMenuDrawer(!openMenuDrawer)}>
        <AiOutlineMenu />
      </StyledMenu>
      <StyledNavItems display={openMenuDrawer === true ? "flex" : "none"}>
        {route.map((pg, index) => {
          const { id, path, text } = pg;
          return (
            <StyledNavLink key={id} href={path}>
              {text}
            </StyledNavLink>
          );
        })}
      </StyledNavItems>
    </StyledNavbarContainer>
  );
};

import React, { useState } from "react";
import {
  GrayTheme,
  NaviBlueTheme,
  StyledButtonTheme,
  StyledLogo,
  StyledLogoContainer,
  StyledMenu,
  StyledNavItems,
  StyledNavLink,
  StyledNavbarContainer,
} from "./NavbarStyle";
import { route } from "@/app/utils/routes";
import { AiOutlineMenu } from "react-icons/ai";
export const Navbar = ({ themes, currentTheme, setcurrentTheme }) => {
  const [openMenuDrawer, setopenMenuDrawer] = useState(false);
  for(let theme_name in themes){
   
  }
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
      {console.log('currentTheme is..', currentTheme)}
    
        <NaviBlueTheme onClick={() => setcurrentTheme("naviBlueTheme")}/>
        <GrayTheme onClick={() => setcurrentTheme("grayTheme")}/>
      </StyledNavItems>
    </StyledNavbarContainer>
  );
};

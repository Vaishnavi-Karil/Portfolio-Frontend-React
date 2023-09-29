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
  ThemeButton,
} from "./NavbarStyle";
import { route } from "@/app/utils/routes";
import { AiOutlineMenu } from "react-icons/ai";
export const Navbar = ({ theme, currentTheme, setcurrentTheme }) => {
  const [openMenuDrawer, setopenMenuDrawer] = useState(false);
  let renderColorThemeButton = []
 for(let theme_name in theme){
   if((theme_name !== currentTheme) && (renderColorThemeButton.includes(currentTheme) === false)){
    renderColorThemeButton.push(theme_name);
   }
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
      {renderColorThemeButton.map((element, index) => <ThemeButton key ={element} themeBgColor = {theme[element].themeBgColor} onClick = {() => setcurrentTheme(element.toString())} />)}
      </StyledNavItems>
    </StyledNavbarContainer>
  );
};

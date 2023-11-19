import React, { useState } from "react";
import {
  GrayTheme,
  ModeIcon,
  NaviBlueTheme,
  StyledButtonTheme,
  StyledLogo,
  StyledLogoContainer,
  StyledMenu,
  StyledNavItems,
  StyledNavLink,
  StyledNavbarContainer,
  StyledThemeItems,
  ThemeButton,
} from "./NavbarStyle";
import { route } from "@/app/utils/routes";
import { AiOutlineMenu } from "react-icons/ai";
import { FaCog } from "react-icons/fa";

export const DrawerList = ({ theme, currentTheme, setcurrentTheme }) => {
  const [openMenuDrawer, setopenMenuDrawer] = useState(false);
  const [openDrawerForCustomTheme, setopenDrawerForCustomTheme] =
    useState(false);
  let renderColorThemeButton = [];
  for (let theme_name in theme) {
    if (
      theme_name !== currentTheme &&
      renderColorThemeButton.includes(currentTheme) === false
    ) {
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

        <ModeIcon
          onClick={() => setopenDrawerForCustomTheme(!openDrawerForCustomTheme)}
        >
          <FaCog />
        </ModeIcon>
        {openDrawerForCustomTheme === true && (
          <StyledThemeItems>
            {renderColorThemeButton.map((element) => (
              <ThemeButton
                key={element}
                themebgcolor={theme[element].themebgcolor}
                onClick={() => setcurrentTheme(element.toString())}
              />
            ))}
          </StyledThemeItems>
        )}
      </StyledNavItems>
    </StyledNavbarContainer>
  );
};

import React from "react";
import { ButtonContainer, GithHubButton, NavItems, NavLink, NavbarContainer, NavbarLogo, WebsiteName } from "./NavbarStyle";

export const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarLogo>LOGO</NavbarLogo>
      <WebsiteName>Portfolio</WebsiteName>
      <NavItems> 
        <NavLink>
          About
        </NavLink>
        <NavLink> 
          Skills
        </NavLink>
        <NavLink> 
          Experience
        </NavLink>
        <NavLink> 
          Projects
        </NavLink>
        <NavLink> 
          Education
        </NavLink>
      </NavItems>
      <ButtonContainer> 
        <GithHubButton>
          GitHub Profile
        </GithHubButton>
      </ButtonContainer>
    </NavbarContainer>
  );
  }
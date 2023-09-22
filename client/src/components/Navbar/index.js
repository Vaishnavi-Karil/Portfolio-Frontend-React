
import React from "react";

export const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarLogo>LOGO</NavbarLogo>
      <WesiteName>Portfolio</WesiteName>
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
};

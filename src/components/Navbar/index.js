import React from "react";
import {
  Logo,
  LogoContainer,
  NavItems,
  NavLink,
  NavbarContainer,
} from "./NavbarStyle";
import { route } from "@/app/utils/routes";

export const Navbar = () => {
  return (
    <NavbarContainer>
      <LogoContainer>
        <Logo href="/">Portfolio.</Logo>
      </LogoContainer>
      <NavItems>
        {route.map((pg, index) => {
          const { id, path, component, text } = pg;
          return (
            <NavLink key={id} href={path}>
              {text}
            </NavLink>
          );
        })}
      
      </NavItems>
    </NavbarContainer>
  );
};

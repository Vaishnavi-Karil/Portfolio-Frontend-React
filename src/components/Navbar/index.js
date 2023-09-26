import React, { useState } from "react";
import {
  Logo,
  LogoContainer,
  Menu,
  NavItems,
  NavLink,
  NavbarContainer,
} from "./NavbarStyle";
import { route } from "@/app/utils/routes";
import {AiOutlineMenu} from 'react-icons/ai'
export const Navbar = () => {
  const [openMenuDrawer, setopenMenuDrawer] = useState(false)
  return (
    <NavbarContainer>
      <LogoContainer>
        <Logo href="/">Portfolio.</Logo>
      </LogoContainer>
     <Menu onClick = {() =>setopenMenuDrawer(!openMenuDrawer)}>
     <AiOutlineMenu/>
     </Menu>
      <NavItems display={openMenuDrawer === true ? "flex" : "none"}>
        {route.map((pg, index) => {
          const { id, path, text } = pg;
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

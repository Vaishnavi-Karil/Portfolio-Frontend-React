import Link from "next/link";
import styled from "styled-components";

export const NavbarContainer = styled.div`
  height: 17vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin: 0rem 10rem;
`;
export const LogoContainer = styled.div`
display : flex; 
flex-direction : flex-start;`

export const Logo = styled(Link)`
font-size : 2rem;`;

export const WebsiteName = styled(Link)``;

export const NavItems = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
gap: 2.5rem;
font-size : 1.4rem; 
font-family: "Poppins", sans-serif; `;

export const NavLink = styled(Link)``;



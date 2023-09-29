import Link from "next/link";
import styled from "styled-components";

export const StyledNavbarContainer = styled.div`
  height: 17vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin: 0rem 10rem;

  @media only screen and (max-width: 600px) {
    margin: 0rem 2rem;
  }
`;
StyledNavbarContainer.displayName = 'StyledNavbarContainer'
export const StyledLogoContainer = styled.div``;

StyledLogoContainer.displayName = 'StyledLogoContainer';

export const StyledLogo = styled(Link)`
  font-size: 2rem;
`;

StyledLogo.displayName = 'StyledLogo';

export const StyledWebsiteName = styled(Link)``;

StyledWebsiteName.displayName = 'StyledWebsiteName';

export const StyledNavItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 2.5rem;
  font-size: 1.4rem;
  font-family: "Poppins", sans-serif;
  position: relative;

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border-radius: 1rem;
    background: ${({theme})=> theme.bg.bgColor};
    box-shadow: 22px 22px 45px #bebebe, -22px -22px 45px #ffffff;
    position: absolute;
    flex: 1;
    right: 1.9rem;
    top: 4.5rem;
    width: 13rem;
    padding: 1rem 2rem;
    display: ${(props) => props.display};
  }
`;

StyledNavItems.displayName ='StyledNavItems';

export const StyledNavLink = styled(Link)``;

StyledNavLink.displayName = 'StyledNavLink';

export const StyledMenu = styled.button`
  display: none;
  width : 2.5rem; 
  height: 2.5rem;

  @media only screen and (max-width: 600px) {
    display: block;
  }
`;

StyledMenu.displayName = 'StyledMenu';


export const NaviBlueTheme = styled.button`
background: #0f172a;
border-radius: 30%;
width: 2rem;
height: 2rem;`

NaviBlueTheme.displayName = 'StyledButtonTheme';

export const GrayTheme = styled.button`
background: rgb(53, 53, 53);
border-radius: 30%;
width: 2rem;
height: 2rem;`; 

GrayTheme.displayName = 'GrayTheme';
import Link from "next/link";
import styled from "styled-components";

export const StyledNavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  align-items: center;
  /* margin: 0rem 10rem; */

  @media only screen and (max-width: 600px) {
    /* margin: 0rem 2rem; */
  }
`;
StyledNavbarContainer.displayName = "StyledNavbarContainer";

export const StyledLogoContainer = styled.div``;

StyledLogoContainer.displayName = "StyledLogoContainer";

export const StyledLogo = styled(Link)`
  font-size: 2rem;
`;

StyledLogo.displayName = "StyledLogo";

export const StyledWebsiteName = styled(Link)``;

StyledWebsiteName.displayName = "StyledWebsiteName";

export const StyledNavItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 2.5rem;
  font-size: 1.4rem;
  font-family: "Poppins", sans-serif;
  position: relative;
  width: 100%;
  padding: 0rem 2rem 0rem 2rem;

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border-radius: 1rem;
    background: ${({ theme }) => theme.bg.bgColor};
    /* box-shadow: 22px 22px 45px #bebebe, -22px -22px 45px #ffffff; */
    border: 1px solid ${({ theme }) => theme.text.borderColor};
    position: absolute;
    flex: 1;
    right: 1.9rem;
    top: 4.5rem;
    width: 13rem;
    padding: 1rem 2rem;
    display: ${(props) => props.display};
  }
`;

StyledNavItems.displayName = "StyledNavItems";

export const StyledNavLink = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 1rem;
  align-items: center;
  color :  rgb(85, 85, 85);
  &:active {
    color: #ffff;
  }
`;

StyledNavLink.displayName = "StyledNavLink";

export const StyledMenu = styled.button`
  display: none;
  width: 2.5rem;
  height: 2.5rem;

  @media only screen and (max-width: 600px) {
    display: block;
  }
`;

StyledMenu.displayName = "StyledMenu";

export const ModeIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 1rem;
`;

ModeIcon.displayName = "ModeIcon";

export const ThemeButton = styled.button`
  background: ${(props) => props.themebgcolor};
  border-radius: 30%;
  width: 2rem;
  height: 2rem;
`;

ThemeButton.displayName = "ThemeButton";

export const StyledThemeItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 1rem;
  font-size: 1.4rem;
  font-family: "Poppins", sans-serif;
  position: absolute;
  top: 3rem;
  border: 1px solid ${({ theme }) => theme.text.borderColor};
  padding: 1rem;
  border-radius: 1rem;

  @media only screen and (max-width: 600px) {
    /* display: ${(props) => props.display}; */
    display: flex;
    flex-direction: column;
    justify-content: inherit;
    border-radius: 1rem;
    background: ${({ theme }) => theme.bg.bgColor};
    border: 1px solid ${({ theme }) => theme.text.borderColor};
    position: relative;
    flex: 1;
    right: 1.1rem;
    width: 11rem;
    padding: 1rem 1rem;
    flex-wrap: wrap;
  }
`;

// width : 20vw;
// flex: 1;

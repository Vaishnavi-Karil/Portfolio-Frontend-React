import Link from "next/link";
import styled from "styled-components";

export const StyledFooterContainer = styled.div`
  height: 32vh;
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
`;
StyledFooterContainer.displayName ='StyledFooterContainer';

export const StyledFooterNavigationContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.8rem;
  font-size: 1.6rem;
  font-family: "Poppins", sans-serif;
  align-items: center;
  justify-content: center;
  height: 17vh;
  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
  }
`;

StyledFooterNavigationContainer.displayName ='StyledFooterNavigationContainer';
export const StyledFooterLink = styled(Link)``;


StyledFooterLink.displayName = 'StyledFooterLink';

export const StyledCopyRightContainer = styled.div`
  text-align: center;
  color: rgb(85, 85, 85);
  font-size: 1.2rem;
`;

StyledCopyRightContainer.displayName = 'StyledCopyRightContainer';
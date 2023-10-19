import Image from "next/image";
import styled from "styled-components";

export const StyledHeroContainer = styled.div`
  /* height: 80vh; */
  text-align: center;
  display: flex;
  width: 100%;
  margin-bottom: 1.5rem;
  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
StyledHeroContainer.displayName =' StyledHeroContainer';


export const StyledImageContainer = styled.div`
  flex: 1;
`;

StyledImageContainer.displayName = 'StyledImageContainer';
export const StyledProfileImage = styled(Image)`
  flex: 1;
  border: transparent;
  /* border-radius: 60%; */
  border-radius: 5%;
  margin: 13% 0rem;
  width: auto;
  height: 25rem;

  @media only screen and (max-width: 600px) {
    width: 100%;
    margin: 0rem;
  }
`;

StyledProfileImage.displayName = 'StyledProfileImage';

export const StyledDescriptionContainer = styled.div`
  width: 51%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media screen and (max-width: 600px) {
    width: 100%;
    margin-top: 1rem;
  }
`;

StyledDescriptionContainer.displayName = 'StyledDescriptionContainer';

export const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 1rem;
  margin-top: 1rem;
`;

StyledButtonContainer.displayName = 'StyledButtonContainer';
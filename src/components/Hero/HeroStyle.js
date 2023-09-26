import Image from "next/image";
import styled from "styled-components";

export const HeroContainer = styled.div`
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

export const ImageContainer = styled.div`
  flex: 1;
`;

export const ProfileImage = styled(Image)`
  flex: 1;
  border: transparent;
  border-radius: 60%;
  margin: 13% 0rem;

  @media only screen and (max-width: 600px) {
    width: 100%;
    margin: 0rem;
  }
`;

export const DescriptionContainer = styled.div`
  width: 51%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media screen and (max-width : 600px){
    width : 100%;
    margin-top: 1rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 1rem;
  margin-top: 1rem;
`;

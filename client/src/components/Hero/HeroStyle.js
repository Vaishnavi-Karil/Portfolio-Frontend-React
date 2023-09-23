import Image from "next/image";
import styled from "styled-components";

export const HeroContainer = styled.div`
  height: 80vh;
  text-align: center;
  display: flex;
  width: 100%;
  margin-bottom: 1.5rem;
`;

export const ImageContainer = styled.div`
  width: 49%;
`;

export const ProfileImage = styled(Image)`
  width: 68%;
  height: 80%;
  border: transparent;
  border-radius: 60%;
  margin: 3.5rem 0rem;
`;

export const DescriptionContainer = styled.div`
  width: 51%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 1rem;
  margin-top: 1rem;
`;

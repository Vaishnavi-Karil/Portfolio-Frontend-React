import Image from "next/image";
import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  gap: 1.5rem;
`;

export const ProfileImage = styled(Image)`
  width: 1.5rem;
  height: 1.5rem;
`;
export const Container = styled.div`
  height: auto;
  min-height: 20rem;
  border-radius: 10%;
  /* padding: 3.5rem 1rem; */
  border: rgb(53, 53, 53) 0.1rem solid;
  padding: 1.9rem;
`;

export const TotalExperience = styled.div`
  width: 100%;
  min-height: 3vh;
`;

export const Intenship = styled.div`
  width: 100%;
  min-height: 3vh;
`;

export const EducationDetails = styled.div`
  width: 100%;
  min-height: 3vh;
`;

export const AboutHeader = styled.div`
font-size : 2rem;`;

export const ExperienceDetails = styled.div``;

export const Details = styled.div`
  margin: 1.9rem 0rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: space-around;
  color : rgb(85, 85, 85);
  font-size : 1.2rem;
`;

export const EductionDetails = styled.div`
color : rgb(85, 85, 85);
font-size : 1.4rem;`;

export const IntenshipDetails = styled.div`
display : flex; 
flex-direction : column; 
`;

export const FrontendExperience = styled.div`
`;

export const BackendExperience = styled.div``;

export const AboutMeSummary = styled.div``;


export const DetailsHeader = styled.p`
`
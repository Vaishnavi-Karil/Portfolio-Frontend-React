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
height: 25rem;
border: transparent;
border-radius: 10%;
padding: 3.5rem 1rem;
border: rgb(53, 53, 53) 0.1rem solid;
`;

export const TotalExperience = styled.div`
width: 100%;
min-height: 3vh;
`; 

export const Intenship = styled.div`
width : 100%;
min-height: 3vh;`;

export const EducationDetails = styled.div`
width : 100%;
min-height: 3vh;`;

export const AboutHeader = styled.h3``; 

export const Details = styled.div``;

export const ExperienceDetails = styled.div`
margin: 1.9rem 0rem;
display: flex;
flex-direction: column;
gap: 2rem;
justify-content: space-around;`;

export const EductionDetails = styled.div``;

export const IntenshipDetails = styled.div``;

export const FrontendExperience = styled.div``;

export const BackendExperience = styled.div``;
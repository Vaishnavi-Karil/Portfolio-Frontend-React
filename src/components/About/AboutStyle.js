import Image from "next/image";
import styled from "styled-components";

export const StyledAboutContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 1.5rem;
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
`;

StyledAboutContainer.displayName ='StyledAboutContainer';

export const StyledProfileImage = styled(Image)`
  width: 1.5rem;
  height: 1.5rem;
`;

StyledProfileImage.displayName ='StyledProfileImage';

export const StyledContainer = styled.div`
  height: auto;
  min-height: 20rem;
  border-radius: 10%;
  border:  ${({theme})=> theme.text.borderColor} 1px solid;
  /* box-shadow: 22px 22px 45px #bebebe, -22px -22px 45px #ffffff; */
  padding: 1.9rem;
`;

StyledContainer.displayName ='StyledContainer';


export const StyledTotalExperience = styled.div`
  width: 100%;
  min-height: 3vh;
`;

StyledTotalExperience.displayName ='StyledTotalExperience';

export const StyledIntenship = styled.div`
  width: 100%;
  min-height: 3vh;
`;

StyledIntenship.displayName ='StyledIntenship';

export const StyledEducationDetails = styled.div`
  width: 100%;
  min-height: 3vh;
`;
StyledEducationDetails.displayName ='StyledEducationDetails';
export const StyledAboutHeader = styled.div`
  font-size: 2rem;
`;

StyledAboutHeader.displayName = 'StyledAboutHeader';

export const StyledExperienceDetails = styled.div``;
StyledExperienceDetails.displayName ='StyledExperienceDetails';

export const StyledDetails = styled.div`
  margin: 1.9rem 0rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: space-around;
   color: ${({theme}) => theme.text.textColor};
  font-size: 1.2rem;
`;
StyledDetails.displayName = 'StyledDetails';

export const StyledEductionDetails = styled.div`
   color: ${({theme}) => theme.text.textColor};
  font-size: 1.4rem;
`;
StyledEductionDetails.displayName = 'StyledEductionDetails';

export const StyledIntenshipDetails = styled.div`
  display: flex;
  flex-direction: column;
`;
StyledIntenshipDetails.displayName = 'StyledIntenshipDetails';

export const StyledFrontendExperience = styled.div``;
StyledFrontendExperience.displayName = 'StyledFrontendExperience';

export const StyledBackendExperience = styled.div``;

StyledBackendExperience.displayName = 'StyledBackendExperience';

export const StyledAboutMeSummary = styled.div`
  margin-bottom: 2.5rem;
  color:  ${({theme})=> theme.text.bgColor};
  font-size: 1.3rem;
  line-height: 160%;
  text-align: center;
  padding: 2rem 0rem;
`;
StyledAboutMeSummary.displayName = 'StyledAboutMeSummary';

export const StyledDetailsHeader = styled.p``;

StyledDetailsHeader.displayName = 'StyledDetailsHeader';
export const StyledStrong = styled.strong`
  color:  ${({theme})=> theme.common.bgColor};
  /*  color: ${({theme}) => theme.text.textColor}; */
  font-weight: bold;
  padding: 0rem 0.5rem;
`;

StyledStrong.displayName = 'StyledStrong';
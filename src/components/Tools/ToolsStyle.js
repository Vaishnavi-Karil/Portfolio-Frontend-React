import styled from "styled-components";

export const StyledCardDetails = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1.5rem;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

StyledCardDetails.displayName = 'StyledCardDetails'

export const StyledCardDetailsContainer = styled.div`
  border-radius: 3rem;
  border:  ${({theme})=> theme.text.borderColor} 1px solid;
  /* box-shadow: 22px 22px 45px #bebebe, -22px -22px 45px #ffffff; */
  box-shadow: ${({theme}) => theme.boxShadow};
  background : ${({theme}) => theme.cardBg};
  padding: 0rem 1.5rem;
`;

StyledCardDetailsContainer.displayName = 'StyledCardDetailsContainer';
export const StyledToolBarHeader = styled.p`
   color: ${({theme}) => theme.text.textColor};
  font-weight: 700;
  font-size: 2rem;
  line-height: 3.8rem;
  letter-spacing: 0.2rem;
  margin: 0.5rem 0rem;
  text-align: center;
  font-family: "Poppins", sans-serif;
`;

StyledToolBarHeader.displayName =  'StyledToolBarHeader';

export const StyledRenderToolContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

StyledRenderToolContainer.displayName = 'StyledRenderToolContainer';

export const StyledToolElement = styled.div`
  width: 50%;
  display: flex;
  gap: 1rem;
  padding: 1.2rem;
  text-align: left;
`;

StyledToolElement.displayName = 'StyledToolElement';

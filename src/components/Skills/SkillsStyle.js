import styled from "styled-components";

export const StyledCardDetails = styled.div`
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
`;

StyledCardDetails.displayName='StyledCardDetails';

export const StyledCardDetailsContainer = styled.div`
  flex: 1;
  border-radius: 3rem;
  border: rgb(53, 53, 53) 1px solid;
  /* box-shadow: 22px 22px 45px #bebebe, -22px -22px 45px #ffffff; */
  padding: 0rem 1.5rem;
`;
StyledCardDetailsContainer.displayName = 'StyledCardDetailsContainer';

export const StyledSkillCardHeader = styled.p`
  color: rgb(85, 85, 85);
  font-weight: 700;
  font-size: 2rem;
  line-height: 3.8rem;
  letter-spacing: 0.2rem;
  margin: 0.5rem 0rem;
  text-align: center;
  font-family: "Poppins", sans-serif;
`;

StyledSkillCardHeader.displayName ='StyledSkillCardHeader'


export const StyledRenderSkillContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
StyledRenderSkillContainer.displayName = 'StyledRenderSkillContainer'

export const StyledSkillElement = styled.div`
  width: 50%;
  display: flex;
  gap: 1rem;
  padding: 1.2rem;
  text-align: left;
`;

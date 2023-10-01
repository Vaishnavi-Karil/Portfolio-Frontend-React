import Link from "next/link";
import styled from "styled-components";

export const StyledCardDetails = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
`;

StyledCardDetails.displayName = "StyledCardDetails";

export const StyledCardDetailsContainer = styled.div`
  flex: 1;
  border-radius: 3rem;
  border: ${({ theme }) => theme.text.borderColor} 1px solid;
  /* box-shadow: 22px 22px 45px #181b23, -22px -22px 45px #181b23; */
  box-shadow: ${({ theme }) => theme.boxShadow};
  background: ${({ theme }) => theme.cardBg};
  padding: 0rem 1.5rem;
`;
StyledCardDetailsContainer.displayName = "StyledCardDetailsContainer";

export const StyledSkillCardHeader = styled.p`
  color: ${({ theme }) => theme.text.textColor};
  font-weight: 700;
  font-size: 2rem;
  line-height: 3.8rem;
  letter-spacing: 0.2rem;
  margin: 0.5rem 0rem;
  text-align: center;
  font-family: "Poppins", sans-serif;
`;

StyledSkillCardHeader.displayName = "StyledSkillCardHeader";

export const StyledRenderSkillContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
StyledRenderSkillContainer.displayName = "StyledRenderSkillContainer";

export const StyledSkillElement = styled.div`
  width: 50%;
  display: flex;
  gap: 1rem;
  padding: 1.2rem;
  text-align: left;
`;

// Tools

export const StyledToolBarHeader = styled.p`
  color: ${({ theme }) => theme.text.textColor};
  font-weight: 700;
  font-size: 2rem;
  line-height: 3.8rem;
  letter-spacing: 0.2rem;
  margin: 0.5rem 0rem;
  text-align: center;
  font-family: "Poppins", sans-serif;
`;

StyledToolBarHeader.displayName = "StyledToolBarHeader";

export const StyledRenderToolContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

StyledRenderToolContainer.displayName = "StyledRenderToolContainer";

export const StyledToolElement = styled.div`
  width: 50%;
  display: flex;
  gap: 1rem;
  padding: 1.2rem;
  text-align: left;
`;

StyledToolElement.displayName = "StyledToolElement";

// Tabs

export const StyledTabs = styled.div`
  /* display: flex;
  gap: 1rem;
  border: 1px solid white;
  border-radius: 45px;
  font-size: 1rem;
  background: transparent;
  justify-content: center;
  margin-top: 1rem;
  background: rgb(53, 53, 53); */

  display: flex;
  gap: 1rem;
  border: 1px solid white;
  border-radius: 45px;
  font-size: 1rem;
  background: transparent;
  justify-content: center;
  margin-top: 1rem;
  background: ${({ theme }) => theme.bg.bgColor};
  height: 2.5rem;
`;

export const StyledTabLink = styled(Link)`
  padding: 0.6rem;
  border: 1px solid transparent;
  border-radius: 1.4rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: white;
  width: 10rem;
  background: ${(props) => props.background};
  color: ${(props) => props.color};
`;
StyledTabLink.displayName = "StyledTabLink";

export const StyledTab = styled.p`
  /* padding: 0.6rem;
  border: 1px solid transparent;
  border-radius: 1.4rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: white;
  width: 10rem;
  background: ${(props) => props.background};
  color: ${(props) => props.color}; */
`;
StyledTab.displayName = "StyledTab";

import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const StyledHeading1 = styled.p`
  font-size: 3.8rem;
  color: ${({ theme }) => theme.common.bgColor};
  font-weight: 700;
  font-family: "Poppins", sans-serif;
`;
StyledHeading1.displayName = "StyledHeading1";

export const StyledHeading6 = styled.p`
  /* color: rgb(85, 85, 85); */
  color: ${({ theme }) => theme.text.textColor};
  font-weight: 600;
  font-size: 1.5rem;
`;
StyledHeading6.displayName = "StyledHeading6";

export const StyledHeading3 = styled.p`
  color: ${({ theme }) => theme.text.textColor};
  font-weight: 600;
  font-size: 2rem;
  line-height: 3.8rem;
  letter-spacing: 0.2rem;
`;

StyledHeading3.displayName = "StyledHeading3";

export const StyledMoreInformation = styled.p`
  color: ${({ theme }) => theme.text.textColor};
  font-size: 1.2rem;
`;
StyledMoreInformation.displayName = "StyledMoreInformation";

export const StyledCardContainer = styled.div`
  min-height: 80vh;
  height: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1.5rem;
`;

StyledCardContainer.displayName = "StyledCardContainer";

export const StyledCardHeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 2rem 1rem;
`;

StyledCardHeadingContainer.displayName = "StyledCardHeadingContainer";

export const StyledDisplayPdfBlackPage = styled.a`
  background: transparent;
  color: ${({ theme }) => theme.common.bgTextColor};
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.common.bgColor};
  border-radius: 1.4rem;
  font-size: 0.8rem;
  font-weight: 600;
  width: 10rem;
  box-shadow: ${({ theme }) => theme.boxShadow};
  &:hover {
    color: ${({ theme }) => theme.bg.bgColor};
    background: ${({ theme }) => theme.bg.bgTextColor};
    border: 1px solid transparent;
  }
`;
StyledDisplayPdfBlackPage.displayName = "StyledDisplayPdfBlackPage";

export const StyledButtongGreyBg = styled(Link)`
  background: ${({ theme }) => theme.text.borderColor};
  padding: 1rem;
  border: 1px solid transparent;
  border-radius: 1.4rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: white;
  width: 10rem;
  &:hover {
    color: ${({ theme }) => theme.bg.bgColor};
    background: ${({ theme }) => theme.bg.bgTextColor};
  }
`;

StyledButtongGreyBg.displayName = "StyledButtongGreyBg";

export const StyledIcon = styled(Image)`
  width: 1.8rem;
  height: 1.8rem;
`;
// /assets/checkmark.png

StyledIcon.displayName = "StyledIcon";

export const StyledParaTypography = styled.p`
  color: ${({ theme }) => theme.text.textColor};
  font-size: 1.1rem;
`;

StyledParaTypography.displayName = "StyledParaTypography";

export const StyledSkillsAndToolsContainer = styled.div``;

StyledSkillsAndToolsContainer.displayName = "StyledSkillsAndToolsContainer";

import styled from "styled-components";

export const HeroSectionContainer = styled.main`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 36px);
`;
export const RecruiteeHeader = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  font-size: calc(10px + 2vmin);
  color: ${({ theme }) => theme.colors.text};
  height: 100%;
`;

export const ScrollDownArrowSvg = styled.svg`
  fill: ${({ theme }) => theme.colors.text};
`;
export const RecruiteeHeadline = styled.h1``;
export const RecruiteeSubHeadline = styled.h2``;

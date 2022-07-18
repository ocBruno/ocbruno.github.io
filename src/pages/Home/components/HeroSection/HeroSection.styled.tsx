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
  margin: 12rem 0;
  color: ${({ theme }) => theme.colors.text};
  height: 100%;
`;
export const BackgroundContainer = styled.div`
  left: 0;
  top: 0; ;
`;
export const RecruiteeHeadline = styled.h1``;
export const RecruiteeSubHeadline = styled.h2``;

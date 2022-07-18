import styled from "styled-components";

export const ExperienceSectionContainer = styled.section`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  opacity: 0;
  padding-top: 12px;
  padding-bottom: 24px;
  padding-left: 1rem;
`;
export const ExperienceHeader = styled.h2`
  font-size: 32px;
  margin-bottom: 12px;
`;

export const ExperienceItem = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: start;
  justify-content: flex-start;
  margin-bottom: 1rem;
  background: ${({ theme }) => theme.colors.lightBackground};
  color: ${({ theme }) => theme.colors.text};
  padding: 1rem;
  font-weight: 300;
  border-radius: 1rem;
  > i {
    font-weight: 500;
    margin: 0.25rem 0;
  }
`;
export const SectionSubheader = styled.h3`
  font-weight: 600;
  font-size: 1.25rem;
`;

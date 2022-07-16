import styled from "styled-components";

/* Header */
export const RecruiteeHeader = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  font-size: calc(10px + 2vmin);

  color: ${({ theme }) => theme.colors.text};
  height: 100vh;
`;

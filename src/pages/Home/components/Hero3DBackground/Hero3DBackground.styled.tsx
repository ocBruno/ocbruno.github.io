import styled from "styled-components";

export const Cube = styled.div`
  height: 80px;
  width: 80px;
  position: absolute;
  left: calc(50% - 2rem);
  top: calc(50% - 2rem);
  transform-style: preserve-3d;
  animation: spinning 5s linear 0s infinite;
  > * {
    border: 1px solid ${(props) => props.theme.colors.text};
  }
`;

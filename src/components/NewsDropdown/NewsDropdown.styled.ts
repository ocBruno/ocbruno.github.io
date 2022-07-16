import styled from "styled-components";
interface IDropdownContainer {
  isActive: boolean;
}
export const DropdownContainer = styled.div<IDropdownContainer>`
  position: fixed;
  right: 0;
  top: 0;
  width: 320px;
  height: ${({ isActive }) => (isActive ? "400px" : "0")};
  overflow: ${({ isActive }) => (isActive ? "scroll" : "hidden")};
`;
export const ArticlesListContainer = styled.ul``;
export const ArticlesListItem = styled.li``;
export const ArticlesListItemTitle = styled.h2``;
export const ArticlesListItemAuthor = styled.span``;
export const ArticlesListItemContent = styled.div``;
export const ArticlesListItemImage = styled.img`
  width: 20vw;
  height: 20vw;
`;

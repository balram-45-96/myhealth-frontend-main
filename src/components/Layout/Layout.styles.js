import styled from "styled-components";

export const StyledLayout = styled.div`
  height: 100dvh;
  overflow-x: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

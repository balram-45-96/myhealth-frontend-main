import styled from "styled-components";

export const SCContainerBody = styled.div`
  overflow: auto;
  height: 100dvh;
  max-height: 100dvh;

  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
`;

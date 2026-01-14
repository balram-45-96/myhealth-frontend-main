import styled, { keyframes } from "styled-components";

export const LoaderWrapper = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  z-index: 100;
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Spinner = styled.div`
  border: 2px solid ${(props) => props.theme.colors.primary[100]};
  border-top: 2px solid ${(props) => props.theme.colors.primary[500]};
  border-radius: 50%;
  width: 2rem;
  aspect-ratio: 1/ 1;
  animation: ${spin} 1s linear infinite;
`;

export const LoadingMessage = styled.p`
  text-transform: capitalize;
`;

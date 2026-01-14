import styled, { keyframes } from "styled-components";

// Subtle fade-in animation
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(15px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #f0f4ff, #f9fbff);
  padding: 2rem;
`;

export const Logo = styled.img`
  height: 90px;
  margin: 2rem 0 1rem 0;
  animation: ${fadeIn} 0.8s ease-out;
`;

export const Card = styled.div`
  background: #fff;
  padding: 2.5rem 2rem;
  border-radius: 20px;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.08);
  max-width: 500px;
  width: 100%;
  text-align: center;
  animation: ${fadeIn} 1s ease-out;
`;

export const Title = styled.h2`
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #1a1a1a;
`;

export const Subtitle = styled.p`
  font-size: 1.05rem;
  color: #555;
  line-height: 1.6;
`;

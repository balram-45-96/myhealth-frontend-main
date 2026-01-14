import styled from "styled-components";

export const Section = styled.section`
  text-align: center;
  padding: ${({ theme }) => theme.spacings[16]}
    ${({ theme }) => theme.spacings[4]};
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize["4xl"]};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacings[4]};
`;

export const SubTitle = styled.h4`
  color: ${({ theme }) => theme.colors.primary[500]};
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  margin-bottom: ${({ theme }) => theme.spacings[4]};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.gray[500]};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  max-width: 800px;
  margin: 0 auto;
  line-height: 2;
`;

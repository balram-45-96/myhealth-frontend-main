import styled from "styled-components";

export const SCContainerBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const SCContentWrapper = styled.div`
  max-width: 700px;
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings[5]};
  padding-inline: ${({ theme }) => theme.spacings[12]};

  @media screen and (max-width: 576px) {
    padding-inline: ${({ theme }) => theme.spacings[8]};
  }
`;

export const SCNewUpdate = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.primary[100]};
  padding: ${({ theme }) => `${theme.spacings[3]} ${theme.spacings[4]}`};
  border-radius: 50px;
  margin-bottom: ${({ theme }) => theme.spacings[4]};

  span {
    background: ${({ theme }) => theme.colors.primary[600]};
    color: ${({ theme }) => theme.colors.white};
    padding: ${({ theme }) => `${theme.spacings[1]} ${theme.spacings[2]}`};
    font-size: ${({ theme }) => theme.fontSize.xs};
    margin-right: ${({ theme }) => theme.spacings[2]};
    border-top-left-radius: ${({ theme }) => theme.spacings[5]};
    border-top-right-radius: ${({ theme }) => theme.spacings[5]};
    border-bottom-left-radius: ${({ theme }) => theme.spacings[5]};
  }
`;

export const SCUpdateText = styled.div`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.black};
`;

export const SCHeadline = styled.h1`
  font-size: ${({ theme }) => theme.fontSize["5xl"]};
  line-height: 1.2;
  margin-bottom: ${({ theme }) => theme.spacings[4]};

  strong {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.colors.black};
  }

  @media screen and (max-width: 576px) {
    font-size: ${({ theme }) => theme.fontSize["4xl"]};
  }
`;

export const SCSubText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  margin-bottom: ${({ theme }) => theme.spacings[6]};
  line-height: 1.5;
`;

export const SCImageWrapper = styled.div`
  opacity: 0.7;

  img {
    height: 100vh;
    width: 100vw;
    object-fit: cover;

    object-position: right;
    @media screen and (max-width: 1440px) {
      object-position: 80% 50%;
    }
  }
`;

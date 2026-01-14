import styled from "styled-components";

export const AppDownloadLinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${(props) => props.theme.spacings[8]};
  margin: ${(props) => props.theme.spacings[8]};
  gap: ${(props) => props.theme.spacings[20]};
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  span {
    flex: 1;
    display: flex;
    align-items: end;
  }
`;

export const AppImage = styled.img`
  max-width: 400px;
  object-fit: contain;
`;

export const TextSection = styled.div`
  flex: 1;
  color: ${(props) => props.theme.colors.primary[500]};
  max-width: 80%;

  @media screen and (max-width: 768px) {
    text-align: center;
    max-width: 100%;
  }
`;

export const Title = styled.h2`
  font-size: ${(props) => props.theme.fontSize["4xl"]};
  margin-bottom: ${(props) => props.theme.spacings[4]};
  color: ${(props) => props.theme.colors.gray[900]};
  width: 100%;

  @media screen and (max-width: 576px) {
    font-size: ${(props) => props.theme.fontSize["3xl"]};
  }
`;

export const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: ${(props) => props.theme.spacings[4]} 0;
  font-size: ${(props) => props.theme.fontSize.base};
  color: ${(props) => props.theme.colors.gray[600]};
`;

export const ButtonSection = styled.div`
  margin-top: ${(props) => props.theme.spacings[4]};
`;

export const StoreButton = styled.a`
  display: inline-block;
  margin-right: ${(props) => props.theme.spacings[4]};
  img {
    height: 50px;
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

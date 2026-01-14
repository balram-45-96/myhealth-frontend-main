import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: ${(props) => props.theme.colors.gray[100]};
  padding-bottom: ${(props) => props.theme.spacings[4]};

  span {
    display: flex;
    justify-content: space-around;
    padding: ${(props) => props.theme.spacings[10]}
      ${(props) => props.theme.spacings[5]};
    gap: ${(props) => props.theme.spacings[5]};
    flex-wrap: wrap;

    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
      flex-direction: column;
      align-items: center;
      padding: ${(props) => props.theme.spacings[8]}
        ${(props) => props.theme.spacings[4]};
    }
  }
`;

export const Section = styled.div`
  flex: 1;
  margin: 0 ${(props) => props.theme.spacings[5]};
  h4 {
    margin-bottom: ${(props) => props.theme.spacings[4]};
  }

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    margin: ${(props) => props.theme.spacings[4]} 0;
    text-align: center;
  }

  &.mapContainer {
    min-width: 200px !important;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    align-items: center;
  }

  img {
    height: 40px;
    margin-bottom: ${(props) => props.theme.spacings[5]};
  }
`;

export const Logo = styled.div`
  font-size: ${(props) => props.theme.fontSize["2xl"]};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  margin-bottom: ${(props) => props.theme.spacings[5]};
  color: ${({ theme }) => theme.colors.primary[600]};

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: ${(props) => props.theme.fontSize.xl};
    margin-bottom: ${(props) => props.theme.spacings[4]};
  }
`;

export const Description = styled.p`
  font-size: ${(props) => props.theme.fontSize.sm};
  line-height: 1.6;
  color: ${(props) => props.theme.colors.gray[600]};

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    text-align: center;
    font-size: ${(props) => props.theme.fontSize.base};
  }
`;

export const QuickLinks = styled.ul`
  list-style: none;
  padding: 0;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    text-align: center;
  }
`;

export const QuickLinkItem = styled.li`
  margin-bottom: ${(props) => props.theme.spacings[2]};
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.black};
    &:hover {
      color: ${(props) => props.theme.colors.primary[600]};
      font-weight: ${(props) => props.theme.fontWeight.medium};
    }
  }
`;

export const ContactInfo = styled.div`
  p {
    margin: ${(props) => props.theme.spacings[2]} 0;
    font-size: ${(props) => props.theme.fontSize.sm};
    color: ${(props) => props.theme.colors.gray[700]};

    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
      text-align: center;
      font-size: ${(props) => props.theme.fontSize.base};
    }
  }
`;

export const MapContainer = styled.div`
  iframe {
    width: 100%;
    height: 200px;
    border-radius: ${(props) => props.theme.spacings[2]};
    border: 0;
  }
`;

export const EmailInputContainer = styled.div`
  display: flex;
  margin-top: ${(props) => props.theme.spacings[5]};

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    flex-direction: row;
    width: 100%;
  }
`;

export const EmailInput = styled.input`
  flex: 1;
  padding-inline: ${(props) => props.theme.spacings[5]};
  padding-block: ${(props) => props.theme.spacings[3]};
  border: 1px solid ${(props) => props.theme.colors.gray[300]};
  border-radius: 25px 0 0 25px;
  outline: none;

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    padding: ${(props) => props.theme.spacings[2]};
    font-size: ${(props) => props.theme.fontSize.sm};
  }
`;

export const SubmitButton = styled.button`
  padding: ${(props) => props.theme.spacings[3]}
    ${(props) => props.theme.spacings[4]};
  border: none;
  background-color: ${(props) => props.theme.colors.primary[600]};
  color: ${(props) => props.theme.colors.white};
  border-radius: 0 25px 25px 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 20px;
    width: 20px;
    min-width: 20px;
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.primary[500]};
  }

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    padding: ${(props) => props.theme.spacings[2]}
      ${(props) => props.theme.spacings[3]};
  }
`;

export const Copyright = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spacings[5]};
  padding-block: ${({ theme }) => theme.spacings[4]};
  padding-inline: ${({ theme }) => theme.spacings[8]};
  box-shadow: ${({ theme }) => theme.shadow.normal};
  border-radius: ${({ theme }) => theme.spacings[2]};
  margin-inline: ${({ theme }) => theme.spacings[4]};

  @media screen and (max-width: 576px) {
    flex-direction: column;
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSize.sm};
    color: ${({ theme }) => theme.colors.primary[600]};
    font-weight: ${(props) => props.theme.fontWeight.medium};
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }

  img {
    height: 40px;
  }
`;

export const SocialMediaIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: ${(props) => props.theme.spacings[4]};
  margin-top: ${(props) => props.theme.spacings[2]};

  a {
    color: ${(props) => props.theme.colors.black};

    img {
      height: 20px;
      width: 20px;
    }

    &:hover {
      color: ${(props) => props.theme.colors.primary[600]};
    }
  }
`;

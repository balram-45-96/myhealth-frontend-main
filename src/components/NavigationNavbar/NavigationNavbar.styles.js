import styled from "styled-components";

export const SCNavbar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: absolute;
  top: ${({ theme }) => theme.spacings[5]};
  z-index: 1001;
`;

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: ${({ theme }) => theme.spacings[4]};
  padding-inline: ${({ theme }) => theme.spacings[8]};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadow.normal};
  border-radius: ${({ theme }) => theme.spacings[2]};
  width: 95%;
  gap: ${({ theme }) => theme.spacings[2]};
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 40px;
  }
`;

export const Menu = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacings[12]};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

export const MenuItem = styled.a`
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.primary[600] : theme.colors.black};
  text-decoration: none;
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primary[600]};
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  &::before {
    width: 10px;
    height: 10px;
    background-color: ${({ theme }) => theme.colors.primary[500]};
    right: -18px;
    top: -15%;
    transform: translateY(-50%);

    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
      top: 10%;
    }
  }

  &::after {
    width: 6px;
    height: 6px;
    background-color: ${({ theme }) => theme.colors.primary[200]};
    right: -23px;
    top: -55%;
    transform: translateY(-50%);

    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
      top: -15%;
    }
  }

  &:hover::before,
  &:hover::after {
    opacity: 1;
    transform: translateX(-5px) translateY(-50%);
  }

  ${({ isActive }) =>
    isActive &&
    `
    &::before,
    &::after {
      opacity: 1;
      transform: translateX(-5px) translateY(-50%);
    }
  `}

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    border-bottom: ${({ isActive, theme }) =>
      isActive ? `1px solid ${theme.colors.primary[600]}` : "none"};
  }
`;

export const BookButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary[500]};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-top-left-radius: ${({ theme }) => theme.spacings[5]};
  border-top-right-radius: ${({ theme }) => theme.spacings[5]};
  border-bottom-left-radius: ${({ theme }) => theme.spacings[5]};
  padding-block: ${({ theme }) => theme.spacings[3]};
  padding-inline: ${({ theme }) => theme.spacings[5]};
  font-size: ${({ theme }) => theme.fontSize.base};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary[600]};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

export const HamburgerMenu = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 5px;
  padding: 10px 6px;
  background-color: ${({ theme }) => theme.colors.primary[300]};
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary[400]};
  }

  span {
    width: 25px;
    height: 1.6px;
    background-color: ${({ theme }) => theme.colors.white};
    transition: background-color 0.3s ease-in-out;
  }

  @media (max-width: 992px) {
    display: flex;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: ${({ open }) => (open ? "0" : "-100%")};
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  transition: left 0.4s ease-in-out;
  z-index: 9999;
  opacity: 0.4;

  @media screen and (min-width: 992px) {
    display: none;
  }
`;

export const MobileNavMenu = styled.div`
  z-index: 9;
  position: fixed;
  top: 0;
  left: ${({ open }) => (open ? "0" : "-100%")};
  height: 100vh;
  overflow-y: auto;
  max-width: 300px;
  min-width: 300px;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  transition: left 0.8s ease-in-out;
  z-index: 9999;
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  gap: 20px;

  &::-webkit-scrollbar {
    width: 0;
  }

  scrollbar-width: none;

  a {
    font-size: 1rem;
    color: #2563eb;
    padding: 15px;
    width: fit-content;
    text-decoration: none;
    transition: color 0.3s ease-in-out;

    &:hover {
      border-bottom: 1px solid ${({ theme }) => theme.colors.primary[600]};
      color: ${({ theme }) => theme.colors.primary[500]};
    }
  }

  @media screen and (min-width: 992px) {
    display: none;
  }
`;

export const MobileNavHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
  width: 100%;
  border-bottom: 1px solid #2563eb;
`;

export const MobileMenus = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-block: ${({ theme }) => theme.spacings[8]};
  gap: ${({ theme }) => theme.spacings[5]};
`;

export const CloseIcon = styled.img`
  cursor: pointer;
  height: 32px;
  width: 32px;
`;

export const MobileBookButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary[500]};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-top-left-radius: ${({ theme }) => theme.spacings[5]};
  border-top-right-radius: ${({ theme }) => theme.spacings[5]};
  border-bottom-left-radius: ${({ theme }) => theme.spacings[5]};
  padding-block: ${({ theme }) => theme.spacings[3]};
  padding-inline: ${({ theme }) => theme.spacings[5]};
  font-size: ${({ theme }) => theme.fontSize.base};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary[600]};
  }
`;

export const FloatingButtonContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  align-items: center;
  z-index: 9999;
`;

export const FloatingButton = styled.button`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: none;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: white;
  padding: 0;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const Tooltip = styled.div`
  position: absolute;
  right: 100%;
  margin-right: 10px;
  background: #2563eb;
  color: white;
  padding: 6px 12px;
  font-size: 14px;
  border-radius: 6px;
  white-space: nowrap;
  opacity: 1;
  transition: opacity 0.3s ease;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 100%;
    transform: translateY(-50%);
    border-width: 6px;
    border-style: solid;
    border-color: transparent transparent transparent #2563eb;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;

  @media screen and (max-width: 992px) {
    display: none;
  }
`;

export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 8px;
`;

export const ProfileName = styled.span`
  font-weight: bold;
  color: #333;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  background: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  width: 150px;
  z-index: 1000;
  padding: 8px 0;
`;

export const DropdownItem = styled.div`
  padding: 10px 15px;
  cursor: pointer;
  color: ${({ theme, isLogOut }) =>
    isLogOut ? theme.colors.primary[500] : "#333"};
  font-weight: 500;
  text-align: ${({ isSideBar }) => (isSideBar ? "center" : "")};
  background: ${({ isActive, theme }) =>
    isActive ? theme.colors.primary[100] : "transparent"};

  &:hover {
    background: #f5f5f5;
  }
`;

export const SideBarList = styled.div`
  margin-top: auto;
`;

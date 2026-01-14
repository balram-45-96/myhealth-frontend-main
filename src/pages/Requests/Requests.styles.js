import styled from "styled-components";

export const SCContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  padding-bottom: ${({ theme }) => theme.spacings[8]};
  width: 95%;
  padding-top: ${({ theme }) => theme.spacings[32]};
  overflow-y: auto;
  height: 100dvh;

  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
`;

export const Tabs = styled.div`
  display: flex;
  justify-content: space-around;
  border-radius: ${({ theme }) => theme.spacings[2]};
  margin-bottom: ${({ theme }) => theme.spacings[8]};
  gap: ${({ theme }) => theme.spacings[8]};
  position: sticky;
  top: 0px;
  z-index: 1000;
`;

export const Tab = styled.button`
  flex: 1;
  padding: ${({ theme }) => theme.spacings[3]};
  border: none;
  background: ${({ theme, $active }) =>
    $active ? theme.colors.primary[500] : theme.colors.gray[200]};
  color: ${({ theme, $active }) =>
    $active ? theme.colors.white : theme.colors.primary[400]};
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: ${({ theme, $active }) =>
    $active ? theme.fontWeight.semibold : theme.fontWeight.medium};
  border-radius: ${({ theme }) => theme.spacings[2]};
  cursor: pointer;
  transition: 0.3s;
  role: tab;
  aria-selected: ${({ $active }) => ($active ? "true" : "false")};

  &:hover {
    background: ${({ theme }) => theme.colors.primary[300]};
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const BookingList = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacings[8]};
  /* grid-template-columns: repeat(1, 1fr);

  @media screen and (min-width: 650px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  } */
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
`;

export const BookingCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadow.md};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings[3]};
`;

export const BookingDetails = styled.div`
  padding-inline: ${({ theme }) => theme.spacings[4]};
  padding-top: ${({ theme }) => theme.spacings[2]};
  flex-grow: 1;
  p {
    margin: ${({ theme }) => theme.spacings[1]} 0;
    font-size: ${({ theme }) => theme.fontSize.sm};
    color: ${({ theme }) => theme.colors.gray[700]};
  }
`;

export const DoctorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacings[4]};
  background: rgba(191, 219, 254, 0.2);
  padding-inline: ${({ theme }) => theme.spacings[4]};
  padding-block: ${({ theme }) => theme.spacings[2]};
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  h4 {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSize.base};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }

  p {
    margin: ${({ theme }) => theme.spacings[1]} 0;
    font-size: ${({ theme }) => theme.fontSize.xs};
    color: ${({ theme }) => theme.colors.gray[500]};
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: #fff;
  padding: 24px;
  border-radius: 16px;
  max-width: 650px;
  width: 90%;
  max-height: 70vh;
  overflow-y: auto;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
  animation: fadeIn 0.3s ease-in-out;

  h2 {
    margin-bottom: 12px;
    font-size: 1.6rem;
    color: #222;
  }

  p {
    margin: 6px 0;
    font-size: 0.95rem;
    color: #444;

    strong {
      color: #111;
    }
  }

  a {
    color: #007bff;
    text-decoration: underline;
    &:hover {
      color: #0056b3;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const CloseButton = styled.button`
  margin-top: 20px;
  padding: 10px 18px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.95rem;
  transition: background 0.2s;

  &:hover {
    background: #0056b3;
  }
`;

export const VerifyButton = styled.button`
  margin-top: ${({ theme }) => theme.spacings[3]};
  padding: ${({ theme }) => `${theme.spacings[2]} ${theme.spacings[4]}`};
  background: #28a745;
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: ${({ theme }) => theme.spacings[2]};
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  transition: background 0.3s ease;

  &:hover {
    background: #218838;
  }

  &:active {
    background: #1e7e34;
  }
`;

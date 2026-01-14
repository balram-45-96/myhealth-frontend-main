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

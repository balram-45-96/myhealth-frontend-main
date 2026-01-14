import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  text-align: center;
  margin-inline: auto;
  width: 95%;
  margin-top: ${({ theme }) => theme.spacings[32]};
  font-family: ${({ theme }) => theme.fontFamily.sans};
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacings[6]};

  h2 {
    font-size: ${({ theme }) => theme.fontSize["3xl"]};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.colors.primary[600]};
  }

  button {
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.primary[500]},
      ${({ theme }) => theme.colors.primary[700]}
    );
    color: ${({ theme }) => theme.colors.white};
    border: none;
    padding: ${({ theme }) => theme.spacings[3]}
      ${({ theme }) => theme.spacings[5]};
    border-radius: ${({ theme }) => theme.spacings[2]};
    cursor: pointer;
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    transition: 0.3s ease;

    &:hover {
      background: ${({ theme }) => theme.colors.primary[600]};
    }
  }
`;

export const Calendar = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: ${({ theme }) => theme.spacings[3]};
  background: ${({ theme }) => theme.colors.gray[100]};
  padding: ${({ theme }) => theme.spacings[5]};
`;

export const DayHeader = styled.div`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  padding: ${({ theme }) => theme.spacings[3]};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary[600]};
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray[400]};
`;

export const Day = styled.div`
  padding: ${({ theme }) => theme.spacings[4]};
  border-radius: ${({ theme }) => theme.spacings[2]};
  background: ${({ theme }) => theme.colors.white};
  border: 2px solid
    ${({ theme, isSelected }) =>
      isSelected ? theme.colors.primary[500] : theme.colors.gray[300]};
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  min-height: 60px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  transition: all 0.2s ease-in-out;
  box-shadow: ${({ theme }) => theme.shadow.sm};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary[500]};
    color: ${({ theme }) => theme.colors.white};
    border: none;
  }
`;

export const Dot = styled.div`
  /* width: 12px;
  height: 12px; */
  /* border-radius: 50%; */
  padding: 4px 6px;
  border: 1px solid
    ${(props) =>
      props.hasSchedule
        ? props.theme.colors.gray[500]
        : props.theme.colors.gray[500]};
  color: ${(props) =>
    props.hasSchedule
      ? props.theme.colors.gray[900]
      : props.theme.colors.gray[400]};
  margin-top: ${({ theme }) => theme.spacings[2]};
  position: relative;

  &:hover::after {
    content: "${(props) =>
      props.hasSchedule ? "Has Schedule" : "No Schedule"}";
    position: absolute;
    top: -25px;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
    padding: ${({ theme }) => theme.spacings[1]}
      ${({ theme }) => theme.spacings[2]};
    border-radius: ${({ theme }) => theme.spacings[1]};
    font-size: ${({ theme }) => theme.fontSize.xs};
    white-space: nowrap;
  }
`;

export const ScheduleList = styled.div`
  margin-top: ${({ theme }) => theme.spacings[6]};
  padding: ${({ theme }) => theme.spacings[4]};
  border-radius: ${({ theme }) => theme.spacings[2]};
  text-align: left;

  h3 {
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    color: ${({ theme }) => theme.colors.primary[700]};
    margin-bottom: ${({ theme }) => theme.spacings[2]};
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.base};
    color: ${({ theme }) => theme.colors.gray[600]};
    padding: ${({ theme }) => theme.spacings[1]} 0;
  }
`;

export const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.primary[700]};
  background-color: ${({ theme }) => theme.colors.primary[100]};
  padding: ${({ theme }) => theme.spacings[3]};
  border-radius: ${({ theme }) => theme.spacings[2]};
  margin: ${({ theme }) => theme.spacings[3]} 0;
  text-align: center;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const Loading = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacings[4]};
  font-size: ${({ theme }) => theme.fontSize.lg};
  color: ${({ theme }) => theme.colors.primary[500]};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: ${fadeIn} 0.3s ease-in-out;
`;

export const ModalContent = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacings[6]};
  width: 350px;
  text-align: center;
  animation: ${fadeIn} 0.3s ease-in-out;

  h2 {
    font-size: ${({ theme }) => theme.fontSize["2xl"]};
    margin-bottom: ${({ theme }) => theme.spacings[6]};
    color: ${({ theme }) => theme.colors.primary[500]};
  }

  input {
    width: 100%;
    padding: ${({ theme }) => theme.spacings[2]};
    margin: ${({ theme }) => theme.spacings[2]} 0;
    border: 1px solid ${({ theme }) => theme.colors.gray[300]};
    border-radius: ${({ theme }) => theme.spacings[2]};
  }

  .form-group {
    display: flex;
    gap: ${({ theme }) => theme.spacings[4]};

    div {
      width: 100%;
      display: flex;
      flex-direction: column;

      label {
        color: ${({ theme }) => theme.colors.gray[700]};
        font-weight: ${({ theme }) => theme.fontWeight.semibold};
      }

      select {
        width: 100%;
        padding: ${({ theme }) => theme.spacings[2]};
        margin-top: 10px;
        border: 1px solid ${({ theme }) => theme.colors.gray[300]};
        border-radius: ${({ theme }) => theme.spacings[2]};
        background-color: ${({ theme }) => theme.colors.white};
        text-align: center;
        appearance: none;
        cursor: pointer;

        option {
          background: ${({ theme }) => theme.colors.white};
          color: ${({ theme }) => theme.colors.gray[700]};
          padding: ${({ theme }) => theme.spacings[2]};
        }
      }

      .custom-select {
        position: relative;
      }
    }
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-top: ${({ theme }) => theme.spacings[6]};
  }

  button {
    background-color: ${({ theme }) => theme.colors.primary[500]};
    color: white;
    border: none;
    cursor: pointer;
    padding: ${({ theme }) => theme.spacings[2]}
      ${({ theme }) => theme.spacings[5]};
    outline: none;
  }
`;

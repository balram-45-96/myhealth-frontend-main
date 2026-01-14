import styled from "styled-components";

export const SCMainContainerBody = styled.div`
  height: 100dvh;
  overflow-x: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const SCContainerBody = styled.div`
  margin-top: ${({ theme }) => theme.spacings[24]};
  position: relative;
`;

export const SCSearchBar = styled.div`
  padding-top: ${({ theme }) => theme.spacings[8]};
  padding-bottom: ${({ theme }) => theme.spacings[4]};
  width: 100%;
  margin-inline: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1240px;
  gap: ${({ theme }) => theme.spacings[4]};
  padding-inline: ${({ theme }) => theme.spacings[4]};
  background-color: ${({ theme }) => theme.colors.white};

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  p {
    width: 100%;
    flex: 1;
    font-size: ${({ theme }) => theme.fontSize.sm};
    color: ${({ theme }) => theme.colors.gray[500]};

    span {
      color: ${({ theme }) => theme.colors.primary[600]};
      font-weight: ${({ theme }) => theme.fontWeight.bold};
      cursor: pointer;
    }
  }

  div {
    display: flex;
    flex: 2;

    @media screen and (max-width: 768px) {
      width: 100%;
      align-items: start;
      flex-direction: column;
      gap: ${({ theme }) => theme.spacings[4]};
    }
  }
`;

export const SCInputWrapper = styled.div`
  position: relative;
  flex: 1;

  input {
    width: 100%;
    padding: ${({ theme }) => theme.spacings[3]};
    padding-left: ${({ theme }) => theme.spacings[8]};
    border: 1px solid ${({ theme }) => theme.colors.gray[300]};

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray[300]};
      font-size: ${({ theme }) => theme.fontSize.sm};
    }

    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.primary[600]};
    }
  }
`;

export const SCFilterInputWrapper = styled.div`
  position: relative;

  input {
    font-size: ${({ theme }) => theme.fontSize.sm};
    background-color: ${({ theme }) => theme.colors.primary[500]};
    color: ${({ theme }) => theme.colors.white};
    width: 100%;
    padding: ${({ theme }) => theme.spacings[1]};
    padding-left: ${({ theme }) => theme.spacings[8]};
    border: none;
    border-radius: ${({ theme }) => theme.spacings[1]};

    &::placeholder {
      color: ${({ theme }) => theme.colors.white};
      font-size: ${({ theme }) => theme.fontSize.sm};
    }

    &:focus {
      outline: none;
    }
  }
`;

export const SCFilterContainer = styled.div`
  position: sticky;
  z-index: 9;
  top: 15%;
  background-color: ${({ theme }) => theme.colors.primary[600]};
  padding: ${({ theme }) => theme.spacings[2]};
`;

export const SCFilterButtons = styled.div`
  display: flex;
  margin-inline: auto;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacings[2]};
  max-width: 1240px;
  padding-inline: ${({ theme }) => theme.spacings[2]};

  @media screen and (min-width: 1440px) {
    padding-inline: ${({ theme }) => theme.spacings[4]};
  }

  button {
    background-color: ${({ theme }) => theme.colors.primary[500]};
    color: ${({ theme }) => theme.colors.white};
    border: none;
    padding: ${({ theme }) => `${theme.spacings[1]} ${theme.spacings[3]}`};
    border-radius: ${({ theme }) => theme.spacings[1]};
    cursor: pointer;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    transition: background-color 0.3s ease;
  }
`;

export const SCFilterOptions = styled.div`
  margin-top: ${({ theme }) => theme.spacings[4]};
  padding-top: ${({ theme }) => theme.spacings[4]};
  color: ${({ theme }) => theme.colors.white};
  padding-inline: ${({ theme }) => theme.spacings[4]};
  gap: ${({ theme }) => theme.spacings[8]};
  animation: slideDown 0.3s ease-out;
  display: flex;
  max-width: 1240px;
  justify-content: start;
  align-items: start;
  margin-inline: auto;
  border-top: 0.4px solid ${({ theme }) => theme.colors.gray[400]};

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .filter-section {
    margin-bottom: ${({ theme }) => theme.spacings[2]};

    h4 {
      margin-bottom: ${({ theme }) => theme.spacings[2]};
      color: ${({ theme }) => theme.colors.white};
      font-size: ${({ theme }) => theme.fontSize.sm};
      font-weight: ${({ theme }) => theme.fontWeight.medium};
    }

    ul {
      list-style: none;
      padding: 0;

      li {
        margin-bottom: ${({ theme }) => theme.spacings[2]};
        font-size: ${({ theme }) => theme.fontSize.sm};
        display: flex;
        align-items: center;

        input[type="radio"] {
          appearance: none;
          width: 14px;
          height: 14px;
          border: 2px solid ${({ theme }) => theme.colors.white};
          border-radius: 50%;
          display: inline-block;
          position: relative;
          margin-right: ${({ theme }) => theme.spacings[2]};

          &:checked {
            background-color: ${({ theme }) => theme.colors.primary[500]};
          }

          &:checked::after {
            content: "";
            position: absolute;
            width: 8px;
            height: 8px;
            background-color: ${({ theme }) => theme.colors.white};
            border-radius: 50%;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        }
      }
    }
  }
`;

export const DropdownButtonWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacings[2]};

  div {
    font-size: ${({ theme }) => theme.fontSize.sm};
    color: ${({ theme }) => theme.colors.white};
  }

  button {
    font-size: ${({ theme }) => theme.fontSize.sm};
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacings[16]};
  }

  span {
    cursor: pointer;
    font-size: ${({ theme }) => theme.fontSize.sm};
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.white};
    gap: ${({ theme }) => theme.spacings[2]};
    margin-right: ${({ theme }) => theme.spacings[12]};
  }
  /* &:last-child {
    margin-left: ${({ theme }) => theme.spacings[16]};
  } */
`;

export const SCDropdownMenu = styled.div`
  position: absolute;
  top: 115%;
  left: 0;
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  width: 100%;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      color: ${({ theme }) => theme.colors.gray[800]};
      padding: ${({ theme }) => theme.spacings[2]};
      cursor: pointer;
      font-size: 13px;
      border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};
      &:hover {
        background-color: ${({ theme }) => theme.colors.gray[100]};
      }
    }
  }
`;

export const ArrowIcon = styled.img`
  display: inline-block;
  transition: transform 0.3s ease;
  transform: ${({ open }) => (open ? "rotate(180deg)" : "rotate(0)")};
  height: 16px;
  width: 16px;
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 20px;
    height: 20px;
  }
`;

export const DoctorDetailsCOntainer = styled.div`
  margin: ${({ theme }) => theme.spacings[4]};
  max-width: 1240px;
  margin-inline: auto;
  transition: opacity 0.3s ease-in-out, transform 0.2s ease-in-out;
  opacity: ${({ active }) => (active ? 1 : 0)};
  transform: ${({ active }) =>
    active ? "translateY(0)" : "translateY(-20px)"};
  will-change: transform, opacity;
`;

export const SpecialistScrollContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: ${({ theme }) => theme.spacings[8]};

  .specialist-list {
    width: 100%;
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    gap: ${({ theme }) => theme.spacings[4]};
    padding: ${({ theme }) => theme.spacings[2]} 0;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const SpecialistItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 120px;
  text-align: center;
  cursor: pointer;
  padding-inline: ${({ theme }) => theme.spacings[3]};
  padding-block: ${({ theme }) => theme.spacings[1]};
  border: ${({ theme, selected }) =>
    selected ? `1px solid ${theme.colors.primary[500]}` : "none"};
  gap: ${({ theme }) => theme.spacings[5]};
  border-radius: 10px;
  img {
    /* width: 50px; */
    height: 50px;
    padding: ${({ small }) => (small ? "5px" : "0px")};
    object-fit: contain;
    margin-bottom: ${({ theme }) => theme.spacings[2]};
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.sm};
    color: ${({ theme }) => theme.colors.gray[700]};
    word-wrap: break-word;
    overflow-wrap: break-word;
  }
`;

export const ScrollButton = styled.button`
  background-color: ${({ theme }) => theme.colors.white};
  border: none;
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 40px;
    height: 40px;

    @media screen and (min-width: 576px) {
      width: 25px;
      height: 25px;
    }
  }
`;

export const City = styled.h3`
  font-size: ${(props) => props.theme.fontSize.base};
  color: ${(props) => props.theme.colors.gray[900]};
  padding-left: ${({ theme }) => theme.spacings[3]};
  font-weight: ${(props) => props.theme.fontWeight.medium};
  margin-bottom: ${({ theme }) => theme.spacings[3]};
  margin-top: ${({ theme }) => theme.spacings[8]};
`;

export const FindDoctorContainer = styled.div`
  margin: 1rem;
  max-width: 1240px;
  margin-inline: auto;
`;

export const NoData = styled.h3`
  font-size: ${(props) => props.theme.fontSize.base};
  color: ${(props) => props.theme.colors.gray[900]};
  text-align: center;
  font-weight: ${(props) => props.theme.fontWeight.medium};
  margin-bottom: ${({ theme }) => theme.spacings[3]};
  margin-top: ${({ theme }) => theme.spacings[8]};
`;

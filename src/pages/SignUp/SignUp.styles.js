import styled from "styled-components";
import {
  SCContainerBody as BaseSCContainerBody,
  SCContactGrid as BaseSCContactGrid,
  SCContactItem as BaseSCContactItem,
  SCText as BaseSCText,
  SCTitle as BaseSCTitle,
  SCForm as BaseSCForm,
  SCInput as BaseSCInput,
  SCButton as BaseSCButton,
  ContactForm as BaseContactForm,
} from "../ContactUs/ContactUs.styles";

export const SCContainerBody = styled(BaseSCContainerBody)`
  padding-top: 0px !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: center;
  overflow-y: auto;
`;

export const SCContactGrid = styled(BaseSCContactGrid)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  text-align: center;
  margin-bottom: 20px;
`;

export const SCContactItem = styled(BaseSCContactItem)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 10px;
`;

export const SCText = styled(BaseSCText)`
  font-size: 16px;
  color: #6c757d;
`;

export const SCTitle = styled(BaseSCTitle)`
  font-size: 28px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary[500]};
  margin-bottom: 20px;
  text-align: center;

  @media screen and (max-height: 770px) {
    margin-top: 250px !important;
  }

  @media screen and (max-width: 576px) {
    margin-top: 775px !important;
  }
`;

export const SCForm = styled(BaseSCForm)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  width: 100%;
  max-width: 800px;
  margin-bottom: 0px !important;

  @media screen and (max-width: 576px) {
    display: flex;
  }
`;

export const SCDropdownContainer = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
`;

export const SCDropdownSelect = styled.select`
  height: 45.6px;
  padding: 13px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid #ced4da;
  background: white;
  appearance: none;
  cursor: pointer;
  outline: none;
  position: relative;
  width: 30%;
  width: ${({ isFullWidth }) => (isFullWidth ? "100%" : "30%")};
  text-align: ${({ isFullWidth }) => (isFullWidth ? "left" : "center")};
  margin-bottom: 20px;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary[500]};
  }
`;

export const SCInput = styled(BaseSCInput)`
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid #ced4da;
  &:focus {
    border-color: ${({ theme }) => theme.colors.primary[500]};
  }
`;

export const SCPhoneInput = styled(SCInput)`
  width: 70%;
`;

export const SCTextArea = styled.textarea`
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid #ced4da;
  resize: vertical;
  min-height: 100px;
  grid-column: span 2;
  width: 100%;
  &:focus {
    border-color: ${({ theme }) => theme.colors.primary[500]};
  }
`;

export const SCButton = styled(BaseSCButton)`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease;
  grid-column: span 2;

  &:hover {
    opacity: 0.9;
  }
`;

export const ContactForm = styled(BaseContactForm)`
  background: white;
  padding: 30px;
  width: 100%;
  max-width: 820px;
  text-align: center;
`;

export const SCPhoneInputWrapper = styled.div`
  .react-tel-input {
    width: 100%;

    .form-control {
      padding-left: 35px;
      height: 45.6px;
      border-radius: 8px;
      border: 1px solid #ced4da;
      font-size: 16px;
      &:focus {
        border-color: ${({ theme }) => theme.colors.primary[500]};
        box-shadow: none;
      }
    }

    .flag-dropdown {
      height: 45.6px;
      border-radius: 8px 0 0 8px;
      border: 1px solid #ced4da;
    }
  }
`;

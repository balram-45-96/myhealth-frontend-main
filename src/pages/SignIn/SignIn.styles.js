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
  padding-top: 0 !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f7f8fa;
  height: 100vh;
  justify-content: center;
`;

export const SCContactGrid = styled(BaseSCContactGrid)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  text-align: center;
  margin-bottom: 40px;
  max-width: 600px;
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
`;

export const SCForm = styled(BaseSCForm)`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 550px;
  gap: 15px;
  margin-bottom: 0px !important;
`;

export const SCDropdownContainer = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
`;

export const SCDropdownSelect = styled.select`
  text-align: center;
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

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary[500]};
  }
`;

export const SCInput = styled(BaseSCInput)`
  padding: 10px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid #ced4da;
  &:focus {
    border-color: ${({ theme }) => theme.colors.primary[500]};
  }
`;

export const SCButton = styled.button`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease;
  background: ${({ theme, isSecondary }) =>
    isSecondary ? "white" : theme.colors.primary[500]};
  border: ${({ theme, isSecondary }) => (isSecondary ? "1px solid" : "")};
  border-color: ${({ theme }) => theme.colors.primary[500]};
  color: ${({ theme, isSecondary }) =>
    isSecondary ? theme.colors.primary[500] : "white"};

  &:hover {
    opacity: 0.9;
  }
`;

export const ContactForm = styled(BaseContactForm)`
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
  text-align: center;
`;

export const SCPhoneInputWrapper = styled.div`
  .react-tel-input {
    width: 110%;

    .form-control {
      padding-left: 50px;
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

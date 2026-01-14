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
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f7f8fa;
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
  max-width: 1000px;
  gap: 15px;
  padding: 30px;
  border-radius: 12px;
`;

export const SCFormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const SCFormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  label {
    margin-bottom: 5px;
    color: ${({ theme }) => theme.colors.primary[500]};
    font-weight: 500;
  }
`;

export const SCInput = styled(BaseSCInput)`
  padding: 12px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid #ced4da;
  &:focus {
    border-color: ${({ theme }) => theme.colors.primary[500]};
  }
`;

export const SCTextArea = styled.textarea`
  padding: 12px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid #ced4da;
  min-height: 200px;
  resize: none;
  width: 100%;
  outline: none;

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
  margin-top: 10px;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.5;
  }
`;

export const ContactForm = styled(BaseContactForm)`
  width: 100%;
  max-width: 1000px;
`;

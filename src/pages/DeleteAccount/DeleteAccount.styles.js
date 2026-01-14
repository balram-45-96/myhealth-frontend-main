import styled from "styled-components";
import {
  SCContainerBody as BaseSCContainerBody,
  SCContactGrid as BaseSCContactGrid,
  SCContactItem as BaseSCContactItem,
  SCIcon as BaseSCIcon,
  SCText as BaseSCText,
  SCTitle as BaseSCTitle,
  SCForm as BaseSCForm,
  SCInput as BaseSCInput,
  SCTextArea as BaseSCTextArea,
  SCButton as BaseSCButton,
  ContactForm as BaseContactForm,
  ContactFormTitle as BaseContactFormTitle,
} from "../ContactUs/ContactUs.styles";

export const SCContainerBody = styled.div`
  padding-top: ${({ theme }) => theme.spacings[32]};
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f7f8fa;
`;

export const SCContactGrid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  text-align: justify;
  margin-bottom: 80px;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 40px;
    max-width: 90%;
  }
`;
export const SCContactItem = styled(BaseSCContactItem)``;
export const SCIcon = styled(BaseSCIcon)``;
export const SCText = styled(BaseSCText)``;
export const SCTitle = styled.h2`
  font-size: 32px;
  color: ${({ theme }) => theme.colors.primary[500]};
  margin-bottom: 24px;
  @media screen and (max-width: 768px) {
    font-size: 28px !important;
  }
`;
export const SCForm = styled(BaseSCForm)``;
export const SCInput = styled(BaseSCInput)``;
export const SCTextArea = styled(BaseSCTextArea)``;
export const SCButton = styled(BaseSCButton)``;
export const ContactForm = styled(BaseContactForm)``;
export const ContactFormTitle = styled(BaseContactFormTitle)``;
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  color: white;
  font-size: 1.5rem;
`;
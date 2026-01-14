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
  padding-top: ${({ theme }) => theme.spacings[32]};
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f7f8fa;
  @media screen and (max-width: 576px) {
    padding: 20px;
  }
`;

export const SCContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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

export const SCContactItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  @media screen and (max-width: 768px) {
    margin-bottom: ${({ website }) => (website ? "60px !important" : "")};
  }
`;

export const SCIcon = styled.img`
  background-color: ${({ theme }) => theme.colors.primary[500]};
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
  color: white;
  padding: 10px;
`;

export const SCText = styled.p`
  font-size: 16px;
  text-align: center;
  margin: 0;
  overflow-wrap: anywhere;
  color: ${({ theme }) => theme.colors.gray[500]};
`;

export const SCTitle = styled.h2`
  font-size: 32px;
  color: ${({ theme }) => theme.colors.primary[500]};

  @media screen and (max-width: 768px) {
    font-size: 28px !important;
  }
`;

export const SCForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  margin-bottom: 40px;
`;

export const SCInput = styled.input`
  width: 100%;
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  &:focus {
    border-color: ${({ theme }) => theme.colors.primary[500]};
    outline: none;
  }
`;

export const SCTextArea = styled.textarea`
  max-width: 100%;
  min-width: 100%;
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  height: 100px;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary[500]};
    outline: none;
  }
`;

export const SCButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary[500]};
  color: #fff;
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary[500]};
  }
`;

export const ContactForm = styled.div`
  display: flex;
  width: 85%;
  gap: 40px;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 40px;
    max-width: 90%;
  }
`;

export const ContactFormTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 20px;
`;

export const QuoteText = styled.div`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.primary[500]};
  line-height: 1.6;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  text-align: center;
  padding-bottom: ${({ theme }) => theme.spacings[16]};
  padding-inline: ${({ theme }) => theme.spacings[16]};

  @media screen and (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.xl};
    padding-inline: ${({ theme }) => theme.spacings[12]};
  }

  @media screen and (max-width: 576px) {
    font-size: ${({ theme }) => theme.fontSize.lg};
    padding-inline: ${({ theme }) => theme.spacings[8]};
  }
`;

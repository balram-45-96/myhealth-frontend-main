import styled from "styled-components";

export const DoctorCard = styled.div`
  display: flex;
  padding: ${(props) => props.theme.spacings[4]};
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: ${(props) => props.theme.shadow.normal};
  border-radius: 8px;
  margin-bottom: ${(props) => props.theme.spacings[4]};
  align-items: center;
  flex-wrap: wrap;
  gap: ${(props) => props.theme.spacings[4]};
`;

export const DoctorData = styled.div`
  display: flex;
  flex-grow: 1;
  width: auto;
`;

export const Buttons = styled.div`
  display: flex;
  margin-left: auto;
`;

export const DoctorImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: ${(props) => props.theme.spacings[4]};
`;

export const DoctorDetails = styled.div`
  flex: 1;
`;

export const DoctorName = styled.h3`
  font-size: ${(props) => props.theme.fontSize.lg};
  color: ${(props) => props.theme.colors.primary[500]};
  margin: 0;
  font-weight: ${(props) => props.theme.fontWeight.semibold};
`;

export const DoctorSpecialty = styled.p`
  font-size: ${(props) => props.theme.fontSize.sm};
  color: ${(props) => props.theme.colors.gray[600]};
  margin: 0;
`;

export const Experience = styled.p`
  font-size: ${(props) => props.theme.fontSize.sm};
  color: ${(props) => props.theme.colors.gray[500]};
  margin: ${(props) => props.theme.spacings[2]} 0;
`;

export const Location = styled.p`
  font-size: ${(props) => props.theme.fontSize.sm};
  color: ${(props) => props.theme.colors.gray[700]};
  margin: ${(props) => props.theme.spacings[2]} 0;
`;

export const Fee = styled.p`
  font-size: ${(props) => props.theme.fontSize.sm};
  color: ${(props) => props.theme.colors.primary[500]};
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary[500]};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-top-left-radius: ${({ theme }) => theme.spacings[5]};
  border-top-right-radius: ${({ theme }) => theme.spacings[5]};
  border-bottom-left-radius: ${({ theme }) => theme.spacings[5]};
  padding-block: ${({ theme }) => theme.spacings[3]};
  padding-inline: ${({ theme }) => theme.spacings[5]};
  margin-inline: ${({ theme }) => theme.spacings[2]};
  font-size: ${({ theme }) => theme.fontSize.base};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary[600]};
  }
`;

export const HospitalData = styled.p`
  display: flex;
  gap: 5px;
  align-items: center;

  img {
    height: 20px;
    width: 20px;
  }
`;

export const HospitalName = styled.p`
  font-size: ${(props) => props.theme.fontSize.sm};
  color: ${(props) => props.theme.colors.gray[700]};
  margin: ${(props) => props.theme.spacings[2]} 0;
  gap: 5px;
`;

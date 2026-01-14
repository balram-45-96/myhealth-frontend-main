import styled from "styled-components";
import { FiUploadCloud } from "react-icons/fi";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  background: #f8f9fa;
  padding: 2rem;
  overflow: auto;
`;

export const Card = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  max-width: 500px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-sizing: border-box;
`;

export const Title = styled.h2`
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #222;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const InputLabel = styled.label`
  font-weight: 600;
  font-size: 1rem;
  color: #222;
`;

export const HiddenFileInput = styled.input`
  display: none;
`;

export const FileUploadBox = styled.label`
  border: 2px dashed #007bff;
  padding: 1.5rem;
  border-radius: 12px;
  text-align: center;
  color: #007bff;
  font-weight: 500;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s ease;
  background: #f8fbff;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;

  &:hover {
    background: #e8f3ff;
  }
`;

export const UploadIcon = styled(FiUploadCloud)`
  font-size: 2rem;
  color: #007bff;
`;

export const FileName = styled.span`
  font-size: 0.9rem;
  color: #333;
  margin-top: 0.3rem;
`;

export const Button = styled.button`
  background: ${(props) => (props.disabled ? "#ccc" : "#007bff")};
  color: white;
  padding: 0.8rem;
  font-size: 1rem;
  border: none;
  border-radius: 12px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) => (props.disabled ? "#ccc" : "#0056b3")};
  }
`;

// New styles for checkbox
export const CheckboxContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  margin: 16px 0;
`;

export const Checkbox = styled.input`
  margin-top: 4px;
  width: 18px;
  height: 18px;
  accent-color: #007bff;
  cursor: pointer;
`;

export const CheckboxLabel = styled.label`
  font-size: 0.9rem;
  color: #555;
  cursor: pointer;
`;

import React, { useState } from "react";
import axiosInstance from "@utils/axios";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { apis } from "@utils/api";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  Container,
  Form,
  InputGroup,
  Title,
  FileUploadBox,
  HiddenFileInput,
  UploadIcon,
  FileName,
  InputLabel,
  CheckboxContainer,
  Checkbox,
  CheckboxLabel,
} from "./UploadDocuments.styles";

function UploadDocuments() {
  const navigate = useNavigate();

  const token = useSelector((state) => state.auth.token);
  const doctor = useSelector((state) => state.auth.user);

  const [qualificationCertificate, setQualificationCertificate] =
    useState(null);
  const [license, setLicense] = useState(null);
  const [loading, setLoading] = useState(false);
  const [agree, setAgree] = useState(false); // State for checkbox

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!qualificationCertificate || !license) {
      Swal.fire({
        icon: "warning",
        title: "Missing Files",
        text: "Please upload both documents.",
      });
      return;
    }
    if (!agree) {
      Swal.fire({
        icon: "warning",
        title: "Please Confirm",
        text: "You must agree to the disclaimer before uploading.",
      });
      return;
    }

    const formData = new FormData();
    formData.append("qualificationCertificate", qualificationCertificate);
    formData.append("license", license);

    setLoading(true);
    try {
      await axiosInstance.post(
        `${apis.uploadDoc}?doctorId=${doctor.id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      Swal.fire({
        icon: "success",
        title: "Documents Uploaded",
        text: "Your documents have been submitted successfully!",
      });
      navigate("/underVerification");
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Upload Failed",
        text: err.response?.data?.message || err.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Card>
        <Title>Upload Your Documents</Title>
        <Form onSubmit={handleUpload}>
          <InputGroup>
            <InputLabel>Qualification Certificate</InputLabel>
            <FileUploadBox>
              <UploadIcon />
              <span>Click to upload your certificate</span>
              <HiddenFileInput
                type="file"
                accept="image/*,.pdf"
                onChange={(e) => setQualificationCertificate(e.target.files[0])}
              />
              {qualificationCertificate && (
                <FileName>{qualificationCertificate.name}</FileName>
              )}
            </FileUploadBox>
          </InputGroup>

          <InputGroup>
            <InputLabel>License</InputLabel>
            <FileUploadBox>
              <UploadIcon />
              <span>Click to upload your license</span>
              <HiddenFileInput
                type="file"
                accept="image/*,.pdf"
                onChange={(e) => setLicense(e.target.files[0])}
              />
              {license && <FileName>{license.name}</FileName>}
            </FileUploadBox>
          </InputGroup>

          <CheckboxContainer>
            <Checkbox
              type="checkbox"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
              id="agreeCheckbox"
            />
            <CheckboxLabel htmlFor="agreeCheckbox">
              I confirm that all the information and documents submitted by me
              are true to my knowledge.
            </CheckboxLabel>
          </CheckboxContainer>

          <Button
            type="submit"
            disabled={
              loading || !qualificationCertificate || !license || !agree
            }
          >
            {loading ? "Uploading..." : "Upload"}
          </Button>
        </Form>
      </Card>
    </Container>
  );
}

export default UploadDocuments;

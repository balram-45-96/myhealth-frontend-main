import React, { useState } from "react";
import Swal from "sweetalert2";
import {
  SCContainerBody,
  SCContactGrid,
  SCContactItem,
  SCText,
  SCTitle,
  SCForm,
  SCInput,
  SCButton,
  ContactForm,
  SCDropdownContainer,
  SCPhoneInputWrapper,
} from "./SignIn.styles";
import { useDispatch } from "react-redux";
import { setAuthenticatedUser, setAuthToken } from "@store/slices/authSlice";
import { apis } from "@utils/api";
import axiosInstance from "@utils/axios";
import Loader from "@components/UI/Loader/Loader";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    countryCode: "+91",
    phone: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    if (!formData.phone || !formData.password) {
      Swal.fire({
        icon: "warning",
        title: "Incomplete Form",
        text: "Please enter your phone number and password.",
      });
      return false;
    }

    const phoneRegex = /^\d{6,14}$/;
    if (!phoneRegex.test(formData.phone)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Phone Number",
        text: "Phone number must be between 6 to 14 digits.",
      });
      return false;
    }

    return true;
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      const response = await axiosInstance.post(apis.signin, {
        phone: formData.phone,
        countryCode: formData.countryCode,
        password: formData.password,
        role: "doctor",
      });

      if (response.status === 200) {
        const { token, user } = response.data;

        dispatch(setAuthToken(token));
        dispatch(setAuthenticatedUser(user));

        Swal.fire({
          icon: "success",
          title: "Sign In Successful",
          text: `Welcome back, ${user.firstName}!`,
        });

        if (response.data.user.documents.isDocumentsVerified) {
          navigate("/schedules");
          return;
        } else if (
          response.data.user.documents.qualificationCertificate == null &&
          response.data.user.documents.license == null
        ) {
          navigate("/upload-documents");
        } else {
          navigate("/underVerification");
        }
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Error Occurred",
        text: err.response?.data?.message || err.message,
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div
        style={{
          height: "100dvh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Loader message="Signing you in..." />
      </div>
    );
  }

  return (
    <SCContainerBody>
      <SCTitle>Sign In</SCTitle>
      <SCContactGrid>
        <SCContactItem>
          <SCText>Enter your credentials to access your account.</SCText>
        </SCContactItem>
      </SCContactGrid>

      <ContactForm>
        <SCForm onSubmit={handleSignIn}>
          <SCDropdownContainer>
            <SCPhoneInputWrapper>
              <PhoneInput
                country={"in"}
                value={`${formData.countryCode}`}
                onChange={(value, country) => {
                  setFormData({
                    ...formData,
                    countryCode: `+${country.dialCode}`,
                  });
                }}
                inputStyle={{
                  width: "75%",
                  height: "45.6px",
                  borderRadius: "8px",
                  border: "1px solid #ced4da",
                  fontSize: "16px",
                }}
                buttonStyle={{
                  border: "1px solid #ced4da",
                  borderRadius: "8px 0 0 8px",
                }}
                dropdownStyle={{
                  maxWidth: "200px",
                  maxHeight: "200px",
                  overflowY: "auto",
                }}
              />
            </SCPhoneInputWrapper>

            <SCInput
              type="number"
              name="phone"
              placeholder="Your phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </SCDropdownContainer>
          <SCInput
            type="password"
            name="password"
            placeholder="Your password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <SCButton type="submit">Sign In</SCButton>
          <SCButton
            isSecondary={true}
            onClick={() => {
              navigate("/signup");
            }}
          >
            Dear doctor still not registered? Please click here
          </SCButton>
        </SCForm>
      </ContactForm>
    </SCContainerBody>
  );
};

export default SignIn;

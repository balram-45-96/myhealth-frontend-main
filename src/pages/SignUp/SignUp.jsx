import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axiosInstance from "@utils/axios";
import { apis } from "@utils/api";
import Loader from "@components/UI/Loader/Loader";
import { setAuthenticatedUser, setAuthToken } from "@store/slices/authSlice";
import {
  SCContainerBody,
  SCContactGrid,
  SCContactItem,
  SCText,
  SCTitle,
  SCForm,
  SCInput,
  SCButton,
  SCTextArea,
  ContactForm,
  SCDropdownContainer,
  SCDropdownSelect,
  SCPhoneInputWrapper
} from "./SignUp.styles";
import { generatePasswordFromUser } from "../../utils/const";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const COUNTRY_CODES = [
  { code: "+1", label: "US" },
  { code: "+44", label: "UK" },
  { code: "+91", label: "India" },
  { code: "+61", label: "Australia" },
  { code: "+33", label: "France" },
];

const GENDER_OPTIONS = ["Male", "Female", "Other"];

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "+91",
    phone: "",
    // password: "",
    specialization: "",
    qualifications: "",
    experienceYears: "",
    consultationFee: "",
    bio: "",
    age: "",
    gender: "",
    clinicName: "",
    clinicAddress: "",
    addressLink: "",
    role: "doctor",
  });

  const [specializations, setSpecializations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // OTP Step states
  const [isOtpStep, setIsOtpStep] = useState(false);
  const [otp, setOtp] = useState("");

  useEffect(() => {
    const fetchSpecializations = async () => {
      try {
        const response = await axiosInstance.get(apis.specialisations);
        setSpecializations(response.data.specialisations);
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Failed to load specializations",
          text: error.response?.data?.message || error.message,
        });
      }
    };
    fetchSpecializations();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone ||
      // !formData.password ||
      !formData.specialization ||
      !formData.qualifications ||
      !formData.experienceYears ||
      !formData.consultationFee ||
      !formData.bio ||
      !formData.age ||
      !formData.gender ||
      !formData.clinicName ||
      !formData.clinicAddress ||
      !formData.addressLink
    ) {
      Swal.fire({
        icon: "warning",
        title: "Incomplete Form",
        text: "Please fill in all fields.",
      });
      return false;
    }

    if (parseInt(formData.age, 10) < 18) {
      Swal.fire({
        icon: "error",
        title: "Invalid Age",
        text: "Age must be 18 or above.",
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

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      const payload = {
        ...formData,
        password: generatePasswordFromUser(formData),
        age: Number(formData.age),
        experienceYears: Number(formData.experienceYears),
        consultationFee: Number(formData.consultationFee),
      };

      const response = await axiosInstance.post(apis.signup, payload);
      if (response.status === 200) {
        Swal.fire({
          icon: "info",
          title: "OTP Sent",
          text: "Please check your phone for the OTP.",
        });
        setIsOtpStep(true);
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

  const handleOtpVerify = async (e) => {
    e.preventDefault();
    if (!otp) {
      Swal.fire({
        icon: "warning",
        title: "OTP Required",
        text: "Please enter the OTP sent to your phone.",
      });
      return;
    }

    setIsLoading(true);
    try {
      const payload = {
        phone: formData.phone,
        countryCode: formData.countryCode,
        otp,
        role: "doctor",
      };
      const response = await axiosInstance.post(apis.otp, payload);

      if (response.status === 200) {
        const { token, user } = response.data;
        dispatch(setAuthToken(token));
        dispatch(setAuthenticatedUser(user));

        Swal.fire({
          icon: "success",
          title: "Registration Complete",
          text: "Your account will br verifyed by admin. please upload your documents.",
        });
        navigate("/upload-documents");
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "OTP Verification Failed",
        text: err.response?.data?.message || err.message,
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div style={{ height: "100dvh" }}>
        <Loader message="Processing..." />
      </div>
    );
  }

  return (
    <SCContainerBody $isOtpStep={isOtpStep}>
      <SCTitle>{isOtpStep ? "Verify OTP" : "Sign Up"}</SCTitle>
      <SCContactGrid>
        <SCContactItem>
          <SCText>
            {isOtpStep
              ? "Enter the OTP sent to your phone."
              : "Register as a doctor by filling the form below."}
          </SCText>
        </SCContactItem>
      </SCContactGrid>

      <ContactForm>
        {!isOtpStep ? (
          <SCForm onSubmit={handleSignUp}>
            <SCInput
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <SCInput
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <SCInput
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <SCDropdownContainer>
              {/* <SCDropdownSelect
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
              >
                {COUNTRY_CODES.map((item) => (
                  <option key={item.code} value={item.code}>
                    {item.code}
                  </option>
                ))}
              </SCDropdownSelect> */}
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
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </SCDropdownContainer>
            {/* <SCInput
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            /> */}
            <SCDropdownSelect
              name="specialization"
              value={formData.specialization}
              onChange={handleChange}
              required
              isFullWidth={true}
            >
              <option value="">Select Specialization</option>
              {specializations.map((item) => (
                <option key={item._id} value={item._id}>
                  {item.specialisation}
                </option>
              ))}
            </SCDropdownSelect>
            <SCInput
              type="text"
              name="qualifications"
              placeholder="Qualifications"
              value={formData.qualifications}
              onChange={handleChange}
              required
            />
            <SCInput
              type="number"
              name="experienceYears"
              placeholder="Years of Experience"
              value={formData.experienceYears}
              onChange={handleChange}
              required
            />
            <SCInput
              type="number"
              name="consultationFee"
              placeholder="Consultation Fee"
              value={formData.consultationFee}
              onChange={handleChange}
              required
            />
            <SCInput
              type="number"
              name="age"
              placeholder="Age"
              value={formData.age}
              onChange={handleChange}
              required
            />
            <SCDropdownSelect
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              isFullWidth={true}
            >
              <option value="">Select Gender</option>
              {GENDER_OPTIONS.map((g) => (
                <option key={g} value={g}>
                  {g}
                </option>
              ))}
            </SCDropdownSelect>
            <SCInput
              type="text"
              name="clinicName"
              placeholder="Clinic Name"
              value={formData.clinicName}
              onChange={handleChange}
              required
            />
            <SCInput
              type="text"
              name="clinicAddress"
              placeholder="Clinic Address"
              value={formData.clinicAddress}
              onChange={handleChange}
              required
            />
            <SCInput
              type="url"
              name="addressLink"
              placeholder="Google Maps Link"
              value={formData.addressLink}
              onChange={handleChange}
              required
            />
            <SCTextArea
              name="bio"
              placeholder="Write a short bio about yourself"
              value={formData.bio}
              onChange={handleChange}
              required
            />
            <SCButton type="submit">Sign Up</SCButton>
          </SCForm>
        ) : (
          <SCForm onSubmit={handleOtpVerify}>
            <SCInput
              type="text"
              name="otp"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
              style={{ gridColumn: "span 2" }}
            />
            <SCButton type="submit">Verify OTP</SCButton>
          </SCForm>
        )}
      </ContactForm>
    </SCContainerBody>
  );
};

export default SignUp;

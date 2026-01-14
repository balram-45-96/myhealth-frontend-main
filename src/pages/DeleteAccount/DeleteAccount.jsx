import React, { useState } from "react";
import Swal from "sweetalert2";
import {
  SCContainerBody,
  SCContactGrid,
  SCContactItem,
  SCIcon,
  SCText,
  SCTitle,
  SCForm,
  SCInput,
  SCButton,
  ContactForm,
  ContactFormTitle,
} from "./DeleteAccount.styles";
import Warning from "@assets/icons/icon-warning.svg";
import { apis } from "@utils/api";
import axiosInstance from "@utils/axios";
import Loader from "@components/UI/Loader/Loader";

const DeleteAccount = () => {
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
    if (!formData.countryCode || !formData.phone || !formData.password) {
      Swal.fire({
        icon: "warning",
        title: "Incomplete Form",
        text: "Please fill in all required fields.",
      });
      return false;
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Phone Number",
        text: "Phone number must be exactly 10 digits.",
      });
      return false;
    }

    if (formData.password.length < 6) {
      Swal.fire({
        icon: "error",
        title: "Weak Password",
        text: "Password must be at least 6 characters long.",
      });
      return false;
    }

    return true;
  };

  const handleDelete = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await axiosInstance.delete(apis.delete, {
        data: {
          countryCode: formData.countryCode,
          phone: formData.phone,
          password: formData.password,
        },
      });

      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Account Deleted",
          text: "Your account has been successfully deleted.",
        });

        setFormData({
          countryCode: "+91",
          phone: "",
          password: "",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Deletion Failed",
          text: response.data.message || "Failed to delete account.",
        });
      }
    } catch (err) {
      console.error(err);
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
    return <Loader message="Processing your request..." />;
  }

  return (
    <SCContainerBody>
      <SCTitle>Delete Account</SCTitle>
      <SCContactGrid>
        <SCContactItem>
          <SCIcon src={Warning} alt="Warning" />
          <SCText>
            Deleting your account is permanent and will erase all your data from
            our systems. This action cannot be undone.
          </SCText>
        </SCContactItem>
      </SCContactGrid>

      <ContactForm>
        <ContactFormTitle>
          <SCTitle style={{ width: "90%" }}>We're Sorry to See You Go</SCTitle>
          <p>
            Please fill out the form below to confirm your account deletion. If
            there's anything we can do to improve your experience, let us know!
          </p>
        </ContactFormTitle>
        <SCForm onSubmit={handleDelete}>
          <SCInput
            type="text"
            name="countryCode"
            placeholder="Country Code (e.g., +91)"
            value={formData.countryCode}
            onChange={handleChange}
            required
          />
          <SCInput
            type="number"
            name="phone"
            placeholder="Your phone number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <SCInput
            type="password"
            name="password"
            placeholder="Your password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <SCButton type="submit">Delete My Account</SCButton>
        </SCForm>
      </ContactForm>
    </SCContainerBody>
  );
};

export default DeleteAccount;

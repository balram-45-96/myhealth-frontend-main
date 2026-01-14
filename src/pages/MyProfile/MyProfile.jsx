import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import axiosInstance from "@utils/axios";
import {
  SCContainerBody,
  SCContactGrid,
  SCContactItem,
  SCText,
  SCTitle,
  SCForm,
  SCInput,
  SCTextArea,
  SCButton,
  SCFormGrid,
  SCFormGroup,
  ContactForm,
} from "./MyProfile.styles";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { apis } from "@utils/api";
import { SCDropdownSelect } from "../SignUp/SignUp.styles";

const MyProfile = () => {
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);

  const [formData, setFormData] = useState({});
  const [originalData, setOriginalData] = useState({});
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [showNoChangeError, setShowNoChangeError] = useState(false);
  const [specializations, setSpecializations] = useState([]);

  useEffect(() => {
    if (!token) {
      navigate("/signin");
      return;
    }

    const fetchProfile = async () => {
      try {
        const response = await axiosInstance.get(apis.profile);
        if (response.data.success) {
          const profile = response.data.data;
          setFormData(profile);
          setOriginalData(profile);
        }
      } catch (err) {
        setError("Failed to load profile. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [token, navigate]);


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
    console.log("Change event:", e); // Debugging line
    const { name, value } = e.target;
    console.log(`Field changed: ${name}, New value: ${value}`); // Debugging line
    let newErrors = { ...errors };

    if (!value.trim() && name !== "addressLink") {
      newErrors[name] = `${name.replace(/([A-Z])/g, " $1")} is required`;
    } else {
      delete newErrors[name];
    }

    setErrors(newErrors);
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (showNoChangeError) setShowNoChangeError(false);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const hasRealChanges = () => {
    return Object.keys(formData).some(
      (key) => String(formData[key]).trim() !== String(originalData[key]).trim()
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!hasRealChanges()) {
      setShowNoChangeError(true);
      return;
    }

    try {
      await axiosInstance.put(apis.profile, { ...formData, role: "doctor" });
      Swal.fire({
        icon: "success",
        title: "Profile Updated",
        text: "Your profile has been updated successfully!",
      });

      setOriginalData({ ...formData });
      setIsEditing(false);
      setShowNoChangeError(false);
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Update Failed",
        text: "An error occurred while updating your profile.",
      });
    }
  };

  if (loading)
    return (
      <div
        style={{
          display: "flex",
          height: "100dvh",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SCText>Loading profile...</SCText>
      </div>
    );
  if (error) return <SCText style={{ color: "red" }}>{error}</SCText>;

  return (
    <SCContainerBody>
      <SCTitle>My Profile</SCTitle>
      <SCContactGrid>
        <SCContactItem>
          <SCText>Update your personal information below.</SCText>
        </SCContactItem>
      </SCContactGrid>
      <ContactForm>
        <SCForm onSubmit={handleSubmit}>
          <SCFormGrid>
            {[
              "firstName",
              "lastName",
              "qualifications",
              "experienceYears",
              "clinicName",
              "clinicAddress",
              "consultationFee",
            ].map((field) => (
              <SCFormGroup key={field}>
                <label>
                  {field
                    .replace(/([A-Z])/g, " $1")
                    .trim()
                    .toUpperCase()}
                </label>
                <SCInput
                  type={
                    field.includes("Years") || field.includes("Fee")
                      ? "number"
                      : "text"
                  }
                  name={field}
                  value={formData[field] || ""}
                  onChange={handleChange}
                  required
                  disabled={!isEditing}
                />
                {errors[field] && (
                  <SCText
                    style={{
                      color: "red",
                      textAlign: "start",
                      marginBottom: "10px",
                    }}
                  >
                    {errors[field]}
                  </SCText>
                )}
              </SCFormGroup>
            ))}
            <SCFormGroup>
              <label>Specialization</label>
              <SCDropdownSelect
                name="specialization"
                value={formData.specialization}
                onChange={handleChange}
                required
                isFullWidth={true}
                disabled={!isEditing}
              >
                <option value="">Select Specialization</option>
                {specializations.map((item) => (
                  <option key={item._id} value={item._id}>
                    {item.specialisation}
                  </option>
                ))}
              </SCDropdownSelect>
              {errors.specialization && (
              <SCText style={{ color: "red" }}>{errors.specialization}</SCText>
            )}
            </SCFormGroup>
            <SCFormGroup>
              <label>Address Link (Optional)</label>
              <SCInput
                type="text"
                name="addressLink"
                value={formData.addressLink || ""}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </SCFormGroup>
          </SCFormGrid>
          <SCFormGroup>
            <label>BIO</label>
            <SCTextArea
              name="bio"
              value={formData.bio || ""}
              onChange={handleChange}
              rows="4"
              required
              disabled={!isEditing}
            />
            {errors.bio && (
              <SCText style={{ color: "red" }}>{errors.bio}</SCText>
            )}
          </SCFormGroup>

          <SCFormGroup>
            <label>GENDER</label>
            <select
              name="gender"
              value={formData.gender || ""}
              onChange={handleChange}
              disabled={!isEditing}
              required
              style={{
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                fontSize: "1rem",
              }}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {errors.gender && (
              <SCText
                style={{ color: "red", marginTop: "5px", textAlign: "start" }}
              >
                {errors.gender}
              </SCText>
            )}
          </SCFormGroup>
          {showNoChangeError && (
            <SCText
              style={{
                color: "red",
                textAlign: "center",
                marginBottom: "10px",
              }}
            >
              No changes detected. Please modify at least one field before
              updating.
            </SCText>
          )}
          {!isEditing ? (
            <SCButton type="button" onClick={handleEditClick}>
              Edit Profile
            </SCButton>
          ) : (
            <SCButton type="submit" disabled={!hasRealChanges()}>
              Update Profile
            </SCButton>
          )}
        </SCForm>
      </ContactForm>
    </SCContainerBody>
  );
};

export default MyProfile;

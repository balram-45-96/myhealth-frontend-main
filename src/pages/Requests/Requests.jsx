import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axiosInstance from "@utils/axios";
import Loader from "@components/UI/Loader/Loader";
import {
  SCContainer,
  Container,
  Tabs,
  Tab,
  BookingList,
  BookingCard,
  BookingDetails,
  DoctorInfo,
  VerifyButton,
} from "./Requests.styles";
import { apis } from "../../utils/api";

const Requests = () => {
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);

  const [activeTab, setActiveTab] = useState("verified");
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [specializations, setSpecializations] = useState([]);
  console.log("Active Tab:", specializations);

  useEffect(() => {
    if (!token) {
      navigate("/signin");
      return;
    }
    fetchDoctors();
  }, [activeTab, token]);

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

  const fetchDoctors = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axiosInstance.get(
        `/auth/doctor/doctors?status=${activeTab}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setDoctors(response.data.doctors || []);
    } catch (err) {
      setError("Failed to load doctors");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleVerify = async (doctorId) => {
    const confirmed = window.confirm(
      "Are you sure you want to verify this doctor?"
    );
    if (!confirmed) return;

    try {
      await axiosInstance.put(
        `${apis.verifyDoctor}/${doctorId}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      alert("Doctor verified successfully!");
      fetchDoctors(); // refresh list
    } catch (err) {
      console.error(err);
      alert("Failed to verify doctor. Please try again.");
    }
  };

  const handleReject = async (doctorId) => {
    const confirmed = window.confirm(
      "Are you sure you want to reject this doctor?"
    );
    if (!confirmed) return;

    try {
      await axiosInstance.put(
        `${apis.rejectDoctor}/${doctorId}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      alert("Doctor rejected successfully!");
      fetchDoctors(); // refresh list
    } catch (err) {
      console.error(err);
      alert("Failed to reject doctor. Please try again.");
    }
  };

  return (
    <SCContainer>
      <Container>
        <Tabs>
          <Tab
            $active={activeTab === "verified"}
            onClick={() => setActiveTab("verified")}
          >
            Verified Doctors
          </Tab>
          <Tab
            $active={activeTab === "unverified"}
            onClick={() => setActiveTab("unverified")}
          >
            Unverified Doctors
          </Tab>
          <Tab
            $active={activeTab === "rejected"}
            onClick={() => setActiveTab("rejected")}
          >
            Rejected Doctors
          </Tab>
        </Tabs>

        {loading ? (
          <Loader />
        ) : error ? (
          <p style={{ textAlign: "center" }}>{error}</p>
        ) : (
          <BookingList>
            {doctors?.length > 0 ? (
              doctors.map((doc) => {
                const hasDocuments =
                  doc.documents?.qualificationCertificate ||
                  doc.documents?.license;

                return (
                  <BookingCard key={doc._id}>
                    <BookingDetails>
                      <p>
                        <strong>Name:</strong> {doc.firstName} {doc.lastName}
                      </p>
                      <p>
                        <strong>Email:</strong> {doc.email}
                      </p>
                      <p>
                        <strong>Phone:</strong> {doc.countryCode} {doc.phone}
                      </p>
                      <p>
                        <strong>Specialization:</strong>{" "}
                        {specializations.find(spec => spec._id === doc.specialization)?.specialisation || doc.specialization}
                      </p>
                      <p>
                        <strong>Qualifications:</strong> {doc.qualifications}
                      </p>
                      <p>
                        <strong>Experience:</strong> {doc.experienceYears} years
                      </p>
                      <p>
                        <strong>Clinic:</strong> {doc.clinicName} –{" "}
                        {doc.clinicAddress}
                      </p>
                      <p>
                        <strong>Consultation Fee:</strong> ₹
                        {doc.consultationFee}
                      </p>
                      <p>
                        <strong>Rating:</strong> ⭐ {doc.rating}
                      </p>
                      <p>
                        <strong>Bio:</strong> {doc.bio}
                      </p>
                      <p>
                        <strong>Gender:</strong> {doc.gender}
                      </p>
                      <p>
                        <strong>Google Map:</strong>{" "}
                        <a
                          href={doc.addressLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Open Map
                        </a>
                      </p>
                    </BookingDetails>

                    <DoctorInfo>
                      <div>
                        <h4>
                          {doc.firstName} {doc.lastName}
                        </h4>
                        <p>{doc.qualifications || "No qualification info"}</p>
                        <p>
                          Status:{" "}
                          {doc.documents?.isDocumentsVerified
                            ? "✅ Verified"
                            : "❌ Unverified"}
                        </p>

                        {hasDocuments && (
                          <>
                            <h3>Documents</h3>
                            {doc.documents?.qualificationCertificate && (
                              <p>
                                <a
                                  href={doc.documents.qualificationCertificate}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  Qualification Certificate
                                </a>
                              </p>
                            )}
                            {doc.documents?.license && (
                              <p>
                                <a
                                  href={doc.documents.license}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  License
                                </a>
                              </p>
                            )}
                          </>
                        )}

                        {!doc.documents?.isDocumentsVerified &&
                          activeTab === "unverified" && (
                            <>
                              <VerifyButton
                                onClick={() => handleVerify(doc._id)}
                              >
                                Verify Doctor
                              </VerifyButton>
                              <VerifyButton
                                style={{
                                  background: "red",
                                }}
                                onClick={() => handleReject(doc._id)}
                              >
                                Reject Doctor
                              </VerifyButton>
                            </>
                          )}
                      </div>
                    </DoctorInfo>
                  </BookingCard>
                );
              })
            ) : (
              <p style={{ textAlign: "center" }}>
                No {activeTab} doctors found.
              </p>
            )}
          </BookingList>
        )}
      </Container>
    </SCContainer>
  );
};

export default Requests;

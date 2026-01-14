import React from "react";
import {
  DoctorCard,
  DoctorDetails,
  DoctorImage,
  DoctorName,
  DoctorSpecialty,
  Experience,
  Fee,
  Button,
  Location,
  DoctorData,
  Buttons,
  HospitalName,
  HospitalData,
} from "./DoctorProfile.styles";
import Hospital from "@assets/icons/icon-hospital.png";

const DoctorProfile = ({ doctor }) => {
  return (
    <DoctorCard>
      <DoctorData>
        <DoctorImage src={doctor.image} alt={doctor.name} />
        <DoctorDetails>
          <DoctorName>{doctor.name}</DoctorName>
          <DoctorSpecialty>{doctor.specialty}</DoctorSpecialty>
          <HospitalData>
            <img src={Hospital} />
            <HospitalName>{doctor.hospital}</HospitalName>
          </HospitalData>
          <Experience>{doctor.experience} years experience overall</Experience>
          <Location>{doctor?.location}</Location>
          <Fee>₹{doctor.fee} Consultation fee at clinic</Fee>
        </DoctorDetails>
      </DoctorData>
      <Buttons>
        <Button>View Profile</Button>
        <Button>Book Now</Button>
      </Buttons>
    </DoctorCard>
  );
};

export default DoctorProfile;

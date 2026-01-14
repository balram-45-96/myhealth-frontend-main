import React, { useState, useRef, useEffect } from "react";
import {
  SCMainContainerBody,
  SCContainerBody,
  SCSearchBar,
  SCInputWrapper,
  SCFilterContainer,
  SCFilterButtons,
  SCFilterOptions,
  SCDropdownMenu,
  DropdownButtonWrapper,
  ArrowIcon,
  IconWrapper,
  DoctorDetailsCOntainer,
  SCFilterInputWrapper,
  SpecialistScrollContainer,
  SpecialistItem,
  ScrollButton,
  City,
  FindDoctorContainer,
  NoData,
} from "./FindDoctor.styles";
import DownArrow from "@assets/icons/icon-down-arrow.svg";
import LeftArrow from "@assets/icons/icon-left-arrow.svg";
import RightArrow from "@assets/icons/icon-right-arrow.svg";
import Hospital from "@assets/icons/icon-hospital-bad.svg";
import Location from "@assets/icons/icon-location-2.svg";
import Doctors from "@assets/icons/icon-persons.svg";
import DoctorProfile from "@components/DoctorProfile/DoctorProfile";
import { FIND_DOCTORS_DATA } from "@utils/const";
import Footer from "@components/Footer/Footer";

const FindDoctor = () => {
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [genderOpen, setGenderOpen] = useState(false);
  const [experienceOpen, setExperienceOpen] = useState(false);
  const [specialisationOpen, setSpecialisationOpen] = useState(false);
  const [relevanceOpen, setRelevanceOpen] = useState(false);
  const [selectedSpecialistId, setSelectedSpecialistId] = useState(null);
  const [selectedGender, setSelectedGender] = useState("Gender");
  const [selectedExperience, setSelectedExperience] = useState("Experience");
  const [selectedSpecialisation, setSelectedSpecialisation] =
    useState("Specialisation");
  const [selectedRelevance, setSelectedRelevance] = useState("Relevance");

  const genderRef = useRef(null);
  const experienceRef = useRef(null);
  const relevanceRef = useRef(null);
  const specialisationRef = useRef(null);
  const specialistScrollRefs = useRef([]);

  const handleClickOutside = (event) => {
    if (genderRef.current && !genderRef.current.contains(event.target)) {
      setGenderOpen(false);
    }
    if (
      experienceRef.current &&
      !experienceRef.current.contains(event.target)
    ) {
      setExperienceOpen(false);
    }
    if (relevanceRef.current && !relevanceRef.current.contains(event.target)) {
      setRelevanceOpen(false);
    }
    if (
      specialisationRef.current &&
      !specialisationRef.current.contains(event.target)
    ) {
      setSpecialisationOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const scrollLeft = (index) => {
    if (specialistScrollRefs.current[index]) {
      specialistScrollRefs.current[index].scrollBy({
        left: -200,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = (index) => {
    if (specialistScrollRefs.current[index]) {
      specialistScrollRefs.current[index].scrollBy({
        left: 200,
        behavior: "smooth",
      });
    }
  };

  const handleSpecialistSelect = (specialist) => {
    setSelectedSpecialistId(specialist.id);
  };

  return (
    <SCMainContainerBody>
      <SCContainerBody>
        <SCSearchBar>
          <div>
            <SCInputWrapper>
              <IconWrapper>
                <img src={Location} alt="location" />
              </IconWrapper>
              <input type="text" placeholder="Search location, city" />
            </SCInputWrapper>
            <SCInputWrapper>
              <IconWrapper>
                <img src={Doctors} alt="doctors" />
              </IconWrapper>
              <input
                type="text"
                placeholder="Search doctors, specialisations, etc."
              />
            </SCInputWrapper>
          </div>
          <p>
            Fed up of endless wait? <span>Look for clinic</span>
          </p>
        </SCSearchBar>

        <SCFilterContainer>
          <SCFilterButtons>
            {/* <DropdownButtonWrapper ref={genderRef}>
            <button onClick={() => setGenderOpen(!genderOpen)}>
              {selectedGender} <ArrowIcon open={genderOpen} src={DownArrow} />
            </button>
            {genderOpen && (
              <SCDropdownMenu>
                <ul>
                  <li
                    onClick={() => {
                      setSelectedGender("Male Doctor");
                      setGenderOpen(false);
                    }}
                  >
                    Male Doctor
                  </li>
                  <li
                    onClick={() => {
                      setSelectedGender("Female Doctor");
                      setGenderOpen(false);
                    }}
                  >
                    Female Doctor
                  </li>
                </ul>
              </SCDropdownMenu>
            )}
          </DropdownButtonWrapper> */}

            {/* <DropdownButtonWrapper ref={experienceRef}>
            <button onClick={() => setExperienceOpen(!experienceOpen)}>
              {selectedExperience}
              <ArrowIcon open={experienceOpen} src={DownArrow} />
            </button>
            {experienceOpen && (
              <SCDropdownMenu>
                <ul>
                  <li
                    onClick={() => {
                      setSelectedExperience("5+ Years of experience");
                      setExperienceOpen(false);
                    }}
                  >
                    5+ Years of experience
                  </li>
                  <li
                    onClick={() => {
                      setSelectedExperience("10+ Years of experience");
                      setExperienceOpen(false);
                    }}
                  >
                    10+ Years of experience
                  </li>
                  <li
                    onClick={() => {
                      setSelectedExperience("15+ Years of experience");
                      setExperienceOpen(false);
                    }}
                  >
                    15+ Years of experience
                  </li>
                  <li
                    onClick={() => {
                      setSelectedExperience("20+ Years of experience");
                      setExperienceOpen(false);
                    }}
                  >
                    20+ Years of experience
                  </li>
                </ul>
              </SCDropdownMenu>
            )}
          </DropdownButtonWrapper> */}

            <DropdownButtonWrapper ref={specialisationRef}>
              <button
                onClick={() => setSpecialisationOpen(!specialisationOpen)}
              >
                {selectedSpecialisation}
                <ArrowIcon open={specialisationOpen} src={DownArrow} />
              </button>
              {specialisationOpen && (
                <SCDropdownMenu>
                  <ul>
                    <li
                      onClick={() => {
                        setSelectedSpecialisation("Internal Medicine");
                        setSpecialisationOpen(false);
                      }}
                    >
                      Internal Medicine
                    </li>
                    <li
                      onClick={() => {
                        setSelectedSpecialisation("General Surgery");
                        setSpecialisationOpen(false);
                      }}
                    >
                      General Surgery
                    </li>
                    <li
                      onClick={() => {
                        setSelectedSpecialisation("Pediatrics");
                        setSpecialisationOpen(false);
                      }}
                    >
                      Pediatrics
                    </li>
                    <li
                      onClick={() => {
                        setSelectedSpecialisation("Obstetrics and Gynecology");
                        setSpecialisationOpen(false);
                      }}
                    >
                      Obstetrics and Gynecology
                    </li>
                    <li
                      onClick={() => {
                        setSelectedSpecialisation("Orthopedic Surgeons");
                        setSpecialisationOpen(false);
                      }}
                    >
                      Orthopedic Surgeons
                    </li>
                  </ul>
                </SCDropdownMenu>
              )}
            </DropdownButtonWrapper>

            <SCFilterInputWrapper>
              <IconWrapper>
                <img src={Hospital} alt="hospital" />
              </IconWrapper>
              <input type="text" placeholder="Search hospitals, clinics" />
            </SCFilterInputWrapper>

            <DropdownButtonWrapper>
              <span onClick={() => setFiltersOpen(!filtersOpen)}>
                All Filters
                <ArrowIcon open={filtersOpen} src={DownArrow} />
              </span>
            </DropdownButtonWrapper>

            <DropdownButtonWrapper ref={relevanceRef}>
              <div>Sort By</div>
              <button onClick={() => setRelevanceOpen(!relevanceOpen)}>
                {selectedRelevance}
                <ArrowIcon open={relevanceOpen} src={DownArrow} />
              </button>
              {relevanceOpen && (
                <SCDropdownMenu>
                  <ul>
                    <li
                      onClick={() => {
                        setSelectedRelevance(
                          "Number of patient stories - High to low"
                        );
                        setRelevanceOpen(false);
                      }}
                    >
                      Number of patient stories - High to low
                    </li>
                    <li
                      onClick={() => {
                        setSelectedRelevance("Experience - High to Low");
                        setRelevanceOpen(false);
                      }}
                    >
                      Experience - High to Low
                    </li>
                    <li
                      onClick={() => {
                        setSelectedRelevance("Consultation Fee - High to Low");
                        setRelevanceOpen(false);
                      }}
                    >
                      Consultation Fee - High to Low
                    </li>
                    <li
                      onClick={() => {
                        setSelectedRelevance("Consultation Fee - Low to High");
                        setRelevanceOpen(false);
                      }}
                    >
                      Consultation Fee - Low to High
                    </li>
                  </ul>
                </SCDropdownMenu>
              )}
            </DropdownButtonWrapper>
          </SCFilterButtons>

          {filtersOpen && (
            <SCFilterOptions>
              <div className="filter-section">
                <h4>Fees</h4>
                <ul>
                  <li>
                    <input type="radio" name="fees" /> ₹0-₹500
                  </li>
                  <li>
                    <input type="radio" name="fees" /> Above ₹500
                  </li>
                  <li>
                    <input type="radio" name="fees" /> Above ₹1000
                  </li>
                  <li>
                    <input type="radio" name="fees" /> Above ₹2000
                  </li>
                </ul>
              </div>
              <div className="filter-section">
                <h4>Availability</h4>
                <ul>
                  <li>
                    <input type="radio" name="availability" /> Available in next
                    4 hours
                  </li>
                  <li>
                    <input type="radio" name="availability" /> Available Today
                  </li>
                  <li>
                    <input type="radio" name="availability" /> Available
                    Tomorrow
                  </li>
                  <li>
                    <input type="radio" name="availability" /> Available in next
                    7 days
                  </li>
                </ul>
              </div>
            </SCFilterOptions>
          )}
        </SCFilterContainer>

        <FindDoctorContainer>
          {FIND_DOCTORS_DATA.map((item, index) => (
            <span>
              <City key={index}>
                {item?.city}, {item?.state}
              </City>
              <SpecialistScrollContainer>
                <ScrollButton onClick={() => scrollLeft(index)}>
                  <img src={LeftArrow} alt="Scroll Left" />
                </ScrollButton>
                <div
                  className="specialist-list"
                  ref={(el) => (specialistScrollRefs.current[index] = el)}
                >
                  {item?.specialist.map((specialist) => (
                    <SpecialistItem
                      key={specialist.id}
                      onClick={() => {
                        if (selectedSpecialistId === specialist.id) {
                          setSelectedSpecialistId(null);
                        } else {
                          handleSpecialistSelect(specialist);
                        }
                      }}
                      selected={
                        selectedSpecialistId === specialist.id ? true : false
                      }
                      small={specialist.name === "Pediatrics" ? true : false}
                    >
                      <img src={specialist.icon} alt={specialist.name} />
                      <p>{specialist.name}</p>
                    </SpecialistItem>
                  ))}
                </div>
                <ScrollButton onClick={() => scrollRight(index)}>
                  <img src={RightArrow} alt="Scroll Right" />
                </ScrollButton>
              </SpecialistScrollContainer>

              <DoctorDetailsCOntainer active={!!selectedSpecialistId}>
                {item?.specialist
                  .filter(
                    (specialist) => specialist.id === selectedSpecialistId
                  )
                  .flatMap((specialist) => {
                    const doctors = specialist.doctors;

                    if (doctors.length === 0) {
                      return (
                        <NoData key="no-doctors">
                          No doctors available for this specialist.
                        </NoData>
                      );
                    }

                    return doctors.map((doctor, index) => (
                      <DoctorProfile key={index} doctor={doctor} />
                    ));
                  })}
              </DoctorDetailsCOntainer>
            </span>
          ))}
        </FindDoctorContainer>
        <Footer />
      </SCContainerBody>
    </SCMainContainerBody>
  );
};

export default FindDoctor;

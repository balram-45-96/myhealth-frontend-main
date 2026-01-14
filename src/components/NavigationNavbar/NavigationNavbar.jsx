import React, { Suspense, useState, useEffect, useRef } from "react";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  BookButton,
  LogoContainer,
  Menu,
  MenuItem,
  NavContainer,
  SCNavbar,
  HamburgerMenu,
  Overlay,
  MobileNavMenu,
  MobileNavHeader,
  CloseIcon,
  MobileMenus,
  MobileBookButton,
  ProfileContainer,
  ProfileImage,
  ProfileName,
  DropdownMenu,
  DropdownItem,
  SideBarList,
} from "./NavigationNavbar.styles";
import Loader from "@components/UI/Loader/Loader";
import { StyledLayout } from "@components/Layout/Layout.styles";
import { NAVBARITEMS, NAVBARDOCTORITEMS } from "@utils/const";
import Close from "@assets/icons/icon-close.svg";
import { logout } from "@store/slices/authSlice";
import DefaultProfilePic from "@assets/images/icon-internal-medicine.png";
import axiosInstance from "@utils/axios";
import { apis } from "@utils/api";

const Navbar = () => {
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const doctor = useSelector((state) => state.auth.user);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(null);
  const [error, setError] = useState(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  const isDoctorRoute = [
    "/appointments",
    "/schedules",
    "/profile",
    "/requests",
  ].includes(location.pathname);

  let doctorMenuItems = [...NAVBARDOCTORITEMS];
  if (isAdmin) {
    doctorMenuItems.push({
      label: "Requests",
      to: "/requests",
    });
  }

  const menuItems = token && isDoctorRoute ? doctorMenuItems : NAVBARITEMS;
  const isUsingDoctorNavbar = token && isDoctorRoute;

  useEffect(() => {
    if (
      ![
        "/appointments",
        "/schedules",
        "/profile",
        "/requests",
        "/upload-documents",
        "/underVerification",
      ].includes(location.pathname)
    ) {
      dispatch(logout());
    }
  }, [location.pathname, dispatch]);

  useEffect(() => {
    if (token) {
      const fetchProfile = async () => {
        try {
          const response = await axiosInstance.get(apis.profile);
          if (response.data.success) {
            const profile = response.data.data;
            setIsAdmin(profile.isAdmin || false);
          }
        } catch (err) {
          setError("Failed to load profile. Please try again.");
        }
      };

      fetchProfile();
    }
  }, [token, navigate]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (
    location.pathname === "/signin" ||
    location.pathname === "/signup" ||
    location.pathname === "/upload-documents" ||
    location.pathname === "/underVerification"
  ) {
    return (
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    );
  }

  return (
    <StyledLayout>
      <SCNavbar>
        <NavContainer>
          <LogoContainer>
            <img src="/main-logo.svg" alt="Logo" />
          </LogoContainer>
          <Menu>
            {menuItems.map((item, i) => (
              <MenuItem
                key={i}
                onClick={() => {
                  navigate(item.to);
                }}
                isActive={location.pathname === item.to}
              >
                {item?.label}
              </MenuItem>
            ))}
          </Menu>
          {!isUsingDoctorNavbar ? (
            <BookButton
              onClick={() => {
                // navigate("/findDoctor");
                // go to homepage id ='download-app' section
                // also if user click page should scroll smoothly to that section
                  if (location.pathname === "/") {
                    const el = document.getElementById("download-app");
                    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                  } else {
                    navigate("/");
                    setTimeout(() => {
                      const el = document.getElementById("download-app");
                      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                    }, 300);
                  }
              
              }}
            >
              Book Now
            </BookButton>
          ) : (
            <ProfileContainer onClick={toggleDropdown} ref={dropdownRef}>
              <ProfileImage
                src={doctor?.profilePic || DefaultProfilePic}
                alt="Profile"
              />
              <ProfileName>
                {doctor?.firstName} {doctor?.lastName}
              </ProfileName>
              {dropdownOpen && (
                <DropdownMenu>
                  <DropdownItem
                    isActive={location.pathname === "/profile"}
                    onClick={() => navigate("/profile")}
                  >
                    View Profile
                  </DropdownItem>
                  <DropdownItem
                    isLogOut={true}
                    onClick={() => {
                      dispatch(logout());
                      navigate("/");
                    }}
                  >
                    Logout
                  </DropdownItem>
                </DropdownMenu>
              )}
            </ProfileContainer>
          )}
          <HamburgerMenu onClick={toggleMobileMenu}>
            <span />
            <span />
            <span />
          </HamburgerMenu>
        </NavContainer>
        <Overlay open={mobileMenuOpen} onClick={toggleMobileMenu} />
      </SCNavbar>
      <Overlay open={mobileMenuOpen} onClick={toggleMobileMenu} />
      <MobileNavMenu open={mobileMenuOpen}>
        <MobileNavHeader>
          <LogoContainer mobile={true}>
            <img src="/main-logo.svg" alt="Logo" />
          </LogoContainer>
          <CloseIcon onClick={toggleMobileMenu} src={Close} />
        </MobileNavHeader>
        <MobileMenus>
          {menuItems.map((item, i) => (
            <MenuItem
              key={i}
              onClick={() => {
                navigate(item.to);
              }}
              isActive={location.pathname === item.to}
            >
              {item?.label}
            </MenuItem>
          ))}
        </MobileMenus>
        {!isUsingDoctorNavbar ? (
          <MobileBookButton
            onClick={() => {
              navigate("/findDoctor");
            }}
          >
            Book Now
          </MobileBookButton>
        ) : (
          <SideBarList>
            <DropdownItem
              isSideBar={true}
              isActive={location.pathname === "/profile"}
              onClick={() => navigate("/profile")}
            >
              View Profile
            </DropdownItem>
            <DropdownItem
              isSideBar={true}
              isLogOut={true}
              onClick={() => {
                dispatch(logout());
                navigate("/");
              }}
            >
              Logout
            </DropdownItem>
          </SideBarList>
        )}
      </MobileNavMenu>
      {/* <FloatingButtonContainer>
        <Tooltip className="tooltip">
          {token ? "Go To Home" : "Doctor's Login"}
        </Tooltip>
        <FloatingButton onClick={() => navigate(!token ? "/signin" : "/")}>
          <img src={DefaultProfilePic} alt="Sign In" />
        </FloatingButton>
      </FloatingButtonContainer> */}

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </StyledLayout>
  );
};

export default Navbar;

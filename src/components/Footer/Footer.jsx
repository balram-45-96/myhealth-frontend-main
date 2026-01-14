import React from "react";
import {
  ContactInfo,
  Description,
  EmailInput,
  EmailInputContainer,
  FooterContainer,
  Logo,
  LogoContainer,
  MapContainer,
  QuickLinkItem,
  QuickLinks,
  Section,
  SubmitButton,
  SocialMediaIcons,
  Copyright,
} from "./Footer.styles";
import send from "@assets/icons/icon-send.svg";
import FB from "@assets/icons/icon-fb.svg";
import Twitter from "@assets/icons/icon-twitter.svg";
import Instagram from "@assets/icons/icon-instagram.svg";
import { CONTACT_US_DATA } from "../../utils/const";

const Footer = () => {
  return (
    <FooterContainer>
      <span>
        <Section>
          <LogoContainer>
            <img src="/main-logo.svg" alt="Logo" />
            {/* <Logo>MyHealth</Logo> */}
            {/* <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Description> */}
          </LogoContainer>
          <EmailInputContainer>
            <EmailInput type="email" placeholder="Enter Email Address" />
            <SubmitButton>
              <img src={send} alt="Send" />
            </SubmitButton>
          </EmailInputContainer>
        </Section>

        <Section>
          <h4>Quick Links</h4>
          <QuickLinks>
            <QuickLinkItem>
              <a href="/">Home</a>
            </QuickLinkItem>
            <QuickLinkItem>
              <a href="findDoctor">Find a Doctor</a>
            </QuickLinkItem>
            <QuickLinkItem>
              <a href="contactus">Contact Us</a>
            </QuickLinkItem>
            <QuickLinkItem>
              <a href="#">Privacy Statement</a>
            </QuickLinkItem>
            <QuickLinkItem>
              <a href="#">Terms & Conditions</a>
            </QuickLinkItem>
          </QuickLinks>
        </Section>

        <Section>
          <h4>Contact info</h4>
          <ContactInfo>
            <p>Phone: {CONTACT_US_DATA.Contacts[2].data[0]}</p>
            <p>Email: {CONTACT_US_DATA.Contacts[0].data[0]}</p>
            <p>Address: {CONTACT_US_DATA.Contacts[1].data[0]}</p>
            <p>Address: {CONTACT_US_DATA.Contacts[1].data[0]}</p>
          </ContactInfo>
        </Section>
      </span>
      <Copyright>
        <h2>© Copyright 2025 MyHealth</h2>
        <img src="/main-logo.svg" alt="Logo" />
        <SocialMediaIcons>
          <a href="#" aria-label="Facebook">
            <img src={FB} />
          </a>
          <a href="#" aria-label="Twitter">
            <img src={Twitter} />
          </a>
          <a href="#" aria-label="Instagram">
            <img src={Instagram} />
          </a>
        </SocialMediaIcons>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;

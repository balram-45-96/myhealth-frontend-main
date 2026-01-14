import React from "react";
import {
  SCContainerBody,
  SCContactGrid,
  SCContactItem,
  SCIcon,
  SCText,
  SCTitle,
  SCForm,
  SCInput,
  QuoteText,
  SCTextArea,
  SCButton,
  ContactForm,
  ContactFormTitle,
  SCMainContainerBody,
} from "./ContactUs.styles";
import { CONTACT_US_DATA } from "@utils/const";
import Footer from "@components/Footer/Footer";

const ContactUs = () => {
  return (
    <SCMainContainerBody>
      <SCContainerBody>
        <QuoteText>{CONTACT_US_DATA?.subTitle}</QuoteText>

        <SCContactGrid>
          {CONTACT_US_DATA?.Contacts?.map((item, index) => (
            <SCContactItem key={index}>
              <SCIcon src={item.icon} />
              {item.data.map((text, idx) => (
                <SCText key={idx}>{text}</SCText>
              ))}
            </SCContactItem>
          ))}
        </SCContactGrid>

        <ContactForm>
          <ContactFormTitle>
            <SCTitle style={{ width: "90%" }}>
              {CONTACT_US_DATA.contactForm?.title}
            </SCTitle>
            <p>{CONTACT_US_DATA.contactForm?.text}</p>
          </ContactFormTitle>
          <SCForm>
            <SCInput type="text" placeholder="Your first name" required />
            <SCInput type="text" placeholder="Your surname" required />
            <SCInput type="email" placeholder="Your email address" required />
            <SCInput type="number" placeholder="Your phone number" required />
            <SCTextArea placeholder="Your message" required />
            <SCButton>Send to MyHealth</SCButton>
          </SCForm>
        </ContactForm>
      </SCContainerBody>
      <Footer />
    </SCMainContainerBody>
  );
};

export default ContactUs;

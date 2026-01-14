import React from "react";
import {
  Container,
  Logo,
  Card,
  Title,
  Subtitle,
} from "./UnderVerification.styles";

function UnderVerification() {
  return (
    <Container>
      <Logo src="/main-logo.svg" alt="Company Logo" />

      <Card>
        <Title>Your Account is Under Verification</Title>
        <Subtitle>
          Thank you for submitting your documents. Our team is reviewing them
          and you will be notified once your account is approved.
        </Subtitle>
      </Card>
    </Container>
  );
}

export default UnderVerification;

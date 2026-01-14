import React from "react";
import {
  Section,
  SubTitle,
  Title,
  Description,
} from "./SectionHeadingInfo.styles";

const ServiceHeadingInfo = ({ title, subTitle, description }) => {
  return (
    <Section>
      {subTitle && <SubTitle>{subTitle}</SubTitle>}

      {title && <Title>{title}</Title>}

      {description && <Description>{description}</Description>}
    </Section>
  );
};

export default ServiceHeadingInfo;

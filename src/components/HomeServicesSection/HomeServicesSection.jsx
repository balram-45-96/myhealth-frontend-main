import React from "react";
import { HOME_SERVICE_SECTION } from "@utils/const";
import ServiceHeadingInfo from "@components/SectionHeadingInfo/SectionHeadingInfo";
import {
  SCContainerBody,
  SCServicesContainer,
  SCServiceCard,
  SCImageContainer,
  SCServiceTitle,
  SCServiceImage,
} from "./HomeServicesSection.styles";
import { useNavigate } from "react-router-dom";

const HomeServicesSection = () => {
  const navigate = useNavigate();

  return (
    <SCContainerBody>
      <ServiceHeadingInfo
        title={HOME_SERVICE_SECTION?.title}
        subTitle={HOME_SERVICE_SECTION?.subTitle}
        description={HOME_SERVICE_SECTION?.description}
      />
      <SCServicesContainer>
        {HOME_SERVICE_SECTION?.services?.map((service) => (
          <SCServiceCard
            key={service.id}
            borderColor={service.borderColor}
            onClick={() => {
              navigate(service?.link);
            }}
          >
            <SCImageContainer>
              <SCServiceImage
                src={service.image}
                alt={service.title}
                isSupport={service.title === "24/7 Support"}
              />
            </SCImageContainer>
            <SCServiceTitle>{service.title}</SCServiceTitle>
          </SCServiceCard>
        ))}
      </SCServicesContainer>
    </SCContainerBody>
  );
};

export default HomeServicesSection;

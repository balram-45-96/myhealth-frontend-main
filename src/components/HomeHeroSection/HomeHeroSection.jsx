import React from "react";
import {
  SCContainerBody,
  SCContentWrapper,
  SCHeadline,
  SCSubText,
  // SCNewUpdate,
  // SCUpdateText,
  SCImageWrapper,
} from "./HomeHeroSection.styles";
import HeroImage from "@assets/images/HomeHeroImage.jpg";
import { HOME_HERO_SECTION } from "@utils/const";

const HomeHeroSection = () => {
  return (
    <SCContainerBody>
      <SCImageWrapper>
        <img src={HeroImage} alt="Hero Image" rel="preload" loading="lazy" />
      </SCImageWrapper>
      <SCContentWrapper>
        {/* <SCNewUpdate>
          <span>New</span>
          <SCUpdateText>{HOME_HERO_SECTION.newUpdate}</SCUpdateText>
        </SCNewUpdate> */}
        <SCHeadline>
          {HOME_HERO_SECTION.headline.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </SCHeadline>
        <SCSubText>{HOME_HERO_SECTION.subText}</SCSubText>
      </SCContentWrapper>
    </SCContainerBody>
  );
};

export default HomeHeroSection;

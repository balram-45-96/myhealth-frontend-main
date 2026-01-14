import React from "react";
import googlePlayImg from "@assets/images/googlePlayStore.webp";
import AppleStoreImg from "@assets/images/appleStore.png";
import App from "@assets/images/PlayStore.png";
import {
  AppDownloadLinkContainer,
  AppImage,
  ButtonSection,
  // FeatureList,
  StoreButton,
  TextSection,
  Title,
} from "./AppDownloadLink.styles";
import { APP_DATA } from "@utils/const";

const AppDownloadLink = () => {
  return (
    <AppDownloadLinkContainer id="download-app">
      <span>
        <AppImage src={App} alt="App Preview" />
      </span>
      <TextSection>
        <Title>{APP_DATA.title}</Title>
        {/* <FeatureList>
          <p>{APP_DATA.subTitle}</p>
        </FeatureList> */}
        <ButtonSection>
          <StoreButton href={APP_DATA.playStoreLink}>
            <img src={googlePlayImg} alt="Google Play Store" />
          </StoreButton>
          <StoreButton href={APP_DATA.appleStoreLink}>
            <img src={AppleStoreImg} alt="Apple App Store" />
          </StoreButton>
        </ButtonSection>
      </TextSection>
    </AppDownloadLinkContainer>
  );
};

export default AppDownloadLink;

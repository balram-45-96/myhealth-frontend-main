import React from "react";
import { LoaderWrapper, Spinner, LoadingMessage } from "./Loader.styles";

const Loader = ({ message }) => {
  return (
    <LoaderWrapper>
      <Spinner />
      {message && <LoadingMessage>{message}</LoadingMessage>}
    </LoaderWrapper>
  );
};

export default Loader;

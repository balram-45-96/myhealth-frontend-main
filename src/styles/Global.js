import { createGlobalStyle } from "styled-components";
import fonts from "./fonts.module.css";
import "./global.css";

const GlobalStyles = createGlobalStyle`
${fonts}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* outline: 1px solid red; */

  /* -webkit-tap-highlight-color: transparent;
  -moz-user-select: none;
   -khtml-user-select: none;
   -webkit-user-select: none;
   -ms-user-select: none;
   user-select: none; */
}

body {
  overflow-x: hidden;
  min-height: 100dvh;
  margin-inline: auto;
  overflow: hidden;
  text-rendering: optimizeSpeed;
  font-family: ${({ theme }) => theme.fontFamily.sans};
}


html:focus-within {
  scroll-behavior: smooth;
}

img,
svg,
picture {
  display: block;
  max-width: 100%;
}

input,
button,
textarea,
select {
  font: inherit;
}

@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`;

export default GlobalStyles;

// Modified from Frameio/vapor
import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import theme from "design-system/theme/theme.json";

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    width: 100%;
  }

  #__next {
    width: 100%;
    height: 100%;
  }

  ul {
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
    color: ${theme.colors.text.body};
    font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Ubuntu, "Helvetica Neue", ui-sans-serif;
    font-synthesis: none;
    text-size-adjust: none;
    line-height: 1.16667em;
    letter-spacing: -0.0075em;
  }

  @font-face {
    font-family: 'Inter';
    src: url('/fonts/Inter-Regular.woff2') format('woff2'),
      url('/Inter-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'Inter';
    src: url('/fonts/Inter-Medium.woff2') format('woff2'),
      url('/Inter-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
  }

  :root {
    color-scheme: dark;
  }
`;

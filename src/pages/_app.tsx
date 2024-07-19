import "styles/styles.css";
import React from "react";
import { GlobalStyle, ThemeProvider } from "design-system/theme";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Frame.io Exercise</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <GlobalStyle />
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
}

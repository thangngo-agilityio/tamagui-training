// Optional: add the reset to get more consistent styles across browsers
import "@tamagui/core/reset.css";

import { NextThemeProvider, useRootTheme } from "@tamagui/next-theme";
import { AppProps } from "next/app";
import Head from "next/head";
import React, { useMemo } from "react";
import { TamaguiProvider, createTamagui } from "tamagui";

// import the config you just exported from the tamagui.config.ts file
import { config } from "./tamagui.config";

export default function App({ Component, pageProps }: AppProps) {
  // memo to avoid re-render on dark/light change
  const contents = useMemo(() => {
    return <Component {...pageProps} />;
  }, [pageProps]);

  return (
    <>
      <Head>
        <title>Your page title</title>
        <meta name="description" content="Your page description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextThemeProvider>
        <TamaguiProvider
          config={tamaguiConfig}
          disableInjectCSS
          disableRootThemeClass
        >
          {contents}
        </TamaguiProvider>
      </NextThemeProvider>
    </>
  );
}

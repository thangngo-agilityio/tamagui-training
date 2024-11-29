'use client';

import { ReactNode } from 'react';
import { TamaguiProvider as TamaguiUiProvider, Theme } from '@tamagui/core';
import { StyleSheet } from 'react-native';

// Customize themes
import config from '@/tamagui.config';
import { useServerInsertedHTML } from 'next/navigation';
import { NextThemeProvider, useRootTheme } from '@tamagui/next-theme'
import tamaguiConfig from '@/tamagui.config';

const TamaguiProvider = ({ children }: { children?: ReactNode }) => {
  const [theme, setTheme] = useRootTheme()
  useServerInsertedHTML(() => {
    // @ts-ignore
    const rnwStyle = StyleSheet.getSheet()
    return (
      <>
        <style
          dangerouslySetInnerHTML={{ __html: rnwStyle.textContent }}
          id={rnwStyle.id}
        />
        <style jsx global>{`
          html {
            font-family: 'Lufga-Regular';
          }
        `}</style>
        <style
          dangerouslySetInnerHTML={{
            __html: tamaguiConfig.getCSS({
              // if you are using "outputCSS" option, you should use this "exclude"
              // if not, then you can leave the option out
              exclude: process.env.NODE_ENV === 'production' ? 'design-system' : null,
            }),
          }}
        />
      </>
    )
  })
  return (
    <NextThemeProvider
      skipNextHead
      // change default theme (system) here:
      // defaultTheme="light"
      onChangeTheme={(next) => {
        setTheme(next as any)
      }}
    >
      <TamaguiUiProvider config={config} defaultTheme={theme}>
        <Theme name='light_web'>
          {children}
        </Theme>
      </TamaguiUiProvider>
    </NextThemeProvider>
  );
}

export default TamaguiProvider;

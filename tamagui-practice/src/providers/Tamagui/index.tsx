'use client';
import { ReactNode } from 'react';
import { TamaguiProvider as TamaguiUiProvider, Theme } from '@tamagui/core';

// Customize themes
import config from '@/tamagui.config';

const TamaguiProvider = ({ children }: { children?: ReactNode }) => (
  <TamaguiUiProvider config={config}>
    <Theme name='light_web'>
      {children}
    </Theme>
  </TamaguiUiProvider>
);

export default TamaguiProvider;

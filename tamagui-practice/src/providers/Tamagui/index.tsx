'use client';
import { ReactNode } from 'react';
import { TamaguiProvider as TamaguiUiProvider } from '@tamagui/core';

// Customize themes
import config from '@/tamagui.config';

const TamaguiProvider = ({ children }: { children?: ReactNode }) => (
  <TamaguiUiProvider config={config}>{children}</TamaguiUiProvider>
);

export default TamaguiProvider;

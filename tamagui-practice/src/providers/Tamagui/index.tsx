'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { TamaguiProvider, Theme } from 'tamagui';
import { NextThemeProvider } from '@tamagui/next-theme';
import config from '@/tamagui.config';

type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <NextThemeProvider defaultTheme={theme}>
        <TamaguiProvider config={config} defaultTheme={theme}>
          <Theme name='light_web'>
            {children}
          </Theme>
        </TamaguiProvider>
      </NextThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};

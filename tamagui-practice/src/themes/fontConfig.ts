import LocalFont from 'next/font/local';
import { spacing } from './metric';

export const lufga = LocalFont({ src: '../assets/fonts/LufgaRegular.ttf' });

export const lufgaExtraBold = LocalFont({
  src: '../assets/fonts/LufgaExtraBold.ttf',
});

export const lufgaBold = LocalFont({
  src: '../assets/fonts/LufgaBold.ttf',
});

export const lufgaSemiBold = LocalFont({
  src: '../assets/fonts/LufgaBold.ttf',
});

export const fonts = {
  body: `${lufga.style.fontFamily}, sans-serif`,
  semiHeading: `${lufgaSemiBold.style.fontFamily}, sans-serif`,
  heading: `${lufgaBold.style.fontFamily}, sans-serif`,
  extraHeading: `${lufgaExtraBold.style.fontFamily}, sans-serif`,
};

export const lineHeight = {
  extraTiny: 20,
  tiny: 22,
  small: 24,
  sMedium: 26,
  medium: 28,
  large: 32,
  extraLarge: 40,
  huge: 48,
} as const;

export const fontConfig = {
  size: {
    ...spacing,
    true: 16,
  },
  lineHeight,
};

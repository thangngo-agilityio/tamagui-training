import { spacing } from './metric';

export const fonts = {
  body: 'Lufga-Regular',
  semiHeading: 'Lufga-Semibold',
  heading: 'Lufga-Bold',
  extraHeading: 'Lufga-Extrabold',
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

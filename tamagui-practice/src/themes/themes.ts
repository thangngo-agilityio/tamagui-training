import { webDarkTheme } from './dark_web.theme';
import { webTheme } from './web.theme';

export const customThemes = {
  light: {},
  dark: {},
  ...webTheme,
  ...webDarkTheme,
};

import { CustomTheme } from '../models';
import { colors } from './color';

export const webTheme: CustomTheme<'light_web'> = {
  light_web: {
    // Background
    backgroundBody: colors.white1,

    // Text
    textDefault: colors.blue2,
    errorColor: colors.red1,

    // Button
    buttonPrimary: colors.green1,
  },
};

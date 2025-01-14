import { CustomTheme } from '../models';
import { colors } from './color';

export const webTheme: CustomTheme<'light_web'> = {
  light_web: {
    // Background
    backgroundBody: colors.white1,
    backgroundPrimary: colors.orange1,
    backgroundError: colors.red2,
    backgroundAuth: colors.green1,

    // Text
    textDefault: colors.blue2,
    textError: colors.red1,
    textPrimary: colors.white1,
    textSecondary: colors.grey1,
    textTertiary: colors.orange1,
    textQuaternary: colors.black2,
    textQuinary: colors.green1,
    textSenary: colors.grey6,
    textSeptenary: colors.green6,
    textProduct: colors.grey5,
    textOrderSuccess: colors.black1,
    textProductCard: colors.black3,
    textFooter: colors.green4,
    textCopyright: colors.green5,

    // Button
    buttonPrimary: colors.green1,

    // Border
    borderIcon: colors.grey11,
  },
};

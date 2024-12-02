import { CustomTheme } from '@/models';
import { colors } from './color';

export const webDarkTheme: CustomTheme<'dark_web'> = {
  dark_web: {
    // Background
    backgroundBody: colors.black1,
    backgroundPrimary: colors.orange1,
    backgroundError: colors.red2,
    backgroundAuth: colors.green1,
    backgroundShowroom: colors.grey3,
    backgroundShowroomSecondary: colors.grey4,
    backgroundTotalQuantity: colors.red1,
    backgroundFilter: colors.grey14,
    BackgroundItemCategory: colors.white3,
    BackgroundFooter: colors.grey3,
    backgroundFooterItem: colors.green8,
    backgroundButtonPagination: colors.grey8,
    backgroundButtonQuantity: colors.white5,
    backgroundOptionPrimary: colors.orange2,
    backgroundOptionSecondary: colors.blue1,
    backgroundOptionTertiary: colors.grey14,
    backgroundMenu: colors.grey8,

    // Text
    textDefault: colors.white4,
    textError: colors.red1,
    textPrimary: colors.black2,
    textSecondary: colors.grey11,
    textTertiary: colors.orange1,
    textQuaternary: colors.white3,
    textQuinary: colors.green2,
    textSenary: colors.grey6,
    textSeptenary: colors.white5,
    textProduct: colors.grey5,
    textProductCard: colors.black3,
    textFooter: colors.green4,
    textCopyright: colors.green5,
    textPlaceholder: colors.grey3,
    textLabel: colors.white3,
    textInput: colors.grey2,
    textFooterSecondary: colors.grey8,
    textQuantity: colors.black2,
    textTotalCart: colors.orange1,
    textOrderSuccess: colors.grey7,
    textPagination: colors.white3,

    // Button
    buttonPrimary: colors.green1,
    BackgroundShowroomSection: colors.green7,

    // Border
    borderPrimaryInput: colors.grey11,
    borderSecondaryInput: colors.grey12,
    borderErrorInput: colors.red4,
    borderColorInput: colors.green1,
    borderButtonCart: colors.orange1,
    borderLineCart: colors.grey15,
  },
};

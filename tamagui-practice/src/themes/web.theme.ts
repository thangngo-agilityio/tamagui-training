import { CustomTheme } from '../models';
import { colors } from './color';

export const webTheme: CustomTheme<'light_web'> = {
  light_web: {
    // Background
    backgroundBody: colors.white1,
    backgroundPrimary: colors.orange1,
    backgroundError: colors.red2,
    backgroundAuth: colors.green1,
    backgroundShowroom: colors.grey10,
    backgroundShowroomSecondary: colors.grey9,
    backgroundTotalQuantity: colors.red1,
    backgroundFilter: colors.white4,
    BackgroundItemCategory: colors.white3,
    BackgroundFooter: colors.white2,
    backgroundFooterItem: colors.green8,
    backgroundButtonPagination: colors.grey8,
    backgroundButtonQuantity: colors.white5,
    backgroundOptionPrimary: colors.orange2,
    backgroundOptionSecondary: colors.blue1,
    backgroundOptionTertiary: colors.grey14,
    backgroundMenu: colors.grey8,

    // Text
    textDefault: colors.blue2,
    textError: colors.red1,
    textPrimary: colors.white1,
    textSecondary: colors.grey1,
    textTertiary: colors.orange1,
    textQuaternary: colors.grey4,
    textQuinary: colors.green1,
    textSenary: colors.grey6,
    textSeptenary: colors.green6,
    textProduct: colors.grey5,
    textProductCard: colors.black3,
    textFooter: colors.green4,
    textCopyright: colors.green5,
    textPlaceholder: colors.grey3,
    textLabel: colors.grey4,
    textInput: colors.grey2,
    textFooterSecondary: colors.grey8,
    textQuantity: colors.black2,
    textTotalCart: colors.orange1,
    textOrderSuccess: colors.grey7,

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

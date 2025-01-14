export type GeneralTheme = {
  // background
  backgroundBody: string;
  backgroundPrimary: string;
  backgroundError: string;
  backgroundAuth: string;
  backgroundShowroom: string;
  backgroundShowroomSecondary: string;
  backgroundTotalQuantity: string;
  backgroundFilter: string;
  BackgroundItemCategory: string;
  BackgroundFooter: string;
  backgroundFooterItem: string;
  backgroundButtonPagination: string;
  backgroundButtonQuantity: string;
  backgroundOptionPrimary: string;
  backgroundOptionSecondary: string;
  backgroundOptionTertiary: string;
  backgroundMenu: string;

  // Text
  textDefault: string;
  textError: string;
  textPrimary: string;
  textSecondary: string;
  textTertiary: string;
  textQuaternary: string;
  textQuinary: string;
  textSenary: string;
  textSeptenary: string;
  textProduct: string;
  textProductCard: string;
  textFooter: string;
  textCopyright: string;
  textPlaceholder: string;
  textLabel: string;
  textInput: string;
  textFooterSecondary: string;
  textQuantity: string;
  textTotalCart: string;
  textOrderSuccess: string;
  textPagination: string;

  // Button
  buttonPrimary: string;
  BackgroundShowroomSection: string;

  // Border
  borderPrimaryInput: string;
  borderSecondaryInput: string;
  borderErrorInput: string;
  borderColorInput: string;
  borderButtonCart: string;
  borderLineCart: string;
};

export type CustomTheme<T extends string> = {
  [K in T]: GeneralTheme;
};

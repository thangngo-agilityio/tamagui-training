export type GeneralTheme = {
  // background
  backgroundBody: string;
  backgroundPrimary: string;
  backgroundError: string;
  backgroundAuth: string;

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
  textOrderSuccess: string;
  textProductCard: string;
  textFooter: string;
  textCopyright: string;

  // Button
  buttonPrimary: string;

  // Border
  borderIcon: string;
};

export type CustomTheme<T extends string> = {
  [K in T]: GeneralTheme;
};

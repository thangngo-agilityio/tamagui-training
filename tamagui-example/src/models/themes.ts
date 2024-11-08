export type GeneralTheme = {
  // background
  backgroundBody: string;

  // Text
  textDefault: string;
  errorColor: string;

  // Button
  buttonPrimary: string;
};

export type CustomTheme<T extends string> = {
  [K in T]: GeneralTheme;
};

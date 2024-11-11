const whitePallet = {
  white1: '#FFF',
  white2: '#FAFAFA',
  white3: '#F0F0F0',
  white4: '#F9F9F9',
  white5: '#F0F0F5',
};

const blackPallet = {
  black1: '#181725',
  black2: '#000000',
  black3: '#121212',
  black4: 'rgba(0, 0 , 0, .6)',
};

const greyPallet = {
  grey1: '#3A3A3A',
  grey2: '#3A3335',
  grey3: '#808080',
  grey4: '#908E8E',
  grey5: '#898989',
  grey6: '#AAAAAA',
  grey7: '#7C7C7C',
  grey8: '#D4D6D4',
  grey9: '#F2F0E0',
  grey10: '#EFE5D5',
  grey11: '#EDE8E9',
  grey12: '#C4C4C4',
  grey13: '#C6D8D3',
  grey14: '#58514B',
};

const greenPallet = {
  green1: '#284F49',
  green2: '#A4EDA3',
  green3: '#5D6544',
  green4: '#B6C197',
  green5: '#B5C096',
  green6: '#4D533C',
  green7: '#5B5E3E',
  green8: '#444A34',
};

const bluePallet = {
  blue1: '#56CCF2',
  blue2: 'rgba(33, 56, 66, 60%)',
};

const orangePallet = {
  orange1: '#E68314',
  orange2: '#B5710D',
};

const redPallet = {
  red1: '#EB5E55',
  red2: '#E53E3E',
  red3: '#FF4747',
  red4: '#9B1717',
};

export const colors = {
  ...whitePallet,
  ...blackPallet,
  ...greyPallet,
  ...greenPallet,
  ...bluePallet,
  ...orangePallet,
  ...redPallet,
} as const;

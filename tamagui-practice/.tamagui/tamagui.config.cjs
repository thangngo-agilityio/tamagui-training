var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/.pnpm/next@14.2.3_@babel+core@7.26.0_babel-plugin-macros@3.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/font/local/index.js
var require_local = __commonJS({
  "node_modules/.pnpm/next@14.2.3_@babel+core@7.26.0_babel-plugin-macros@3.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/font/local/index.js"() {
  }
});

// src/tamagui.config.ts
var tamagui_config_exports = {};
__export(tamagui_config_exports, {
  default: () => tamagui_config_default
});
module.exports = __toCommonJS(tamagui_config_exports);
var import_web5 = require("@tamagui/core");

// node_modules/.pnpm/@tamagui+react-native-media-driver@1.116.14_react-dom@18.3.1_react@18.3.1__react-native@0.76._ydtmi6b5jmgmcoeseegnw5xvre/node_modules/@tamagui/react-native-media-driver/dist/esm/createMedia.mjs
var import_web = require("@tamagui/core");

// node_modules/.pnpm/@tamagui+react-native-media-driver@1.116.14_react-dom@18.3.1_react@18.3.1__react-native@0.76._ydtmi6b5jmgmcoeseegnw5xvre/node_modules/@tamagui/react-native-media-driver/dist/esm/matchMedia.mjs
var matchMedia = globalThis.matchMedia;

// node_modules/.pnpm/@tamagui+react-native-media-driver@1.116.14_react-dom@18.3.1_react@18.3.1__react-native@0.76._ydtmi6b5jmgmcoeseegnw5xvre/node_modules/@tamagui/react-native-media-driver/dist/esm/createMedia.mjs
function createMedia(media2) {
  return (0, import_web.setupMatchMedia)(matchMedia), media2;
}
__name(createMedia, "createMedia");

// src/themes/breakpoint.ts
var media = {
  // X-Small devices (portrait phones, less than 576px)
  // No media query for `xs` since this is the default
  gtXs: { minWidth: 414 },
  // Small devices (landscape phones, 576px and up)
  gtSm: { minWidth: 576 },
  // Medium devices (tablets, 768px and up)
  md: { maxWidth: 768 - 1 },
  gtMd: { minWidth: 768 },
  // Large devices (desktops, 992px and up)
  lg: { maxWidth: 992 - 1 },
  gtLg: { minWidth: 992 },
  // X-Large devices (large desktops, 1200px and up)
  gtXl: { minWidth: 1200 },
  // XX-Large devices (larger desktops, 1400px and up)
  gtXxl: { minWidth: 1400 },
  landscape: { orientation: "landscape" }
};

// src/themes/fontConfig.ts
var import_local = __toESM(require_local());

// src/themes/metric.ts
var spacing = {
  px: 1,
  "0": 0,
  "0.5": 2,
  "1": 10,
  "2": 12,
  "3": 14,
  "4": 16,
  "5": 18,
  "6": 20,
  "7": 22,
  "8": 24,
  "9": 34,
  "10": 36,
  "11": 40,
  "12": 50,
  "13": 60,
  "14": 80
};
var radius = {
  none: 0,
  xs: 5,
  sm: 8,
  md: 9,
  lg: 10,
  xl: 12,
  "2xl": 16,
  "3xl": 34.5,
  full: 9999,
  circle: "50%"
};
var size = {
  small: 8,
  medium: 16,
  large: 32
};
var space = {
  small: 4,
  medium: 8,
  large: 16
};
var zIndex = {
  low: 1,
  medium: 10,
  high: 100
};

// src/themes/fontConfig.ts
var lufga = (0, import_local.default)({ src: "../assets/fonts/LufgaRegular.ttf" });
var lufgaExtraBold = (0, import_local.default)({
  src: "../assets/fonts/LufgaExtraBold.ttf"
});
var lufgaBold = (0, import_local.default)({
  src: "../assets/fonts/LufgaBold.ttf"
});
var lufgaSemiBold = (0, import_local.default)({
  src: "../assets/fonts/LufgaBold.ttf"
});
var fonts = {
  body: `${lufga.style.fontFamily}, sans-serif`,
  semiHeading: `${lufgaSemiBold.style.fontFamily}, sans-serif`,
  heading: `${lufgaBold.style.fontFamily}, sans-serif`,
  extraHeading: `${lufgaExtraBold.style.fontFamily}, sans-serif`
};
var lineHeight = {
  extraTiny: 20,
  tiny: 22,
  small: 24,
  sMedium: 26,
  medium: 28,
  large: 32,
  extraLarge: 40,
  huge: 48
};
var fontConfig = {
  size: {
    ...spacing,
    true: 16
  },
  lineHeight
};

// src/themes/color.ts
var whitePallet = {
  white1: "#FFF",
  white2: "#FAFAFA",
  white3: "#F0F0F0",
  white4: "#F9F9F9",
  white5: "#F0F0F5"
};
var blackPallet = {
  black1: "#181725",
  black2: "#000000",
  black3: "#121212",
  black4: "rgba(0, 0 , 0, .6)"
};
var greyPallet = {
  grey1: "#3A3A3A",
  grey2: "#3A3335",
  grey3: "#808080",
  grey4: "#908E8E",
  grey5: "#898989",
  grey6: "#AAAAAA",
  grey7: "#7C7C7C",
  grey8: "#D4D6D4",
  grey9: "#F2F0E0",
  grey10: "#EFE5D5",
  grey11: "#EDE8E9",
  grey12: "#C4C4C4",
  grey13: "#C6D8D3",
  grey14: "#58514B",
  grey15: "rgba(120, 115, 137, 20%)"
};
var greenPallet = {
  green1: "#284F49",
  green2: "#A4EDA3",
  green3: "#5D6544",
  green4: "#B6C197",
  green5: "#B5C096",
  green6: "#4D533C",
  green7: "#5B5E3E",
  green8: "#444A34"
};
var bluePallet = {
  blue1: "#56CCF2",
  blue2: "rgba(33, 56, 66, 60%)"
};
var orangePallet = {
  orange1: "#E68314",
  orange2: "#B5710D"
};
var redPallet = {
  red1: "#EB5E55",
  red2: "#E53E3E",
  red3: "#FF4747",
  red4: "#9B1717"
};
var colors = {
  ...whitePallet,
  ...blackPallet,
  ...greyPallet,
  ...greenPallet,
  ...bluePallet,
  ...orangePallet,
  ...redPallet
};

// src/themes/web.theme.ts
var webTheme = {
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
    borderLineCart: colors.grey15
  }
};

// src/themes/themes.ts
var customThemes = {
  light: {},
  dark: {},
  ...webTheme
};

// node_modules/.pnpm/@tamagui+shorthands@1.116.14/node_modules/@tamagui/shorthands/dist/esm/v2.mjs
var shorthands = {
  // web-only
  ussel: "userSelect",
  cur: "cursor",
  // tamagui
  pe: "pointerEvents",
  // text
  col: "color",
  ff: "fontFamily",
  fos: "fontSize",
  fost: "fontStyle",
  fow: "fontWeight",
  ls: "letterSpacing",
  lh: "lineHeight",
  ta: "textAlign",
  tt: "textTransform",
  ww: "wordWrap",
  // view
  ac: "alignContent",
  ai: "alignItems",
  als: "alignSelf",
  b: "bottom",
  bg: "backgroundColor",
  bbc: "borderBottomColor",
  bblr: "borderBottomLeftRadius",
  bbrr: "borderBottomRightRadius",
  bbw: "borderBottomWidth",
  blc: "borderLeftColor",
  blw: "borderLeftWidth",
  bc: "borderColor",
  br: "borderRadius",
  bs: "borderStyle",
  brw: "borderRightWidth",
  brc: "borderRightColor",
  btc: "borderTopColor",
  btlr: "borderTopLeftRadius",
  btrr: "borderTopRightRadius",
  btw: "borderTopWidth",
  bw: "borderWidth",
  dsp: "display",
  f: "flex",
  fb: "flexBasis",
  fd: "flexDirection",
  fg: "flexGrow",
  fs: "flexShrink",
  fw: "flexWrap",
  h: "height",
  jc: "justifyContent",
  l: "left",
  m: "margin",
  mah: "maxHeight",
  maw: "maxWidth",
  mb: "marginBottom",
  mih: "minHeight",
  miw: "minWidth",
  ml: "marginLeft",
  mr: "marginRight",
  mt: "marginTop",
  mx: "marginHorizontal",
  my: "marginVertical",
  o: "opacity",
  ov: "overflow",
  p: "padding",
  pb: "paddingBottom",
  pl: "paddingLeft",
  pos: "position",
  pr: "paddingRight",
  pt: "paddingTop",
  px: "paddingHorizontal",
  py: "paddingVertical",
  r: "right",
  shac: "shadowColor",
  shar: "shadowRadius",
  shof: "shadowOffset",
  shop: "shadowOpacity",
  t: "top",
  w: "width",
  zi: "zIndex"
};
shorthands.bls = "borderLeftStyle";
shorthands.brs = "borderRightStyle";
shorthands.bts = "borderTopStyle";
shorthands.bbs = "borderBottomStyle";
shorthands.bxs = "boxSizing";
shorthands.bxsh = "boxShadow";
shorthands.ox = "overflowX";
shorthands.oy = "overflowY";

// node_modules/.pnpm/@tamagui+colors@1.116.14/node_modules/@tamagui/colors/dist/esm/dark/blue.mjs
var blue = {
  blue1: "hsl(212, 35.0%, 9.2%)",
  blue2: "hsl(216, 50.0%, 11.8%)",
  blue3: "hsl(214, 59.4%, 15.3%)",
  blue4: "hsl(214, 65.8%, 17.9%)",
  blue5: "hsl(213, 71.2%, 20.2%)",
  blue6: "hsl(212, 77.4%, 23.1%)",
  blue7: "hsl(211, 85.1%, 27.4%)",
  blue8: "hsl(211, 89.7%, 34.1%)",
  blue9: "hsl(206, 100%, 50.0%)",
  blue10: "hsl(209, 100%, 60.6%)",
  blue11: "hsl(210, 100%, 66.1%)",
  blue12: "hsl(206, 98.0%, 95.8%)"
};

// node_modules/.pnpm/@tamagui+colors@1.116.14/node_modules/@tamagui/colors/dist/esm/dark/gray.mjs
var gray = {
  gray1: "hsl(0, 0%, 8.5%)",
  gray2: "hsl(0, 0%, 11.0%)",
  gray3: "hsl(0, 0%, 13.6%)",
  gray4: "hsl(0, 0%, 15.8%)",
  gray5: "hsl(0, 0%, 17.9%)",
  gray6: "hsl(0, 0%, 20.5%)",
  gray7: "hsl(0, 0%, 24.3%)",
  gray8: "hsl(0, 0%, 31.2%)",
  gray9: "hsl(0, 0%, 43.9%)",
  gray10: "hsl(0, 0%, 49.4%)",
  gray11: "hsl(0, 0%, 62.8%)",
  gray12: "hsl(0, 0%, 93.0%)"
};

// node_modules/.pnpm/@tamagui+colors@1.116.14/node_modules/@tamagui/colors/dist/esm/dark/green.mjs
var green = {
  green1: "hsl(146, 30.0%, 7.4%)",
  green2: "hsl(155, 44.2%, 8.4%)",
  green3: "hsl(155, 46.7%, 10.9%)",
  green4: "hsl(154, 48.4%, 12.9%)",
  green5: "hsl(154, 49.7%, 14.9%)",
  green6: "hsl(154, 50.9%, 17.6%)",
  green7: "hsl(153, 51.8%, 21.8%)",
  green8: "hsl(151, 51.7%, 28.4%)",
  green9: "hsl(151, 55.0%, 41.5%)",
  green10: "hsl(151, 49.3%, 46.5%)",
  green11: "hsl(151, 50.0%, 53.2%)",
  green12: "hsl(137, 72.0%, 94.0%)"
};

// node_modules/.pnpm/@tamagui+colors@1.116.14/node_modules/@tamagui/colors/dist/esm/dark/orange.mjs
var orange = {
  orange1: "hsl(30, 70.0%, 7.2%)",
  orange2: "hsl(28, 100%, 8.4%)",
  orange3: "hsl(26, 91.1%, 11.6%)",
  orange4: "hsl(25, 88.3%, 14.1%)",
  orange5: "hsl(24, 87.6%, 16.6%)",
  orange6: "hsl(24, 88.6%, 19.8%)",
  orange7: "hsl(24, 92.4%, 24.0%)",
  orange8: "hsl(25, 100%, 29.0%)",
  orange9: "hsl(24, 94.0%, 50.0%)",
  orange10: "hsl(24, 100%, 58.5%)",
  orange11: "hsl(24, 100%, 62.2%)",
  orange12: "hsl(24, 97.0%, 93.2%)"
};

// node_modules/.pnpm/@tamagui+colors@1.116.14/node_modules/@tamagui/colors/dist/esm/dark/pink.mjs
var pink = {
  pink1: "hsl(318, 25.0%, 9.6%)",
  pink2: "hsl(319, 32.2%, 11.6%)",
  pink3: "hsl(319, 41.0%, 16.0%)",
  pink4: "hsl(320, 45.4%, 18.7%)",
  pink5: "hsl(320, 49.0%, 21.1%)",
  pink6: "hsl(321, 53.6%, 24.4%)",
  pink7: "hsl(321, 61.1%, 29.7%)",
  pink8: "hsl(322, 74.9%, 37.5%)",
  pink9: "hsl(322, 65.0%, 54.5%)",
  pink10: "hsl(323, 72.8%, 59.2%)",
  pink11: "hsl(325, 90.0%, 66.4%)",
  pink12: "hsl(322, 90.0%, 95.8%)"
};

// node_modules/.pnpm/@tamagui+colors@1.116.14/node_modules/@tamagui/colors/dist/esm/dark/purple.mjs
var purple = {
  purple1: "hsl(284, 20.0%, 9.6%)",
  purple2: "hsl(283, 30.0%, 11.8%)",
  purple3: "hsl(281, 37.5%, 16.5%)",
  purple4: "hsl(280, 41.2%, 20.0%)",
  purple5: "hsl(279, 43.8%, 23.3%)",
  purple6: "hsl(277, 46.4%, 27.5%)",
  purple7: "hsl(275, 49.3%, 34.6%)",
  purple8: "hsl(272, 52.1%, 45.9%)",
  purple9: "hsl(272, 51.0%, 54.0%)",
  purple10: "hsl(273, 57.3%, 59.1%)",
  purple11: "hsl(275, 80.0%, 71.0%)",
  purple12: "hsl(279, 75.0%, 95.7%)"
};

// node_modules/.pnpm/@tamagui+colors@1.116.14/node_modules/@tamagui/colors/dist/esm/dark/red.mjs
var red = {
  red1: "hsl(353, 23.0%, 9.8%)",
  red2: "hsl(357, 34.4%, 12.0%)",
  red3: "hsl(356, 43.4%, 16.4%)",
  red4: "hsl(356, 47.6%, 19.2%)",
  red5: "hsl(356, 51.1%, 21.9%)",
  red6: "hsl(356, 55.2%, 25.9%)",
  red7: "hsl(357, 60.2%, 31.8%)",
  red8: "hsl(358, 65.0%, 40.4%)",
  red9: "hsl(358, 75.0%, 59.0%)",
  red10: "hsl(358, 85.3%, 64.0%)",
  red11: "hsl(358, 100%, 69.5%)",
  red12: "hsl(351, 89.0%, 96.0%)"
};

// node_modules/.pnpm/@tamagui+colors@1.116.14/node_modules/@tamagui/colors/dist/esm/dark/yellow.mjs
var yellow = {
  yellow1: "hsl(45, 100%, 5.5%)",
  yellow2: "hsl(46, 100%, 6.7%)",
  yellow3: "hsl(45, 100%, 8.7%)",
  yellow4: "hsl(45, 100%, 10.4%)",
  yellow5: "hsl(47, 100%, 12.1%)",
  yellow6: "hsl(49, 100%, 14.3%)",
  yellow7: "hsl(49, 90.3%, 18.4%)",
  yellow8: "hsl(50, 100%, 22.0%)",
  yellow9: "hsl(53, 92.0%, 50.0%)",
  yellow10: "hsl(54, 100%, 68.0%)",
  yellow11: "hsl(48, 100%, 47.0%)",
  yellow12: "hsl(53, 100%, 91.0%)"
};

// node_modules/.pnpm/@tamagui+colors@1.116.14/node_modules/@tamagui/colors/dist/esm/light/blue.mjs
var blue2 = {
  blue1: "hsl(206, 100%, 99.2%)",
  blue2: "hsl(210, 100%, 98.0%)",
  blue3: "hsl(209, 100%, 96.5%)",
  blue4: "hsl(210, 98.8%, 94.0%)",
  blue5: "hsl(209, 95.0%, 90.1%)",
  blue6: "hsl(209, 81.2%, 84.5%)",
  blue7: "hsl(208, 77.5%, 76.9%)",
  blue8: "hsl(206, 81.9%, 65.3%)",
  blue9: "hsl(206, 100%, 50.0%)",
  blue10: "hsl(208, 100%, 47.3%)",
  blue11: "hsl(211, 100%, 43.2%)",
  blue12: "hsl(211, 100%, 15.0%)"
};

// node_modules/.pnpm/@tamagui+colors@1.116.14/node_modules/@tamagui/colors/dist/esm/light/gray.mjs
var gray2 = {
  gray1: "hsl(0, 0%, 99.0%)",
  gray2: "hsl(0, 0%, 97.3%)",
  gray3: "hsl(0, 0%, 95.1%)",
  gray4: "hsl(0, 0%, 93.0%)",
  gray5: "hsl(0, 0%, 90.9%)",
  gray6: "hsl(0, 0%, 88.7%)",
  gray7: "hsl(0, 0%, 85.8%)",
  gray8: "hsl(0, 0%, 78.0%)",
  gray9: "hsl(0, 0%, 56.1%)",
  gray10: "hsl(0, 0%, 52.3%)",
  gray11: "hsl(0, 0%, 43.5%)",
  gray12: "hsl(0, 0%, 9.0%)"
};

// node_modules/.pnpm/@tamagui+colors@1.116.14/node_modules/@tamagui/colors/dist/esm/light/green.mjs
var green2 = {
  green1: "hsl(136, 50.0%, 98.9%)",
  green2: "hsl(138, 62.5%, 96.9%)",
  green3: "hsl(139, 55.2%, 94.5%)",
  green4: "hsl(140, 48.7%, 91.0%)",
  green5: "hsl(141, 43.7%, 86.0%)",
  green6: "hsl(143, 40.3%, 79.0%)",
  green7: "hsl(146, 38.5%, 69.0%)",
  green8: "hsl(151, 40.2%, 54.1%)",
  green9: "hsl(151, 55.0%, 41.5%)",
  green10: "hsl(152, 57.5%, 37.6%)",
  green11: "hsl(153, 67.0%, 28.5%)",
  green12: "hsl(155, 40.0%, 14.0%)"
};

// node_modules/.pnpm/@tamagui+colors@1.116.14/node_modules/@tamagui/colors/dist/esm/light/orange.mjs
var orange2 = {
  orange1: "hsl(24, 70.0%, 99.0%)",
  orange2: "hsl(24, 83.3%, 97.6%)",
  orange3: "hsl(24, 100%, 95.3%)",
  orange4: "hsl(25, 100%, 92.2%)",
  orange5: "hsl(25, 100%, 88.2%)",
  orange6: "hsl(25, 100%, 82.8%)",
  orange7: "hsl(24, 100%, 75.3%)",
  orange8: "hsl(24, 94.5%, 64.3%)",
  orange9: "hsl(24, 94.0%, 50.0%)",
  orange10: "hsl(24, 100%, 46.5%)",
  orange11: "hsl(24, 100%, 37.0%)",
  orange12: "hsl(15, 60.0%, 17.0%)"
};

// node_modules/.pnpm/@tamagui+colors@1.116.14/node_modules/@tamagui/colors/dist/esm/light/pink.mjs
var pink2 = {
  pink1: "hsl(322, 100%, 99.4%)",
  pink2: "hsl(323, 100%, 98.4%)",
  pink3: "hsl(323, 86.3%, 96.5%)",
  pink4: "hsl(323, 78.7%, 94.2%)",
  pink5: "hsl(323, 72.2%, 91.1%)",
  pink6: "hsl(323, 66.3%, 86.6%)",
  pink7: "hsl(323, 62.0%, 80.1%)",
  pink8: "hsl(323, 60.3%, 72.4%)",
  pink9: "hsl(322, 65.0%, 54.5%)",
  pink10: "hsl(322, 63.9%, 50.7%)",
  pink11: "hsl(322, 75.0%, 46.0%)",
  pink12: "hsl(320, 70.0%, 13.5%)"
};

// node_modules/.pnpm/@tamagui+colors@1.116.14/node_modules/@tamagui/colors/dist/esm/light/purple.mjs
var purple2 = {
  purple1: "hsl(280, 65.0%, 99.4%)",
  purple2: "hsl(276, 100%, 99.0%)",
  purple3: "hsl(276, 83.1%, 97.0%)",
  purple4: "hsl(275, 76.4%, 94.7%)",
  purple5: "hsl(275, 70.8%, 91.8%)",
  purple6: "hsl(274, 65.4%, 87.8%)",
  purple7: "hsl(273, 61.0%, 81.7%)",
  purple8: "hsl(272, 60.0%, 73.5%)",
  purple9: "hsl(272, 51.0%, 54.0%)",
  purple10: "hsl(272, 46.8%, 50.3%)",
  purple11: "hsl(272, 50.0%, 45.8%)",
  purple12: "hsl(272, 66.0%, 16.0%)"
};

// node_modules/.pnpm/@tamagui+colors@1.116.14/node_modules/@tamagui/colors/dist/esm/light/red.mjs
var red2 = {
  red1: "hsl(359, 100%, 99.4%)",
  red2: "hsl(359, 100%, 98.6%)",
  red3: "hsl(360, 100%, 96.8%)",
  red4: "hsl(360, 97.9%, 94.8%)",
  red5: "hsl(360, 90.2%, 91.9%)",
  red6: "hsl(360, 81.7%, 87.8%)",
  red7: "hsl(359, 74.2%, 81.7%)",
  red8: "hsl(359, 69.5%, 74.3%)",
  red9: "hsl(358, 75.0%, 59.0%)",
  red10: "hsl(358, 69.4%, 55.2%)",
  red11: "hsl(358, 65.0%, 48.7%)",
  red12: "hsl(354, 50.0%, 14.6%)"
};

// node_modules/.pnpm/@tamagui+colors@1.116.14/node_modules/@tamagui/colors/dist/esm/light/yellow.mjs
var yellow2 = {
  yellow1: "hsl(60, 54.0%, 98.5%)",
  yellow2: "hsl(52, 100%, 95.5%)",
  yellow3: "hsl(55, 100%, 90.9%)",
  yellow4: "hsl(54, 100%, 86.6%)",
  yellow5: "hsl(52, 97.9%, 82.0%)",
  yellow6: "hsl(50, 89.4%, 76.1%)",
  yellow7: "hsl(47, 80.4%, 68.0%)",
  yellow8: "hsl(48, 100%, 46.1%)",
  yellow9: "hsl(53, 92.0%, 50.0%)",
  yellow10: "hsl(50, 100%, 48.5%)",
  yellow11: "hsl(42, 100%, 29.0%)",
  yellow12: "hsl(40, 55.0%, 13.5%)"
};

// node_modules/.pnpm/@tamagui+create-theme@1.116.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@tamagui/create-theme/dist/esm/isMinusZero.mjs
function isMinusZero(value) {
  return 1 / value === Number.NEGATIVE_INFINITY;
}
__name(isMinusZero, "isMinusZero");

// node_modules/.pnpm/@tamagui+create-theme@1.116.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@tamagui/create-theme/dist/esm/themeInfo.mjs
var THEME_INFO = /* @__PURE__ */ new Map();
var getThemeInfo = /* @__PURE__ */ __name((theme, name) => THEME_INFO.get(name || JSON.stringify(theme)), "getThemeInfo");
var setThemeInfo = /* @__PURE__ */ __name((theme, info) => {
  const next = {
    ...info,
    cache: /* @__PURE__ */ new Map()
  };
  THEME_INFO.set(info.name || JSON.stringify(theme), next), THEME_INFO.set(JSON.stringify(info.definition), next);
}, "setThemeInfo");

// node_modules/.pnpm/@tamagui+create-theme@1.116.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@tamagui/create-theme/dist/esm/createTheme.mjs
var identityCache = /* @__PURE__ */ new Map();
function createThemeWithPalettes(palettes, defaultPalette, definition, options, name, skipCache = false) {
  if (!palettes[defaultPalette]) throw new Error(`No pallete: ${defaultPalette}`);
  const newDef = {
    ...definition
  };
  for (const key in definition) {
    let val = definition[key];
    if (typeof val == "string" && val[0] === "$") {
      const [altPaletteName$, altPaletteIndex] = val.split("."), altPaletteName = altPaletteName$.slice(1), parentName = defaultPalette.split("_")[0], altPalette = palettes[altPaletteName] || palettes[`${parentName}_${altPaletteName}`];
      if (altPalette) {
        const next = getValue(altPalette, +altPaletteIndex);
        typeof next < "u" && (newDef[key] = next);
      }
    }
  }
  return createTheme(palettes[defaultPalette], newDef, options, name, skipCache);
}
__name(createThemeWithPalettes, "createThemeWithPalettes");
function createTheme(palette, definition, options, name, skipCache = false) {
  const cacheKey = skipCache ? "" : JSON.stringify([name, palette, definition, options]);
  if (!skipCache && identityCache.has(cacheKey)) return identityCache.get(cacheKey);
  const theme = {
    ...Object.fromEntries(Object.entries(definition).map(([key, offset]) => [key, getValue(palette, offset)])),
    ...options == null ? void 0 : options.nonInheritedValues
  };
  return setThemeInfo(theme, {
    palette,
    definition,
    options,
    name
  }), cacheKey && identityCache.set(cacheKey, theme), theme;
}
__name(createTheme, "createTheme");
var getValue = /* @__PURE__ */ __name((palette, value) => {
  if (!palette) throw new Error("No palette!");
  if (typeof value == "string") return value;
  const max = palette.length - 1, next = (value === 0 ? !isMinusZero(value) : value >= 0) ? value : max + value, index = Math.min(Math.max(0, next), max);
  return palette[index];
}, "getValue");

// node_modules/.pnpm/@tamagui+create-theme@1.116.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@tamagui/create-theme/dist/esm/helpers.mjs
function objectEntries(obj) {
  return Object.entries(obj);
}
__name(objectEntries, "objectEntries");
function objectFromEntries(arr) {
  return Object.fromEntries(arr);
}
__name(objectFromEntries, "objectFromEntries");

// node_modules/.pnpm/@tamagui+create-theme@1.116.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@tamagui/create-theme/dist/esm/masks.mjs
var createMask = /* @__PURE__ */ __name((createMask2) => typeof createMask2 == "function" ? {
  name: createMask2.name || "unnamed",
  mask: createMask2
} : createMask2, "createMask");
var skipMask = {
  name: "skip-mask",
  mask: /* @__PURE__ */ __name((template, opts) => {
    const {
      skip
    } = opts;
    return Object.fromEntries(Object.entries(template).filter(([k]) => !skip || !(k in skip)).map(([k, v]) => [k, applyOverrides(k, v, opts)]));
  }, "mask")
};
function applyOverrides(key, value, opts) {
  var _a, _b, _c;
  let override, strategy = opts.overrideStrategy;
  const overrideSwap = (_a = opts.overrideSwap) == null ? void 0 : _a[key];
  if (typeof overrideSwap < "u") override = overrideSwap, strategy = "swap";
  else {
    const overrideShift = (_b = opts.overrideShift) == null ? void 0 : _b[key];
    if (typeof overrideShift < "u") override = overrideShift, strategy = "shift";
    else {
      const overrideDefault = (_c = opts.override) == null ? void 0 : _c[key];
      typeof overrideDefault < "u" && (override = overrideDefault, strategy = opts.overrideStrategy);
    }
  }
  return typeof override > "u" || typeof override == "string" ? value : strategy === "swap" ? override : value;
}
__name(applyOverrides, "applyOverrides");
var createIdentityMask = /* @__PURE__ */ __name(() => ({
  name: "identity-mask",
  mask: /* @__PURE__ */ __name((template, opts) => skipMask.mask(template, opts), "mask")
}), "createIdentityMask");
var createInverseMask = /* @__PURE__ */ __name(() => ({
  name: "inverse-mask",
  mask: /* @__PURE__ */ __name((template, opts) => {
    const inversed = objectFromEntries(objectEntries(template).map(([k, v]) => [k, -v]));
    return skipMask.mask(inversed, opts);
  }, "mask")
}), "createInverseMask");
var createShiftMask = /* @__PURE__ */ __name(({
  inverse
} = {}, defaultOptions) => ({
  name: "shift-mask",
  mask: /* @__PURE__ */ __name((template, opts) => {
    const {
      override,
      overrideStrategy = "shift",
      max: maxIn,
      palette,
      min = 0,
      strength = 1
    } = {
      ...defaultOptions,
      ...opts
    }, values = Object.entries(template), max = maxIn ?? (palette ? Object.values(palette).length - 1 : Number.POSITIVE_INFINITY), out = {};
    for (const [key, value] of values) {
      if (typeof value == "string") continue;
      if (typeof (override == null ? void 0 : override[key]) == "number") {
        const overrideVal = override[key];
        out[key] = overrideStrategy === "shift" ? value + overrideVal : overrideVal;
        continue;
      }
      if (typeof (override == null ? void 0 : override[key]) == "string") {
        out[key] = override[key];
        continue;
      }
      const isPositive = value === 0 ? !isMinusZero(value) : value >= 0, direction = isPositive ? 1 : -1, invert = inverse ? -1 : 1, next = value + strength * direction * invert, clamped = isPositive ? Math.max(min, Math.min(max, next)) : Math.min(-min, Math.max(-max, next));
      out[key] = clamped;
    }
    return skipMask.mask(out, opts);
  }, "mask")
}), "createShiftMask");
var createWeakenMask = /* @__PURE__ */ __name((defaultOptions) => ({
  name: "soften-mask",
  mask: createShiftMask({}, defaultOptions).mask
}), "createWeakenMask");
var createSoftenMask = createWeakenMask;
var createStrengthenMask = /* @__PURE__ */ __name((defaultOptions) => ({
  name: "strengthen-mask",
  mask: createShiftMask({
    inverse: true
  }, defaultOptions).mask
}), "createStrengthenMask");

// node_modules/.pnpm/@tamagui+create-theme@1.116.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@tamagui/create-theme/dist/esm/applyMask.mjs
function applyMask(theme, mask, options = {}, parentName, nextName) {
  const info = getThemeInfo(theme, parentName);
  if (!info) throw new Error(process.env.NODE_ENV !== "production" ? "No info found for theme, you must pass the theme created by createThemeFromPalette directly to extendTheme" : "\u274C Err2");
  const next = applyMaskStateless(info, mask, options, parentName);
  return setThemeInfo(next.theme, {
    definition: next.definition,
    palette: info.palette,
    name: nextName
  }), next.theme;
}
__name(applyMask, "applyMask");
function applyMaskStateless(info, mask, options = {}, parentName) {
  var _a;
  const skip = {
    ...options.skip
  };
  if ((_a = info.options) == null ? void 0 : _a.nonInheritedValues) for (const key in info.options.nonInheritedValues) skip[key] = 1;
  const maskOptions = {
    parentName,
    palette: info.palette,
    ...options,
    skip
  }, template = mask.mask(info.definition, maskOptions), theme = createTheme(info.palette, template);
  return {
    ...info,
    cache: /* @__PURE__ */ new Map(),
    definition: template,
    theme
  };
}
__name(applyMaskStateless, "applyMaskStateless");

// node_modules/.pnpm/@tamagui+create-theme@1.116.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@tamagui/create-theme/dist/esm/combineMasks.mjs
var combineMasks = /* @__PURE__ */ __name((...masks2) => ({
  name: "combine-mask",
  mask: /* @__PURE__ */ __name((template, opts) => {
    let current = getThemeInfo(template, opts.parentName), theme;
    for (const mask2 of masks2) {
      if (!current) throw new Error(`Nothing returned from mask: ${current}, for template: ${template} and mask: ${mask2.toString()}, given opts ${JSON.stringify(opts, null, 2)}`);
      const next = applyMaskStateless(current, mask2, opts);
      current = next, theme = next.theme;
    }
    return theme;
  }, "mask")
}), "combineMasks");

// node_modules/.pnpm/@tamagui+theme-builder@1.116.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@tamagui/theme-builder/dist/esm/ThemeBuilder.mjs
var _ThemeBuilder = class _ThemeBuilder {
  constructor(state) {
    this.state = state;
  }
  addPalettes(palettes) {
    return this.state.palettes = {
      // as {} prevents generic string key merge messing up types
      ...this.state.palettes,
      ...palettes
    }, this;
  }
  addTemplates(templates) {
    return this.state.templates = {
      // as {} prevents generic string key merge messing up types
      ...this.state.templates,
      ...templates
    }, this;
  }
  addMasks(masks2) {
    return this.state.masks = {
      // as {} prevents generic string key merge messing up types
      ...this.state.masks,
      ...objectFromEntries(objectEntries(masks2).map(([key, val]) => [key, createMask(val)]))
    }, this;
  }
  // for dev mode only really
  _addedThemes = [];
  addThemes(themes3) {
    return this._addedThemes.push({
      type: "themes",
      args: [themes3]
    }), this.state.themes = {
      // as {} prevents generic string key merge messing up types
      ...this.state.themes,
      ...themes3
    }, this;
  }
  // these wont be typed to save some complexity and because they don't need to be typed!
  addComponentThemes(childThemeDefinition, options) {
    return this.addChildThemes(childThemeDefinition, options), this;
  }
  addChildThemes(childThemeDefinition, options) {
    const currentThemes = this.state.themes;
    if (!currentThemes) throw new Error("No themes defined yet, use addThemes first to set your base themes");
    this._addedThemes.push({
      type: "childThemes",
      args: [childThemeDefinition, options]
    });
    const currentThemeNames = Object.keys(currentThemes), incomingThemeNames = Object.keys(childThemeDefinition), namesWithDefinitions = currentThemeNames.flatMap((prefix) => {
      const avoidNestingWithin = options == null ? void 0 : options.avoidNestingWithin;
      return avoidNestingWithin && avoidNestingWithin.some((avoidName) => prefix.startsWith(avoidName) || prefix.endsWith(avoidName)) ? [] : incomingThemeNames.map((subName) => {
        const fullName = `${prefix}_${subName}`, definition = childThemeDefinition[subName];
        return "avoidNestingWithin" in definition && definition.avoidNestingWithin.some((name) => prefix.startsWith(name) || prefix.endsWith(name)) ? null : [fullName, definition];
      }).filter(Boolean);
    }), childThemes = Object.fromEntries(namesWithDefinitions), next = {
      // as {} prevents generic string key merge messing up types
      ...this.state.themes,
      ...childThemes
    };
    return this.state.themes = next, this;
  }
  build() {
    var _a, _b, _c, _d;
    if (!this.state.themes) return {};
    const out = {}, maskedThemes = [];
    for (const themeName in this.state.themes) {
      const nameParts = themeName.split("_"), parentName = nameParts.slice(0, nameParts.length - 1).join("_"), definitions = this.state.themes[themeName], themeDefinition = Array.isArray(definitions) ? (() => {
        const found = definitions.find(
          // endWith match stronger than startsWith
          (d) => d.parent ? parentName.endsWith(d.parent) || parentName.startsWith(d.parent) : true
        );
        return found || null;
      })() : definitions;
      if (themeDefinition) if ("theme" in themeDefinition) out[themeName] = themeDefinition.theme;
      else if ("mask" in themeDefinition) maskedThemes.push({
        parentName,
        themeName,
        mask: themeDefinition
      });
      else {
        let {
          palette: paletteName = "",
          template: templateName,
          ...options
        } = themeDefinition;
        const parentDefinition = this.state.themes[parentName];
        if (!this.state.palettes) throw new Error(`No palettes defined for theme with palette expected: ${themeName}`);
        let palette = this.state.palettes[paletteName || ""], attemptParentName = `${parentName}_${paletteName}`;
        for (; !palette && attemptParentName; ) attemptParentName in this.state.palettes ? (palette = this.state.palettes[attemptParentName], paletteName = attemptParentName) : attemptParentName = attemptParentName.split("_").slice(0, -1).join("_");
        if (!palette) {
          const msg = process.env.NODE_ENV !== "production" ? `: ${themeName}: ${paletteName}
          Definition: ${JSON.stringify(themeDefinition)}
          Parent: ${JSON.stringify(parentDefinition)}
          Potential: (${Object.keys(this.state.palettes).join(", ")})` : "";
          throw new Error(`No palette for theme${msg}`);
        }
        const template = ((_a = this.state.templates) == null ? void 0 : _a[templateName]) ?? // fall back to finding the scheme specific on if it exists
        ((_b = this.state.templates) == null ? void 0 : _b[`${nameParts[0]}_${templateName}`]);
        if (!template) throw new Error(`No template for theme ${themeName}: ${templateName}`);
        out[themeName] = createThemeWithPalettes(this.state.palettes, paletteName, template, options, themeName, true);
      }
    }
    for (const {
      mask,
      themeName,
      parentName
    } of maskedThemes) {
      const parent = out[parentName];
      if (!parent) continue;
      const {
        mask: maskName,
        ...options
      } = mask;
      let maskFunction = (_c = this.state.masks) == null ? void 0 : _c[maskName];
      if (!maskFunction) throw new Error(`No mask ${maskName}`);
      const parentTheme = this.state.themes[parentName];
      if (parentTheme && "childOptions" in parentTheme) {
        const {
          mask: mask2,
          ...childOpts
        } = parentTheme.childOptions;
        mask2 && (maskFunction = (_d = this.state.masks) == null ? void 0 : _d[mask2]), Object.assign(options, childOpts);
      }
      out[themeName] = applyMask(parent, maskFunction, options, parentName, themeName);
    }
    return out;
  }
};
__name(_ThemeBuilder, "ThemeBuilder");
var ThemeBuilder = _ThemeBuilder;
function createThemeBuilder() {
  return new ThemeBuilder({});
}
__name(createThemeBuilder, "createThemeBuilder");

// node_modules/.pnpm/@tamagui+theme-builder@1.116.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@tamagui/theme-builder/dist/esm/masks.mjs
var masks = {
  identity: createIdentityMask(),
  soften: createSoftenMask(),
  soften2: createSoftenMask({
    strength: 2
  }),
  soften3: createSoftenMask({
    strength: 3
  }),
  strengthen: createStrengthenMask(),
  inverse: createInverseMask(),
  inverseSoften: combineMasks(createInverseMask(), createSoftenMask({
    strength: 2
  })),
  inverseSoften2: combineMasks(createInverseMask(), createSoftenMask({
    strength: 3
  })),
  inverseSoften3: combineMasks(createInverseMask(), createSoftenMask({
    strength: 4
  })),
  inverseStrengthen2: combineMasks(createInverseMask(), createStrengthenMask({
    strength: 2
  })),
  strengthenButSoftenBorder: createMask((template, options) => {
    const stronger = createStrengthenMask().mask(template, options), softer = createSoftenMask().mask(template, options);
    return {
      ...stronger,
      borderColor: softer.borderColor,
      borderColorHover: softer.borderColorHover,
      borderColorPress: softer.borderColorPress,
      borderColorFocus: softer.borderColorFocus
    };
  }),
  soften2Border1: createMask((template, options) => {
    const softer2 = createSoftenMask({
      strength: 2
    }).mask(template, options), softer1 = createSoftenMask({
      strength: 1
    }).mask(template, options);
    return {
      ...softer2,
      borderColor: softer1.borderColor,
      borderColorHover: softer1.borderColorHover,
      borderColorPress: softer1.borderColorPress,
      borderColorFocus: softer1.borderColorFocus
    };
  }),
  soften3FlatBorder: createMask((template, options) => {
    const borderMask = createSoftenMask({
      strength: 2
    }).mask(template, options);
    return {
      ...createSoftenMask({
        strength: 3
      }).mask(template, options),
      borderColor: borderMask.borderColor,
      borderColorHover: borderMask.borderColorHover,
      borderColorPress: borderMask.borderColorPress,
      borderColorFocus: borderMask.borderColorFocus
    };
  }),
  softenBorder: createMask((template, options) => {
    const plain = skipMask.mask(template, options), softer = createSoftenMask().mask(template, options);
    return {
      ...plain,
      borderColor: softer.borderColor,
      borderColorHover: softer.borderColorHover,
      borderColorPress: softer.borderColorPress,
      borderColorFocus: softer.borderColorFocus
    };
  }),
  softenBorder2: createMask((template, options) => {
    const plain = skipMask.mask(template, options), softer = createSoftenMask({
      strength: 2
    }).mask(template, options);
    return {
      ...plain,
      borderColor: softer.borderColor,
      borderColorHover: softer.borderColorHover,
      borderColorPress: softer.borderColorPress,
      borderColorFocus: softer.borderColorFocus
    };
  })
};

// node_modules/.pnpm/@tamagui+themes@1.116.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@tamagui/themes/dist/esm/v3-themes.mjs
var import_web3 = require("@tamagui/core");
var colorTokens = {
  light: {
    blue: blue2,
    gray: gray2,
    green: green2,
    orange: orange2,
    pink: pink2,
    purple: purple2,
    red: red2,
    yellow: yellow2
  },
  dark: {
    blue,
    gray,
    green,
    orange,
    pink,
    purple,
    red,
    yellow
  }
};
var lightShadowColor = "rgba(0,0,0,0.04)";
var lightShadowColorStrong = "rgba(0,0,0,0.085)";
var darkShadowColor = "rgba(0,0,0,0.2)";
var darkShadowColorStrong = "rgba(0,0,0,0.3)";
var darkColors = {
  ...colorTokens.dark.blue,
  ...colorTokens.dark.gray,
  ...colorTokens.dark.green,
  ...colorTokens.dark.orange,
  ...colorTokens.dark.pink,
  ...colorTokens.dark.purple,
  ...colorTokens.dark.red,
  ...colorTokens.dark.yellow
};
var lightColors = {
  ...colorTokens.light.blue,
  ...colorTokens.light.gray,
  ...colorTokens.light.green,
  ...colorTokens.light.orange,
  ...colorTokens.light.pink,
  ...colorTokens.light.purple,
  ...colorTokens.light.red,
  ...colorTokens.light.yellow
};
var color = {
  white0: "rgba(255,255,255,0)",
  white075: "rgba(255,255,255,0.75)",
  white05: "rgba(255,255,255,0.5)",
  white025: "rgba(255,255,255,0.25)",
  black0: "rgba(10,10,10,0)",
  black075: "rgba(10,10,10,0.75)",
  black05: "rgba(10,10,10,0.5)",
  black025: "rgba(10,10,10,0.25)",
  white1: "#fff",
  white2: "#f8f8f8",
  white3: "hsl(0, 0%, 96.3%)",
  white4: "hsl(0, 0%, 94.1%)",
  white5: "hsl(0, 0%, 92.0%)",
  white6: "hsl(0, 0%, 90.0%)",
  white7: "hsl(0, 0%, 88.5%)",
  white8: "hsl(0, 0%, 81.0%)",
  white9: "hsl(0, 0%, 56.1%)",
  white10: "hsl(0, 0%, 50.3%)",
  white11: "hsl(0, 0%, 42.5%)",
  white12: "hsl(0, 0%, 9.0%)",
  black1: "#050505",
  black2: "#151515",
  black3: "#191919",
  black4: "#232323",
  black5: "#282828",
  black6: "#323232",
  black7: "#424242",
  black8: "#494949",
  black9: "#545454",
  black10: "#626262",
  black11: "#a5a5a5",
  black12: "#fff",
  ...postfixObjKeys(lightColors, "Light"),
  ...postfixObjKeys(darkColors, "Dark")
};
var defaultPalettes = (() => {
  const transparent = /* @__PURE__ */ __name((hsl, opacity = 0) => hsl.replace("%)", `%, ${opacity})`).replace("hsl(", "hsla("), "transparent"), getColorPalette = /* @__PURE__ */ __name((colors2, accentColors) => {
    const colorPalette = Object.values(colors2), colorI = colorPalette.length - 4, accentPalette = Object.values(accentColors), accentBackground = accentPalette[0], accentColor = accentPalette[accentPalette.length - 1];
    return [accentBackground, transparent(colorPalette[0], 0), transparent(colorPalette[0], 0.25), transparent(colorPalette[0], 0.5), transparent(colorPalette[0], 0.75), ...colorPalette, transparent(colorPalette[colorI], 0.75), transparent(colorPalette[colorI], 0.5), transparent(colorPalette[colorI], 0.25), transparent(colorPalette[colorI], 0), accentColor];
  }, "getColorPalette"), brandColor = {
    light: color.blue4Light,
    dark: color.blue4Dark
  }, lightPalette = [brandColor.light, color.white0, color.white025, color.white05, color.white075, color.white1, color.white2, color.white3, color.white4, color.white5, color.white6, color.white7, color.white8, color.white9, color.white10, color.white11, color.white12, color.black075, color.black05, color.black025, color.black0, brandColor.dark], darkPalette = [brandColor.dark, color.black0, color.black025, color.black05, color.black075, color.black1, color.black2, color.black3, color.black4, color.black5, color.black6, color.black7, color.black8, color.black9, color.black10, color.black11, color.black12, color.white075, color.white05, color.white025, color.white0, brandColor.light], lightColorNames = objectKeys(colorTokens.light), lightPalettes = objectFromEntries2(lightColorNames.map((key, index) => [`light_${key}`, getColorPalette(colorTokens.light[key], colorTokens.light[lightColorNames[(index + 1) % lightColorNames.length]])])), darkColorNames = objectKeys(colorTokens.dark), darkPalettes = objectFromEntries2(darkColorNames.map((key, index) => [`dark_${key}`, getColorPalette(colorTokens.dark[key], colorTokens.light[darkColorNames[(index + 1) % darkColorNames.length]])])), colorPalettes = {
    ...lightPalettes,
    ...darkPalettes
  };
  return {
    light: lightPalette,
    dark: darkPalette,
    ...colorPalettes
  };
})();
var getTemplates = /* @__PURE__ */ __name(() => {
  const getBaseTemplates = /* @__PURE__ */ __name((scheme) => {
    const isLight = scheme === "light", bgIndex = 5, lighten = isLight ? -1 : 1, darken = -lighten, borderColor = bgIndex + 3, base = {
      accentBackground: 0,
      accentColor: -0,
      background0: 1,
      background025: 2,
      background05: 3,
      background075: 4,
      color1: bgIndex,
      color2: bgIndex + 1,
      color3: bgIndex + 2,
      color4: bgIndex + 3,
      color5: bgIndex + 4,
      color6: bgIndex + 5,
      color7: bgIndex + 6,
      color8: bgIndex + 7,
      color9: bgIndex + 8,
      color10: bgIndex + 9,
      color11: bgIndex + 10,
      color12: bgIndex + 11,
      color0: -1,
      color025: -2,
      color05: -3,
      color075: -4,
      // the background, color, etc keys here work like generics - they make it so you
      // can publish components for others to use without mandating a specific color scale
      // the @tamagui/button Button component looks for `$background`, so you set the
      // dark_red_Button theme to have a stronger background than the dark_red theme.
      background: bgIndex,
      backgroundHover: bgIndex + lighten,
      // always lighten on hover no matter the scheme
      backgroundPress: bgIndex + darken,
      // always darken on press no matter the theme
      backgroundFocus: bgIndex + darken,
      borderColor,
      borderColorHover: borderColor + lighten,
      borderColorPress: borderColor + darken,
      borderColorFocus: borderColor,
      color: -bgIndex,
      colorHover: -bgIndex - 1,
      colorPress: -bgIndex,
      colorFocus: -bgIndex - 1,
      colorTransparent: -1,
      placeholderColor: -bgIndex - 3,
      outlineColor: -2
    }, surface12 = {
      background: base.background + 1,
      backgroundHover: base.backgroundHover + 1,
      backgroundPress: base.backgroundPress + 1,
      backgroundFocus: base.backgroundFocus + 1,
      borderColor: base.borderColor + 1,
      borderColorHover: base.borderColorHover + 1,
      borderColorFocus: base.borderColorFocus + 1,
      borderColorPress: base.borderColorPress + 1
    }, surface22 = {
      background: base.background + 2,
      backgroundHover: base.backgroundHover + 2,
      backgroundPress: base.backgroundPress + 2,
      backgroundFocus: base.backgroundFocus + 2,
      borderColor: base.borderColor + 2,
      borderColorHover: base.borderColorHover + 2,
      borderColorFocus: base.borderColorFocus + 2,
      borderColorPress: base.borderColorPress + 2
    }, surface32 = {
      background: base.background + 3,
      backgroundHover: base.backgroundHover + 3,
      backgroundPress: base.backgroundPress + 3,
      backgroundFocus: base.backgroundFocus + 3,
      borderColor: base.borderColor + 3,
      borderColorHover: base.borderColorHover + 3,
      borderColorFocus: base.borderColorFocus + 3,
      borderColorPress: base.borderColorPress + 3
    }, surfaceActiveBg = {
      background: base.background + 5,
      backgroundHover: base.background + 5,
      backgroundPress: base.backgroundPress + 5,
      backgroundFocus: base.backgroundFocus + 5
    }, surfaceActive = {
      ...surfaceActiveBg,
      // match border to background when active
      borderColor: surfaceActiveBg.background,
      borderColorHover: surfaceActiveBg.backgroundHover,
      borderColorFocus: surfaceActiveBg.backgroundFocus,
      borderColorPress: surfaceActiveBg.backgroundPress
    }, inverseSurface12 = {
      color: surface12.background,
      colorHover: surface12.backgroundHover,
      colorPress: surface12.backgroundPress,
      colorFocus: surface12.backgroundFocus,
      background: base.color,
      backgroundHover: base.colorHover,
      backgroundPress: base.colorPress,
      backgroundFocus: base.colorFocus,
      borderColor: base.color - 2,
      borderColorHover: base.color - 3,
      borderColorFocus: base.color - 4,
      borderColorPress: base.color - 5
    }, inverseActive = {
      ...inverseSurface12,
      background: base.color - 2,
      backgroundHover: base.colorHover - 2,
      backgroundPress: base.colorPress - 2,
      backgroundFocus: base.colorFocus - 2,
      borderColor: base.color - 2 - 2,
      borderColorHover: base.color - 3 - 2,
      borderColorFocus: base.color - 4 - 2,
      borderColorPress: base.color - 5 - 2
    }, alt1 = {
      color: base.color - 1,
      colorHover: base.colorHover - 1,
      colorPress: base.colorPress - 1,
      colorFocus: base.colorFocus - 1
    }, alt2 = {
      color: base.color - 2,
      colorHover: base.colorHover - 2,
      colorPress: base.colorPress - 2,
      colorFocus: base.colorFocus - 2
    };
    return {
      base,
      alt1,
      alt2,
      surface1: surface12,
      surface2: surface22,
      surface3: surface32,
      inverseSurface1: inverseSurface12,
      inverseActive,
      surfaceActive
    };
  }, "getBaseTemplates"), lightTemplates = getBaseTemplates("light"), darkTemplates = getBaseTemplates("dark");
  return {
    ...objectFromEntries2(objectKeys(lightTemplates).map((name) => [`light_${name}`, lightTemplates[name]])),
    ...objectFromEntries2(objectKeys(darkTemplates).map((name) => [`dark_${name}`, darkTemplates[name]]))
  };
}, "getTemplates");
var defaultTemplates = getTemplates();
var shadows = {
  light: {
    shadowColor: lightShadowColorStrong,
    shadowColorHover: lightShadowColorStrong,
    shadowColorPress: lightShadowColor,
    shadowColorFocus: lightShadowColor
  },
  dark: {
    shadowColor: darkShadowColorStrong,
    shadowColorHover: darkShadowColorStrong,
    shadowColorPress: darkShadowColor,
    shadowColorFocus: darkShadowColor
  }
};
var nonInherited = {
  light: {
    ...lightColors,
    ...shadows.light
  },
  dark: {
    ...darkColors,
    ...shadows.dark
  }
};
var overlayThemeDefinitions = [{
  parent: "light",
  theme: {
    background: "rgba(0,0,0,0.5)"
  }
}, {
  parent: "dark",
  theme: {
    background: "rgba(0,0,0,0.8)"
  }
}];
var inverseSurface1 = [{
  parent: "active",
  template: "inverseActive"
}, {
  parent: "",
  template: "inverseSurface1"
}];
var surface1 = [{
  parent: "active",
  template: "surfaceActive"
}, {
  parent: "",
  template: "surface1"
}];
var surface2 = [{
  parent: "active",
  template: "surfaceActive"
}, {
  parent: "",
  template: "surface2"
}];
var surface3 = [{
  parent: "active",
  template: "surfaceActive"
}, {
  parent: "",
  template: "surface3"
}];
var defaultComponentThemes = {
  ListItem: {
    template: "surface1"
  },
  SelectTrigger: surface1,
  Card: surface1,
  Button: surface3,
  Checkbox: surface2,
  Switch: surface2,
  SwitchThumb: inverseSurface1,
  TooltipContent: surface2,
  Progress: {
    template: "surface1"
  },
  RadioGroupItem: surface2,
  TooltipArrow: {
    template: "surface1"
  },
  SliderTrackActive: {
    template: "surface3"
  },
  SliderTrack: {
    template: "surface1"
  },
  SliderThumb: inverseSurface1,
  Tooltip: inverseSurface1,
  ProgressIndicator: inverseSurface1,
  SheetOverlay: overlayThemeDefinitions,
  DialogOverlay: overlayThemeDefinitions,
  ModalOverlay: overlayThemeDefinitions,
  Input: surface1,
  TextArea: surface1
};
var defaultSubThemes = {
  alt1: {
    template: "alt1"
  },
  alt2: {
    template: "alt2"
  },
  active: {
    template: "surface3"
  },
  surface1: {
    template: "surface1"
  },
  surface2: {
    template: "surface2"
  },
  surface3: {
    template: "surface3"
  },
  surface4: {
    template: "surfaceActive"
  }
};
var themeBuilder = createThemeBuilder().addPalettes(defaultPalettes).addTemplates(defaultTemplates).addThemes({
  light: {
    template: "base",
    palette: "light",
    nonInheritedValues: nonInherited.light
  },
  dark: {
    template: "base",
    palette: "dark",
    nonInheritedValues: nonInherited.dark
  }
}).addChildThemes({
  orange: {
    palette: "orange",
    template: "base"
  },
  yellow: {
    palette: "yellow",
    template: "base"
  },
  green: {
    palette: "green",
    template: "base"
  },
  blue: {
    palette: "blue",
    template: "base"
  },
  purple: {
    palette: "purple",
    template: "base"
  },
  pink: {
    palette: "pink",
    template: "base"
  },
  red: {
    palette: "red",
    template: "base"
  },
  gray: {
    palette: "gray",
    template: "base"
  }
}).addChildThemes(defaultSubThemes).addComponentThemes(defaultComponentThemes, {
  avoidNestingWithin: ["alt1", "alt2", "surface1", "surface2", "surface3", "surface4"]
});
var themesIn = themeBuilder.build();
var themes = themesIn;
var size2 = {
  $0: 0,
  "$0.25": 2,
  "$0.5": 4,
  "$0.75": 8,
  $1: 20,
  "$1.5": 24,
  $2: 28,
  "$2.5": 32,
  $3: 36,
  "$3.5": 40,
  $4: 44,
  $true: 44,
  "$4.5": 48,
  $5: 52,
  $6: 64,
  $7: 74,
  $8: 84,
  $9: 94,
  $10: 104,
  $11: 124,
  $12: 144,
  $13: 164,
  $14: 184,
  $15: 204,
  $16: 224,
  $17: 224,
  $18: 244,
  $19: 264,
  $20: 284
};
var spaces = Object.entries(size2).map(([k, v]) => [k, sizeToSpace(v)]);
var spacesNegative = spaces.slice(1).map(([k, v]) => [`-${k.slice(1)}`, -v]);
var space2 = {
  ...Object.fromEntries(spaces),
  ...Object.fromEntries(spacesNegative)
};
var zIndex2 = {
  0: 0,
  1: 100,
  2: 200,
  3: 300,
  4: 400,
  5: 500
};
var radius2 = {
  0: 0,
  1: 3,
  2: 5,
  3: 7,
  4: 9,
  true: 9,
  5: 10,
  6: 16,
  7: 19,
  8: 22,
  9: 26,
  10: 34,
  11: 42,
  12: 50
};
var tokens = (0, import_web3.createTokens)({
  color,
  radius: radius2,
  zIndex: zIndex2,
  space: space2,
  size: size2
});
function postfixObjKeys(obj, postfix) {
  return Object.fromEntries(Object.entries(obj).map(([k, v]) => [`${k}${postfix}`, v]));
}
__name(postfixObjKeys, "postfixObjKeys");
function sizeToSpace(v) {
  return v === 0 ? 0 : v === 2 ? 0.5 : v === 4 ? 1 : v === 8 ? 1.5 : v <= 16 ? Math.round(v * 0.333) : Math.floor(v * 0.7 - 12);
}
__name(sizeToSpace, "sizeToSpace");
function objectFromEntries2(arr) {
  return Object.fromEntries(arr);
}
__name(objectFromEntries2, "objectFromEntries");
function objectKeys(obj) {
  return Object.keys(obj);
}
__name(objectKeys, "objectKeys");

// node_modules/.pnpm/@tamagui+animations-css@1.116.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@tamagui/animations-css/dist/esm/createAnimations.mjs
var import_react2 = __toESM(require("react"), 1);

// node_modules/.pnpm/@tamagui+constants@1.116.14_react@18.3.1/node_modules/@tamagui/constants/dist/esm/constants.mjs
var import_react = __toESM(require("react"), 1);
var isWeb = true;
var isWindowDefined = typeof window < "u";
var isServer = isWeb && !isWindowDefined;
var isClient = isWeb && isWindowDefined;
var useIsomorphicLayoutEffect = isServer ? import_react.default.useEffect : import_react.default.useLayoutEffect;
var isChrome = typeof navigator < "u" && /Chrome/.test(navigator.userAgent || "");
var isWebTouchable = isClient && ("ontouchstart" in window || navigator.maxTouchPoints > 0);

// node_modules/.pnpm/@tamagui+animations-css@1.116.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@tamagui/animations-css/dist/esm/createAnimations.mjs
var import_web4 = require("@tamagui/core");

// node_modules/.pnpm/@tamagui+use-presence@1.116.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@tamagui/use-presence/dist/esm/PresenceContext.mjs
var React2 = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var PresenceContext = React2.createContext(null);
var ResetPresence = /* @__PURE__ */ __name((props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PresenceContext.Provider, {
  value: null,
  children: props.children
}), "ResetPresence");

// node_modules/.pnpm/@tamagui+use-presence@1.116.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@tamagui/use-presence/dist/esm/usePresence.mjs
var React3 = __toESM(require("react"), 1);
function usePresence() {
  const context = React3.useContext(PresenceContext);
  if (!context) return [true, null, context];
  const {
    id,
    isPresent: isPresent2,
    onExitComplete,
    register
  } = context;
  return React3.useEffect(() => register(id), []), !isPresent2 && onExitComplete ? [false, () => onExitComplete == null ? void 0 : onExitComplete(id), context] : [true, void 0, context];
}
__name(usePresence, "usePresence");

// node_modules/.pnpm/@tamagui+animations-css@1.116.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@tamagui/animations-css/dist/esm/createAnimations.mjs
function createAnimations(animations) {
  const reactionListeners = /* @__PURE__ */ new WeakMap();
  return {
    animations,
    usePresence,
    ResetPresence,
    supportsCSSVars: true,
    useAnimatedNumber(initial) {
      const [val, setVal] = import_react2.default.useState(initial);
      return {
        getInstance() {
          return setVal;
        },
        getValue() {
          return val;
        },
        setValue(next, config, onFinish) {
          setVal(next);
          const listeners = reactionListeners.get(setVal);
          listeners && listeners.forEach((cb) => cb(next)), onFinish == null ? void 0 : onFinish();
        },
        stop() {
        }
      };
    },
    useAnimatedNumberReaction({
      value
    }, onValue) {
      import_react2.default.useEffect(() => {
        const instance = value.getInstance();
        let queue = reactionListeners.get(instance);
        if (!queue) {
          const next = /* @__PURE__ */ new Set();
          reactionListeners.set(instance, next), queue = next;
        }
        return queue.add(onValue), () => {
          queue == null ? void 0 : queue.delete(onValue);
        };
      }, []);
    },
    useAnimatedNumberStyle(val, getStyle) {
      return getStyle(val.getValue());
    },
    useAnimations: /* @__PURE__ */ __name(({
      props,
      presence,
      style,
      componentState,
      stateRef
    }) => {
      const isEntering = !!componentState.unmounted, isExiting = (presence == null ? void 0 : presence[0]) === false, sendExitComplete = presence == null ? void 0 : presence[1], [animationKey, animationConfig] = Array.isArray(props.animation) ? props.animation : [props.animation], animation = animations[animationKey], keys = props.animateOnly ?? ["all"];
      return useIsomorphicLayoutEffect(() => {
        const host = stateRef.current.host;
        if (!sendExitComplete || !isExiting || !host) return;
        const node = host, onFinishAnimation = /* @__PURE__ */ __name(() => {
          sendExitComplete == null ? void 0 : sendExitComplete();
        }, "onFinishAnimation");
        return node.addEventListener("transitionend", onFinishAnimation), node.addEventListener("transitioncancel", onFinishAnimation), () => {
          node.removeEventListener("transitionend", onFinishAnimation), node.removeEventListener("transitioncancel", onFinishAnimation);
        };
      }, [sendExitComplete, isExiting]), animation && (Array.isArray(style.transform) && (style.transform = (0, import_web4.transformsToString)(style.transform)), style.transition = keys.map((key) => {
        const override = animations[animationConfig == null ? void 0 : animationConfig[key]] ?? animation;
        return `${key} ${override}`;
      }).join(", ")), process.env.NODE_ENV === "development" && props.debug === "verbose" && console.info("CSS animation", {
        props,
        animations,
        animation,
        animationKey,
        style,
        isEntering,
        isExiting
      }), animation ? {
        style,
        className: isEntering ? "t_unmounted" : ""
      } : null;
    }, "useAnimations")
  };
}
__name(createAnimations, "createAnimations");

// node_modules/.pnpm/@tamagui+config@1.116.14_react-dom@18.3.1_react@18.3.1__react-native-reanimated@3.16.3_@babel_4qracffgy4o7mewx3jqiq5be2u/node_modules/@tamagui/config/dist/esm/animationsCSS.mjs
var smoothBezier = "cubic-bezier(0.215, 0.610, 0.355, 1.000)";
var animationsCSS = createAnimations({
  "75ms": "ease-in 75ms",
  "100ms": "ease-in 100ms",
  "200ms": "ease-in 200ms",
  bouncy: "ease-in 200ms",
  superBouncy: "ease-in 500ms",
  lazy: "ease-in 1000ms",
  medium: "ease-in 300ms",
  slow: "ease-in 500ms",
  quick: `${smoothBezier} 400ms`,
  quicker: `${smoothBezier} 300ms`,
  quickest: `${smoothBezier} 200ms`,
  tooltip: "ease-in 400ms"
});

// node_modules/.pnpm/@tamagui+config@1.116.14_react-dom@18.3.1_react@18.3.1__react-native-reanimated@3.16.3_@babel_4qracffgy4o7mewx3jqiq5be2u/node_modules/@tamagui/config/dist/esm/v3.mjs
globalThis.global ||= globalThis;
var themes2 = process.env.TAMAGUI_OPTIMIZE_THEMES === "true" ? {} : themes;

// src/tamagui.config.ts
var customConfig = {
  settings: {
    defaultFont: "body"
  },
  themes: customThemes,
  fonts: {
    body: (0, import_web5.createFont)({
      family: fonts.body,
      ...fontConfig
    }),
    semiHeading: (0, import_web5.createFont)({
      family: fonts.semiHeading,
      ...fontConfig
    }),
    heading: (0, import_web5.createFont)({
      family: fonts.heading,
      ...fontConfig
    }),
    extraHeading: (0, import_web5.createFont)({
      family: fonts.extraHeading,
      ...fontConfig
    })
  },
  animations: animationsCSS,
  media: createMedia(media),
  tokens: (0, import_web5.createTokens)({ radius, size, space, zIndex, color: colors })
};
var tamaguiConfig = (0, import_web5.createTamagui)(customConfig);
var tamagui_config_default = tamaguiConfig;

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/tamagui.config.ts
var tamagui_config_exports = {};
__export(tamagui_config_exports, {
  default: () => tamagui_config_default
});
module.exports = __toCommonJS(tamagui_config_exports);
var import_web3 = require("@tamagui/core");

// node_modules/.pnpm/@tamagui+react-native-media-driver@1.116.12_react-native@0.76.1_@babel+core@7.26.0_@babel+pre_gtbvie77amb3sq6nfexb2klkx4/node_modules/@tamagui/react-native-media-driver/dist/esm/createMedia.mjs
var import_web = require("@tamagui/core");

// node_modules/.pnpm/@tamagui+react-native-media-driver@1.116.12_react-native@0.76.1_@babel+core@7.26.0_@babel+pre_gtbvie77amb3sq6nfexb2klkx4/node_modules/@tamagui/react-native-media-driver/dist/esm/matchMedia.mjs
var matchMedia = globalThis.matchMedia;

// node_modules/.pnpm/@tamagui+react-native-media-driver@1.116.12_react-native@0.76.1_@babel+core@7.26.0_@babel+pre_gtbvie77amb3sq6nfexb2klkx4/node_modules/@tamagui/react-native-media-driver/dist/esm/createMedia.mjs
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

// src/themes/metric.ts
var spacing = {
  px: 1,
  "0": 0,
  "0.5": 2,
  "1": 4,
  "1.5": 6,
  "2": 8,
  "2.5": 10,
  "3": 12,
  "3.5": 14,
  "4": 16,
  "4.5": 18,
  "5": 20,
  "5.5": 22,
  "6": 24,
  "6.5": 26,
  "7": 28,
  "7.5": 30,
  "8": 32,
  "7.75": 31,
  "9": 36,
  "10": 40,
  "12": 48,
  "13": 57,
  "15": 60,
  "16": 64,
  "20": 80,
  "22": 88,
  "24": 96,
  "30": 120,
  "32": 128,
  "40": 160,
  "48": 192,
  "56": 224,
  "64": 256,
  "72": 288,
  "80": 320,
  "96": 384
};
var radius = {
  none: 0,
  xs: 2,
  sm: 4,
  md: 6,
  lg: 8,
  xl: 12,
  true: 5,
  "2xl": 16,
  "3xl": 24,
  "4xl": 26,
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
var fonts = {
  body: "Lufga-Regular",
  subBody: "Lufga-Semibold",
  heading: "Lufga-Bold",
  subheading: "Lufga-Extrabold"
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
  grey14: "#58514B"
};
var greenPallet = {
  green1: "#284F49",
  green2: "#A4EDA3",
  green3: "#284F49",
  green4: "#5D6544",
  green5: "#B6C197",
  green6: "#B5C096",
  green7: "#4D533C",
  green8: "#5B5E3E",
  green9: "#444A34"
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
    // Text
    textDefault: colors.blue2,
    errorColor: colors.red1,
    // Button
    buttonPrimary: colors.green1
  }
};

// src/themes/themes.ts
var customThemes = {
  light: {},
  dark: {},
  ...webTheme
};

// src/tamagui.config.ts
var customConfig = {
  settings: {
    defaultFont: "body"
  },
  themes: customThemes,
  fonts: {
    body: (0, import_web3.createFont)({
      family: fonts.body,
      ...fontConfig
    }),
    subBody: (0, import_web3.createFont)({
      family: fonts.subBody,
      ...fontConfig
    }),
    heading: (0, import_web3.createFont)({
      family: fonts.heading,
      ...fontConfig
    }),
    subHeading: (0, import_web3.createFont)({
      family: fonts.subheading,
      ...fontConfig
    })
  },
  media: createMedia(media),
  tokens: (0, import_web3.createTokens)({ radius, size, space, zIndex, color: colors })
};
var tamaguiConfig = (0, import_web3.createTamagui)(customConfig);
var tamagui_config_default = tamaguiConfig;

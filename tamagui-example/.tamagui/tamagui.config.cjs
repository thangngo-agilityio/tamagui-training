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
var import_web2 = require("@tamagui/core");

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

// src/tamagui.config.ts
var customConfig = {
  settings: {
    defaultFont: "body"
  },
  fonts: {
    body: (0, import_web2.createFont)({
      family: fonts.body,
      ...fontConfig
    }),
    subBody: (0, import_web2.createFont)({
      family: fonts.subBody,
      ...fontConfig
    }),
    heading: (0, import_web2.createFont)({
      family: fonts.heading,
      ...fontConfig
    }),
    subHeading: (0, import_web2.createFont)({
      family: fonts.subheading,
      ...fontConfig
    })
  },
  themes: {
    light: {
      background: "#fecc1b",
      color: "#131313"
    },
    dark: {
      background: "#121212",
      color: "#d83bd2"
    }
  },
  media: createMedia(media),
  tokens: {
    color: {
      primary: "#bada55",
      secondary: "#ffa500"
    },
    size: {
      small: 8,
      medium: 16,
      large: 32
    },
    space: {
      small: 4,
      medium: 8,
      large: 16
    },
    radius: {
      small: 2,
      medium: 4,
      large: 8
    },
    zIndex: {
      low: 1,
      medium: 10,
      high: 100
    }
  }
};
var tamaguiConfig = (0, import_web2.createTamagui)(customConfig);
var tamagui_config_default = tamaguiConfig;

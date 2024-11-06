var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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
var import_web = require("@tamagui/core");
var body = (0, import_web.createFont)({
  family: "Inter",
  size: {
    1: 12,
    2: 14,
    3: 16,
    4: 20,
    5: 24,
    6: 32,
    7: 48,
    8: 64
  }
});
var customConfig = {
  settings: {
    defaultFont: "body"
  },
  fonts: {
    body
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
  media: {
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
  },
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
var tamaguiConfig = (0, import_web.createTamagui)(customConfig);
var tamagui_config_default = tamaguiConfig;

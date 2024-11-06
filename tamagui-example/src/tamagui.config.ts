import { createTamagui, createFont } from "@tamagui/web";

const body = createFont({
  family: "Inter",
  size: {
    1: 12,
    2: 14,
    3: 16,
    4: 20,
    5: 24,
    6: 32,
    7: 48,
    8: 64,
  },
});

const customConfig = {
  settings: {
    defaultFont: "body",
  },
  fonts: {
    body,
  },
  themes: {
    light: {
      background: "#fecc1b",
      color: "#131313",
    },
    dark: {
      background: "#121212",
      color: "#d83bd2",
    },
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

    landscape: { orientation: "landscape" },
  },
  tokens: {
    color: {
      primary: "#bada55",
      secondary: "#ffa500",
    },
    size: {
      small: 8,
      medium: 16,
      large: 32,
    },
    space: {
      small: 4,
      medium: 8,
      large: 16,
    },
    radius: {
      small: 2,
      medium: 4,
      large: 8,
    },
    zIndex: {
      low: 1,
      medium: 10,
      high: 100,
    },
  },
};

const tamaguiConfig = createTamagui(customConfig);

export type TamaguiConfig = typeof tamaguiConfig;

export default tamaguiConfig;

import { createTamagui, createFont } from "@tamagui/web";
import { createMedia } from "@tamagui/react-native-media-driver";
import { fontConfig, fonts, media } from "./themes";

const customConfig = {
  settings: {
    defaultFont: "body",
  },
  fonts: {
    body: createFont({
      family: fonts.body,
      ...fontConfig,
    }),
    subBody: createFont({
      family: fonts.subBody,
      ...fontConfig,
    }),
    heading: createFont({
      family: fonts.heading,
      ...fontConfig,
    }),
    subHeading: createFont({
      family: fonts.subheading,
      ...fontConfig,
    }),
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
  media: createMedia(media),
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

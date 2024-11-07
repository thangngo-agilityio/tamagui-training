import { createTamagui, createFont, createTokens } from '@tamagui/web';
import { createMedia } from '@tamagui/react-native-media-driver';
import { fontConfig, fonts, media } from './themes';
import { radius, size, space, zIndex } from './themes/metric';
import { color } from './themes/color';

const customConfig = {
  settings: {
    defaultFont: 'body',
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
      background: '#fecc1b',
      color: '#131313',
    },
    dark: {
      background: '#121212',
      color: '#d83bd2',
    },
  },
  media: createMedia(media),
  tokens: createTokens({ radius, size, space, zIndex, color }),
};

const tamaguiConfig = createTamagui(customConfig);

export type TamaguiConfig = typeof tamaguiConfig;

export default tamaguiConfig;

import { createTamagui, createFont, createTokens } from '@tamagui/web';
import { createMedia } from '@tamagui/react-native-media-driver';
import { colors, customThemes, fontConfig, fonts, media } from './themes';
import { radius, size, space, zIndex } from './themes/metric';

const customConfig = {
  settings: {
    defaultFont: 'body',
  },
  themes: customThemes,
  fonts: {
    body: createFont({
      family: fonts.body,
      ...fontConfig,
    }),
    semiHeading: createFont({
      family: fonts.semiHeading,
      ...fontConfig,
    }),
    heading: createFont({
      family: fonts.heading,
      ...fontConfig,
    }),
    extraHeading: createFont({
      family: fonts.extraHeading,
      ...fontConfig,
    }),
  },
  media: createMedia(media),
  tokens: createTokens({ radius, size, space, zIndex, color: colors }),
};

const tamaguiConfig = createTamagui(customConfig);

export type TamaguiConfig = typeof tamaguiConfig;

declare module '@tamagui/core' {
  interface TamaguiCustomConfig extends TamaguiConfig {
    themes: {
      light_web: typeof customThemes.light_web;
    };
  }
}

export default tamaguiConfig;

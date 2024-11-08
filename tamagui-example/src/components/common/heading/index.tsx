import { styled, Text } from '@tamagui/core';

export const Heading = styled(Text, {
  name: 'Heading',
  color: '$textDefault',

  variants: {
    variant: {
      default: {
        color: '$textDefault',
      },
      error: {
        color: '$errorColor',
      },
    },

    size: {
      tiny: {
        fontSize: '$3.5',
        lineHeight: 22,
      },

      extraSmall: {
        fontSize: '$4',
        lineHeight: 24,
      },

      small: {
        fontSize: '$4',
        lineHeight: 24,
      },

      middleLarge: {
        fontSize: '$4.5',
        lineHeight: 32,
      },

      medium: {
        fontSize: '$5',
        lineHeight: 28,
      },

      large: {
        fontSize: '$6',
        lineHeight: 32,
      },

      extraLarge: {
        fontSize: '$7.75',
        lineHeight: 40,
      },

      superLarge: {
        fontSize: '$8',
        lineHeight: 40,
      },

      huge: {
        fontSize: 39,
        lineHeight: 48,
      },

      extraHuge: {
        fontSize: '$10',
        lineHeight: 56,
      },
    },

    weight: {
      bold: {
        fontWeight: 'bold',
        fontFamily: '$heading',
      },
      normal: {
        fontWeight: 'normal',
        fontFamily: '$subheading',
      },
    },
  } as const,

  defaultVariants: {
    size: 'medium',
    weight: 'bold',
  },
});

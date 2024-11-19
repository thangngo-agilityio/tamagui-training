import { styled, Text } from 'tamagui';

const Heading = styled(Text, {
  name: 'Heading',
  color: '$textDefault',
  textOverflow: 'ellipsis',

  variants: {
    variant: {
      default: {
        color: '$textDefault',
      },
      primary: {
        color: '$textPrimary',
      },
      secondary: {
        color: '$textSecondary',
      },
      tertiary: {
        color: '$textTertiary',
      },
      quaternary: {
        color: '$textQuaternary',
      },
      quinary: {
        color: '$textQuinary',
      },
      senary: {
        color: '$textSenary',
      },
      septenary: {
        color: '$textSeptenary',
      },
      product: {
        color: '$textProduct',
      },
      orderSuccess: {
        color: '$textOrderSuccess',
      },
    },

    size: {
      tiny: {
        fontSize: '$1',
        lineHeight: 22,
      },

      extraSmall: {
        fontSize: '$2',
        lineHeight: 24,
      },

      small: {
        fontSize: '$3',
        lineHeight: 24,
      },

      middleLarge: {
        fontSize: '$4',
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
        fontSize: '$7',
        lineHeight: 40,
      },

      superLarge: {
        fontSize: '$8',
        lineHeight: 40,
      },

      huge: {
        fontSize: '$9',
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
      semiBold: {
        fontWeight: 600,
        fontFamily: '$semiHeading',
      },
      extraBold: {
        fontWeight: 800,
        fontFamily: '$extraHeading',
      },
    },
  } as const,

  defaultVariants: {
    size: 'medium',
    weight: 'bold',
  },
});

export default Heading;

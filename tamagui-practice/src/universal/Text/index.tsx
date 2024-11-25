import { styled, Text as textBase } from "tamagui";


const Text = styled(textBase, {
  name: 'Text',
  color: '$color',
  overflow: 'hidden',
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
      productCard: {
        color: '$textProductCard'
      },
      footer: {
        color: '$textFooter'
      },
      copyright: {
        color: '$textCopyright'
      }
    },

    size: {
      tiny: {
        fontSize: '$1',
        lineHeight: 16,
      },
      extraSmall: {
        fontSize: '$2',
        lineHeight: 20,
      },

      small: {
        fontSize: '$3',
        lineHeight: 22,
      },

      medium: {
        fontSize: '$4',
        lineHeight: 24,
      },

      large: {
        fontSize: '$4',
        lineHeight: 28,
      },

      middleLarge: {
        fontSize: '$5',
        lineHeight: 32,
      },

      extraLarge: {
        fontSize: '$6',
        lineHeight: 28,
      },

      specialLarge: {
        fontSize: '$7',
        lineHeight: 24,
      },

      ultraLarge: {
        fontSize: '$8',
        lineHeight: 32,
      },

      superLarge: {
        fontSize: '$9',
        lineHeight: 40,
      },

      megaLarge: {
        fontSize: '$10',
        lineHeight: 56,
      },
    },

    weight: {
      normal: {
        fontFamily: '$body',
        fontWeight: 'normal',
      },
      bold: {
        fontFamily: '$heading',
        fontWeight: 'bold',
      },
    },
  } as const,

  defaultVariants: {
    size: 'medium',
    weight: 'normal',
    variant: 'default'
  },
});

export default Text

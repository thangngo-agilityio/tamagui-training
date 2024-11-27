import { ComponentProps, ReactNode, forwardRef, useCallback } from 'react';
import { styled, createStyledContext, withStaticProperties, GestureReponderEvent, View } from '@tamagui/core';
import { Spinner } from 'tamagui';

// Component
import Text from '../Text';

const ButtonContext = createStyledContext({ variant: null, disabled: null });

const ButtonFrame = styled(View, {
  name: 'Button',
  tag: 'button',
  cursor: 'pointer',
  context: ButtonContext,

  paddingHorizontal: 3,
  transition: '.2s ease-in',
  focusStyle: {
    outlineStyle: 'none',
  },
  hoverStyle: {
    opacity: 0.9,
  },

  variants: {
    variant: {
      default: {
        backgroundColor: '$backgroundBody',
        borderRadius: '$sm',
      },

      error: {
        borderRadius: '$2xl',
        backgroundColor: '$backgroundError',

        hoverStyle: {
          opacity: 0.9,
        },

        disabledStyle: {
          cursor: 'not-allowed',
        },
      },

      overview: {
        backgroundColor: '$backgroundPrimary',
        borderRadius: '$sm',
        borderWidth: 0,
        width: 'fit-content',
      },

      auth: {
        borderRadius: '$lg',
        borderWidth: 0,
        backgroundColor: '$backgroundAuth',

        hoverStyle: {
          opacity: 0.9,
        },

        disabledStyle: {
          cursor: 'not-allowed',
          backgroundColor: '$backgroundAuth',
          opacity: 0.7,
        },
      },

      iconPrimary: {
        width: '100%',
        paddingVertical: '15px',
        backgroundColor: 'transparent',
        borderRadius: '$lg',
        borderColor: '$borderPrimaryInput',
        borderWidth: '1px',
        opacity: 1,
      },

      warning: {
        backgroundColor: 'transparent',
        borderColor: 'none',
        borderWidth: 0,
      },

      showroom: {
        width: 'fit-content',
        backgroundColor: '$BackgroundShowroomSection',
        color: '$textPrimary',
        borderWidth: 0,
        borderRadius: '$xl',
        opacity: 1,
        hoverStyle: {
          opacity: 0.8,
        },
      },

      showroomMobile: {
        width: 'fit-content',
        backgroundColor: 'transparent',
        color: '$textQuinary',
        borderWidth: 0,
        opacity: 1,
        hoverStyle: {
          opacity: 0.8,
        },
      },

      footer: {
        width: 'fit-content',
        background: 'none',
        borderWidth: 0,
      },

      iconSecondary: {
        borderWidth: 0,
        borderRadius: '$md',
        backgroundColor: '$backgroundBody',
        boxShadow: '0 2px 5.5px 0 rgba(0, 0 , 0, .25)',
        hoverStyle: {
          backgroundColor: '$backgroundShowroom',
        },
      },

      pagination: {
        borderWidth: 0,
        borderRadius: '$md',
      },

      quantity: {
        width: '26px',
        height: '26px',
        display: 'flex',
        borderRadius: '$full',
        borderWidth: 0,
        backgroundColor: '$backgroundButtonQuantity',
        justifyContent: 'center',
        alignItems: 'center',
      },
      buy: {
        backgroundColor: '$backgroundAuth',
        borderRadius: '$2xl',
        boxShadow: '0 6px 14px 4px rgba(164, 237, 163, 32.48%)',
        transition: '.2s ease-in',
        borderWidth: '1px',
        borderColor: '$borderColorInput',
        hoverStyle: {
          boxShadow: 'none',
          backgroundColor: 'transparent',
        },
      },
      cart: {
        backgroundColor: 'transparent',
        color: '$textTertiary',
        borderWidth: '1px',
        borderColor: '$borderButtonCart',
        borderRadius: '$2xl',
        transition: '.2s ease-in',
        hoverStyle: {
          color: 'textPrimary',
          backgroundColor: '$backgroundPrimary',
        },
      },
    },
    fit: {
      false: {
        width: '$full',
      },
      true: {
        width: 'auto',
      },
    },
  } as const,

  defaultVariants: {
    variant: 'default',
    fit: false,
  },
});

const ButtonText = styled(Text, {
  name: 'ButtonText',
  context: ButtonContext,

  variants: {
    variant: {
      overview: {
        paddingHorizontal: '42px',
        paddingVertical: '22px',
        color: '$textPrimary',
        size: 'superLarge',
        weight: 'bold',
      },

      auth: {
        size: 'small',
        color: '$textPrimary',
      },

      showroom: {
        paddingHorizontal: '26px',
        paddingVertical: '22px',
        size: 'specialLarge',
      },

      showroomMobile: {
        size: 'tiny',
      },

      warning: {
        color: '$textError',
      },

      footer: {
        paddingHorizontal: '11px',
        size: 'medium',
        color: '$textFooterSecondary',
        textDecorationLine: 'underline',
      },

      buy: {
        paddingHorizontal: '40px',
        paddingVertical: '20px',
        size: 'extraLarge',
        color: '$textPrimary',
        transition: '.2s ease-in',
        hoverStyle: {
          color: '$textQuinary',
        },
      },
      cart: {
        paddingHorizontal: '40px',
        paddingVertical: '20px',
        size: 'extraLarge',
        color: '$textTertiary',
        transition: '.2s ease-in',
        hoverStyle: {
          color: '$textPrimary',
        },
      },
      iconPrimary: {
        color: 'textQuaternary',
      },
    },
  } as const,
});

const IconWrapper = styled(Text, {
  name: 'ButtonText',
  asChild: true,
  context: ButtonContext,

  width: '$6',
  height: '$6',
});

const ButtonBase = withStaticProperties(ButtonFrame, {
  Text: ButtonText,
  Icon: IconWrapper,
});

interface ButtonProps extends ComponentProps<typeof ButtonBase> {
  isLoading?: boolean;
  icon?: ReactNode;
}

const Button = forwardRef(({ isLoading, disabled, children, onPress, ...props }: ButtonProps) => {
  const handlePress = useCallback(
    (event: GestureReponderEvent) => {
      event.persist();
      requestAnimationFrame(() => onPress?.(event));
    },
    [onPress],
  );
  const isDisabled = isLoading || disabled;

  return (
    <ButtonBase disabled={isDisabled} onPress={handlePress} {...props}>
      {isLoading ? (
        <ButtonBase.Icon testID="button-spinner">
          <Spinner size="small" />
        </ButtonBase.Icon>
      ) : (
        <>
          <ButtonBase.Text disabled={isDisabled}>{children}</ButtonBase.Text>
        </>
      )}
    </ButtonBase>
  );
});

export default Button;

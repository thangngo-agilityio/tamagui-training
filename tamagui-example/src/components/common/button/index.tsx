/**
 * Copyright © 2022-present Agility IO, LLC. All rights reserved.
 *
 * The contents of this file are subject to the terms of the End User License Agreement (EULA) and Enterprise Services Agreement (ESA) agreed upon between You and Agility IO, LLC, collectively (“License”).
 * You may not use this file except in compliance with the License. You can obtain a copy of the License by contacting Agility IO, LLC.
 * See the License for the specific language governing permissions and limitations under the License including but not limited to modification and distribution rights of the Software.
 */
import { ComponentProps, ForwardRefExoticComponent, RefAttributes, forwardRef, useCallback } from 'react';
import { styled, createStyledContext, withStaticProperties, GestureReponderEvent, View } from '@tamagui/core';
import { Text } from '../text';
import { Spinner } from 'tamagui';
import { SvgFactoryProps } from '../../icons';

const ButtonContext = createStyledContext({ variant: null, disabled: null });

const ButtonFrame = styled(View, {
  name: 'Button',
  tag: 'button',
  cursor: 'pointer',
  context: ButtonContext,

  height: 44,
  borderWidth: 0,
  transition: '.2s ease-in',

  alignItems: 'center',
  justifyContent: 'center',

  variants: {
    variant: {
      default: {
        backgroundColor: '$primaryBackground',
        borderRadius: '$sm',

        hoverStyle: {
          opacity: .9
        },

        disabledStyle: {
          cursor: 'not-allowed',
        },
      },

      error: {
        borderRadius: '$2xl',
        backgroundColor: '$backgroundError',

        hoverStyle: {
          opacity: .9
        },

        disabledStyle: {
          cursor: 'not-allowed',
        },
      },

      auth: {
        borderRadius: '$lg',
        backgroundColor: '$backgroundAuth',

        hoverStyle: {
          opacity: .9
        },

        disabledStyle: {
          cursor: 'not-allowed',
          backgroundColor: '$backgroundAuth',
          opacity: .7
        },
      },

      iconPrimary: {
        borderRadius: '$lg',
        borderColor: '$borderIcon',


        hoverStyle: {
          opacity: .9,
        },

        disabledStyle: {
          cursor: 'not-allowed',
          backgroundColor: 'transparent',
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

  weight: 'normal',
  size: 'medium',

  variants: {
    variant: {
      primary: {
        color: '$textPrimary',
      },

      secondary: {
        color: '$textQuinary',
      },

      warning: {
        color: '$textError',
      },
    },
  } as const,
});

const IconWrapper = styled(
  Text,
  {
    name: 'ButtonText',
    asChild: true,
    context: ButtonContext,

    width: '$6',
    height: '$6',
  },
);

const ButtonBase = withStaticProperties(ButtonFrame, {
  Text: ButtonText,
  Icon: IconWrapper,
});

interface ButtonProps extends ComponentProps<typeof ButtonBase> {
  isLoading?: boolean;
  icon?: ForwardRefExoticComponent<SvgFactoryProps & RefAttributes<unknown>>;
}

export const Button = forwardRef(
  ({ isLoading, disabled, children, onPress, ...props }: ButtonProps) => {
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
  },
);

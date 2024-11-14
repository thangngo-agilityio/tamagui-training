import { ComponentProps, forwardRef, ReactNode, Ref, useCallback, useState } from "react";
import { styled, Input, Label, YStack, XStack, Text as TextBase } from "tamagui";
import { NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';


const StyledInput = styled(Input, {
  name: 'InputField',

  fontFamily: 'inter',
  borderRadius: 'sm',
  borderWidth: '1px',
  borderColor: '$borderPrimaryInput',
  borderStyle: 'solid',
  color: '$textInput',
  backgroundColor: '$backgroundBody',
  placeholderTextColor: '$textPlaceholder',
  focusVisibleStyle: 'none',
  focusStyle: {
    outlineStyle: 'none',
    outlineWidth: 0,
  },

  variants: {
    variant: {
      form: {
        px: '20px',
        pt: '36px',
        pb: '30px',
        focusStyle: { borderColor: '$borderSecondaryInput' },
      },
      search: {
        py: '$2'
      }
    }
  }
})

const StyledLabel = styled(Label, {
  name: 'InputField',

  paddingTop: "24px",
  paddingLeft: "20px",
  fontSize: "md",
  marginInlineEnd: 0,
  minWidth: "max-content",
  color: "$textLabel",
  position: "absolute",
  transition: "0.2s ease",
  transform: "auto",
  focusStyle: {
    fontWeight: '400',
  },
})

const IconStyled = styled(
  TextBase,
  {
    name: 'InputField',
    cursor: 'pointer',

    asChild: true,

    width: '$6',
    height: '$6',

    color: '$color',

    variants: {
      disabled: {
        true: {
          cursor: 'not-allowed',
          color: '$disabledColor',
        },
      },
      focused: {
        true: {
          color: '$borderColorFocus',
        },
      },
    },
  },
  { accept: { color: 'color' } as const },
);

const InputFieldFrame = styled(XStack, {
  name: 'InputField',

  position: 'relative',

  variants: {
    hasError: {
      true: {
        borderColor: '$borderErrorInput',
      },
    },
  }
})

export interface InputFiledProps extends ComponentProps<typeof StyledInput> {
  errorMessages?: string;
  label?: string;
  value?: string;
  rightIcon?: ReactNode;
  isError?: boolean;
  isValidate?: boolean;
  isSearch?: boolean;
  containerStyle?: ComponentProps<typeof YStack>;
  frameStyle?: ComponentProps<typeof InputFieldFrame>;
  variant?: 'form';
}

const InputField = forwardRef<HTMLInputElement | Input, InputFiledProps>(
  ({
    isError = false,
    errorMessages = 'Default error',
    label,
    value,
    rightIcon,
    isSearch,
    disabled,
    containerStyle,
    frameStyle,
    onChange,
    onFocus,
    ...props
  }, ref) => {
    const [focusInput, setFocusInput] = useState(false);
    const onFocusInput = useCallback(
      (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
        setFocusInput(true);
        onFocus?.(event);
      },
      [onFocus],
    );
    return (
      <YStack {...containerStyle}>
        <InputFieldFrame disabled={disabled} hasError={isError} focusable={focusInput} {...frameStyle}>
          {label && <StyledLabel
            focusStyle={{
              transform: 'translateX(-1px) translateY(-15px) scale(0.9)',
            }}
            fontWeight={value ? '400' : 'bold'}
            transform={`translateX(${value ? '-1px' : 0}) translateY(${value ? '-15px' : 0}) scale(${value ? '0.9' : 'unset'})`}
            htmlFor={label}>
            {label}
          </StyledLabel>}
          <StyledInput id={label} ref={ref as Ref<Input>} onFocus={onFocusInput} {...props} />
        </InputFieldFrame>
      </YStack >
    );
  }
)

export default InputField;

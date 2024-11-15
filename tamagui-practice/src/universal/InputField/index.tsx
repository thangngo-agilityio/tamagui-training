import { ComponentProps, forwardRef, Ref, useCallback, useState } from "react";
import { styled, Input, Label, YStack, XStack, Text as TextBase } from "tamagui";
import { GestureResponderEvent, NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';


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
  // suffixIcon?: React.ForwardRefExoticComponent<SvgFactoryProps & React.RefAttributes<unknown>>;
  isError?: boolean;
  isValidate?: boolean;
  isSearch?: boolean;
  containerStyle?: ComponentProps<typeof YStack>;
  frameStyle?: ComponentProps<typeof InputFieldFrame>;
  suffixIconStyle?: ComponentProps<typeof IconStyled>;
  variant?: 'form';
  onPressSuffixIcon?: (event: GestureResponderEvent) => void;
}

const InputField = forwardRef<HTMLInputElement | Input, InputFiledProps>(
  ({
    isError = false,
    errorMessages = 'Default error',
    label,
    value,
    // suffixIcon: SuffixIcon,
    suffixIconStyle,
    isSearch,
    disabled,
    containerStyle,
    frameStyle,
    onBlur,
    onFocus,
    onPressSuffixIcon,
    ...props
  }, ref) => {
    const [focusInput, setFocusInput] = useState(false);

    const onBlurInput = useCallback(
      (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
        setFocusInput(false);
        onBlur?.(event);
      },
      [onBlur],
    );

    const onFocusInput = useCallback(
      (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
        setFocusInput(true);
        onFocus?.(event);
      },
      [onFocus],
    );

    return (
      <YStack {...containerStyle}>
        <InputFieldFrame disabled={disabled} hasError={isError} {...frameStyle}>
          {label && <StyledLabel
            fontWeight={value || focusInput ? '400' : 'bold'}
            transform={`translateX(${value || focusInput ? '-1px' : 0}) translateY(${value || focusInput ? '-15px' : 0}) scale(${value || focusInput ? '0.9' : 'unset'})`}
            htmlFor={label}>
            {label}
          </StyledLabel>}
          <StyledInput id={label} ref={ref as Ref<Input>} onFocus={onFocusInput} onBlur={onBlurInput} {...props} />
          {/* {SuffixIcon && (
            <IconStyled {...suffixIconStyle} onPress={onPressSuffixIcon} focused={focusInput}>
              <SuffixIcon disabled={disabled} />
            </IconStyled>
          )} */}
        </InputFieldFrame>
      </YStack >
    );
  }
)

export default InputField;

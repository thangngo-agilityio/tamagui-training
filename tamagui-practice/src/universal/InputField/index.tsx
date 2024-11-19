import { ComponentProps, forwardRef, ReactNode, Ref, useCallback, useState } from "react";
import { styled, Input, Label, YStack, XStack, View, Stack } from "tamagui";
import { NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';


const StyledInput = styled(Input, {
  name: 'InputField',

  fontSize: '$4',
  borderRadius: '$sm',
  borderWidth: '1px',
  borderColor: '$grey11',
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
        width: '100%',
        paddingLeft: '20px',
        paddingRight: '20px',
        paddingTop: '30px',
        paddingBottom: '15px',
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

// const IconStyled = styled(
//   View,
//   {
//     display: 'block',
//     name: 'InputField',
//     cursor: 'pointer',

//     asChild: true,

//     width: '$6',
//     height: '$6',

//     variants: {
//       disabled: {
//         true: {
//           cursor: 'not-allowed',
//           color: '$disabledColor',
//         },
//       },
//       focused: {
//         true: {
//           color: '$borderColorFocus',
//         },
//       },
//     },
//   },
//   { accept: { color: 'color' } as const },
// );

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
  suffixIcon?: ReactNode;
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
    suffixIcon: SuffixIcon,
    isSearch,
    disabled,
    containerStyle,
    frameStyle,
    onBlur,
    onFocus,
    onPress,
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
      <YStack width='100%' {...containerStyle}>
        <InputFieldFrame disabled={disabled} hasError={isError} {...frameStyle}>
          {label && <StyledLabel
            fontWeight={value || focusInput ? '400' : 'bold'}
            transform={`translateX(${value || focusInput ? '-1px' : 0}) translateY(${value || focusInput ? '-15px' : 0}) scale(${value || focusInput ? '0.9' : 'unset'})`}
            htmlFor={label}>
            {label}
          </StyledLabel>}
          <StyledInput id={label} ref={ref as Ref<Input>} onFocus={onFocusInput} onBlur={onBlurInput} {...props} />
          {SuffixIcon && (
            <Stack
              width="25px"
              height="25px"
              position="absolute"
              top="25px"
              right="15px"
              cursor='pointer'
              aria-label="The eye icon"
              hoverStyle={{
                borderColor: 'transparent',
                outlineStyle: 'none',
              }}
              focusStyle={{
                borderColor: 'transparent',
                outlineStyle: 'none',
              }}
              data-testid="right-icon-input"
              onPress={onPress}
            >
              {SuffixIcon}
            </Stack>
          )}
        </InputFieldFrame>
      </YStack >
    );
  }
)

export default InputField;

'use client';

import { Box, Checkbox, Flex, HStack, useDisclosure } from '@chakra-ui/react';
import { useCallback, useMemo } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Link from 'next/link';
import { Form, Stack, XStack, YStack } from 'tamagui';

// Component
import { Button, Heading, InputField, Text } from '@/universal';
import { EyeIcon, EyeOffIcon, GoogleIcon, LineIcon } from '@/icons';

// Constants
import { AUTH_SCHEMA, REQUIRED_FIELDS_LOGIN, ROUTER, TSignInForm } from '@/constants';

// Types
import { LoginFormData } from '@/types';

// Utils
import { isEnableSubmitButton } from '@/utils';
import { useFocus } from '@/hooks';

type TAuthFormProps = {
  isPending?: boolean;
  errorMessage?: string;
  handleClearRootError?: () => void;
  onSubmit: (data: TSignInForm) => void;
};

const LoginForm = ({ isPending, errorMessage = '', handleClearRootError, onSubmit }: TAuthFormProps) => {
  const {
    control,
    formState: { dirtyFields, errors },
    handleSubmit,
    clearErrors,
  } = useForm<LoginFormData>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { focusProps } = useFocus();
  const { isOpen: isShowPassword, onToggle: onShowPassword } = useDisclosure();

  // const renderPasswordIcon = useCallback(
  //   (isCorrect: boolean, callback: typeof onShowPassword): JSX.Element => {
  //     const Icon = isCorrect ? <EyeIcon /> : <EyeOffIcon/>;

  //     return (
  //       <Icon
  //         color='$grey4'
  //         width="25px"
  //         height="25px"
  //         cursor="pointer"
  //         onClick={callback}
  //       />
  //     );
  //   },
  //   [],
  // );

  const handleClearErrorMessage = useCallback(
    (field: keyof LoginFormData, isError: boolean, onChange: (value: string) => void) => (data: string) => {
      isError && clearErrors(field);

      onChange(data);
    },
    [clearErrors],
  );

  const handleSignIn = useCallback((data: TSignInForm) => onSubmit(data), [onSubmit]);

  const dirtyItems = Object.keys(dirtyFields);

  const enableSubmit: boolean = useMemo(
    () => isEnableSubmitButton(REQUIRED_FIELDS_LOGIN, dirtyItems, errors),
    [dirtyItems, errors],
  );
  const isDisableSubmit = !enableSubmit;

  return (
    <Stack
      width="100%"
      paddingHorizontal="28px"
      marginBottom="30px"
      alignItems="center"
      justifyContent="center"
      $gtMd={{
        width: '556px',
        paddingHorizontal: 'unset',
      }}
    >
      <YStack marginBottom="36px" alignItems="center">
        <Heading marginBottom="8px" variant="tertiary" size="huge">
          Welcome Back!
        </Heading>
        <Text variant="quaternary" size="small">
          Enter your details to proceed further
        </Text>
      </YStack>

      <Form width="100%" gap="10px" alignItems="center" marginBottom="24px" onSubmit={handleSubmit(handleSignIn)}>
        <Controller
          control={control}
          rules={AUTH_SCHEMA.EMAIL}
          name="email"
          render={({ field: { value, onChange }, fieldState: { error } }) => {
            const handleChange = (valueInput: string) => {
              const sanitizedValue = valueInput.trim();

              !!error && clearErrors('email');
              onChange(sanitizedValue);
            };

            return (
              <InputField
                label="Email"
                variant="form"
                isError={!!error?.message}
                errorMessages={error?.message}
                value={value}
                onChangeText={handleChange}
                onFocus={() => focusProps.onFocus()}
                onBlur={() => focusProps.onBlur()}
              />
            );
          }}
        />
        {/* <Controller
          control={control}
          rules={AUTH_SCHEMA.EMAIL}
          name="email"
          render={({ field: { value, onChange }, fieldState: { error } }) => {
            const handleChange = (valueInput: string) => {
              const sanitizedValue = valueInput.trim();

              !!error && clearErrors('email');
              onChange(sanitizedValue);
            };

            return (
              <InputField
                label="Email"
                variant="form"
                isError={!!error?.message}
                errorMessages={error?.message}
                value={value}
                onChange={handleChange}
                onBlur={handleClearRootError}
              />
            );
          }}
        /> */}

        <Controller
          control={control}
          rules={AUTH_SCHEMA.PASSWORD}
          name="password"
          render={({ field, fieldState: { error } }) => (
            <InputField
              label="Your password"
              variant="form"
              secureTextEntry={isShowPassword ? false : true}
              suffixIcon={isShowPassword ? <EyeOffIcon /> : <EyeIcon />}
              onPress={onShowPassword}
              isError={!!error?.message}
              errorMessages={error?.message}
              {...field}
              onChangeText={handleClearErrorMessage('password', !!error, field.onChange)}
              onBlur={handleClearRootError}
            />
          )}
        />

        <XStack justifyContent="space-between" width="100%" marginTop="10px">
          <Checkbox aria-label="remember" variant="round" position="relative">
            <Text variant="quinary" fontWeight="bold">
              Remember me
            </Text>
          </Checkbox>
          <Button
            variant="warning"
            paddingHorizontal={0}
            fit={true}
            aria-label="recover password"
            transform="capitalize"
          >
            Recover password
          </Button>
        </XStack>

        <YStack marginBottom={7} width="76%">
          <Text color="$textError" textAlign="center" marginBottom="10px" height={20}>
            {errorMessage}
          </Text>
          <Form.Trigger asChild>
            <Button
              width="100%"
              paddingVertical="15px"
              aria-label="Sign In"
              variant="auth"
              transform="capitalize"
              disabled={isDisableSubmit}
              isLoading={isPending}
            >
              SIGN IN
            </Button>
          </Form.Trigger>
        </YStack>
      </Form>

      <XStack justifyContent="center" alignItems="center" marginBottom="100px">
        <Text
          variant="quaternary"
          textAlign="center"
          dangerouslySetInnerHTML={{
            __html: 'Don&apos;t have an account?',
          }}
        />
        <Link
          href={ROUTER.REGISTER}
          aria-label="sign up"
          style={{
            padding: 0,
            fontSize: 'md',
            marginLeft: 5,
            color: '#284F49',
          }}
        >
          Sign up
        </Link>
      </XStack>
      <YStack
        width="100%"
        alignItems="center"
        justifyContent="center"
        $gtMd={{
          width: 'unset',
        }}
      >
        <XStack gap="18px" alignItems="center" marginBottom="14px">
          <LineIcon />
          <Text variant="quaternary">Or</Text>
          <LineIcon />
        </XStack>
        <Button variant="iconPrimary" position="relative" disabled={true}>
          <Stack position="absolute" top="17px" left="18px">
            <GoogleIcon />
          </Stack>
          Sign Up with Google
        </Button>
      </YStack>
    </Stack>
  );
};

export default LoginForm;

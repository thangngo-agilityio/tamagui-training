'use client';

import { useDisclosure } from '@chakra-ui/react';
import { useCallback, useMemo } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Link from 'next/link';

// Component
import { EyeIcon, EyeOffIcon, GoogleIcon, LineIcon } from '@/icons';

// Constants
import { AUTH_SCHEMA, ISignUpForm, REQUIRED_FIELDS_REGISTER, ROUTER } from '@/constants';

// Types
import { TUser } from '@/types';
import { isEnableSubmitButton } from '@/utils';
import { Form, Stack, XStack, YStack } from 'tamagui';
import { Button, Heading, InputField, Text } from '@/universal';
import { useFocus } from '@/hooks';

type TAuthFormProps = {
  isPending?: boolean;
  errorMessage?: string;
  handleClearRootError?: () => void;
  onSubmit: (data: TUser) => void;
};

const SignUpForm = ({ isPending, errorMessage = '', handleClearRootError, onSubmit }: TAuthFormProps) => {
  const {
    control,
    formState: { dirtyFields, isSubmitting, errors },
    handleSubmit,
    clearErrors,
  } = useForm<ISignUpForm>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      confirmPassword: '',
    },
  });

  const { focusProps } = useFocus();
  const { isOpen: isShowPassword, onToggle: onShowPassword } = useDisclosure();
  const { isOpen: isShowConfirmPassword, onToggle: onShowConfirmPassword } = useDisclosure();

  const handleClearErrorMessage = useCallback(
    (field: keyof ISignUpForm, isError: boolean, onChange: (value: string) => void) => (data: string) => {
      isError && clearErrors(field);

      onChange(data);
    },
    [clearErrors],
  );

  const handleSignUp = useCallback((data: TUser) => onSubmit(data), [onSubmit]);

  const dirtyItems = Object.keys(dirtyFields);

  const enableSubmit: boolean = useMemo(
    () => isEnableSubmitButton(REQUIRED_FIELDS_REGISTER, dirtyItems, errors),
    [dirtyItems, errors],
  );
  const isDisableSubmit = !enableSubmit;

  return (
    <Stack
      width="$full"
      paddingHorizontal="28px"
      $gtLg={{
        width: '556px',
        paddingHorizontal: 0,
      }}
      marginBottom="30px"
      alignItems="center"
      justifyContent="center"
    >
      <Stack marginBottom="36px" alignItems="center">
        <Heading marginBottom="8px" variant="tertiary" size="huge">
          Sign Up to get started
        </Heading>
        <Text variant="quaternary" size="small">
          Enter your details to proceed further
        </Text>
      </Stack>

      <Form width="100%" gap="10px" alignItems="center" marginBottom="24px" onSubmit={handleSubmit(handleSignUp)}>
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

        <YStack width="100%" gap="12px" alignItems="center">
          <Controller
            control={control}
            rules={AUTH_SCHEMA.NAME}
            name="firstName"
            render={({ field, fieldState: { error } }) => (
              <InputField
                label="First Name"
                variant="form"
                isError={!!error}
                errorMessages={error?.message}
                disabled={isSubmitting}
                {...field}
                onChangeText={handleClearErrorMessage('firstName', !!error, field.onChange)}
                aria-label="first name"
              />
            )}
          />

          <Controller
            control={control}
            rules={AUTH_SCHEMA.NAME}
            name="lastName"
            render={({ field, fieldState: { error } }) => (
              <InputField
                label="Last Name"
                variant="form"
                isError={!!error}
                errorMessages={error?.message}
                disabled={isSubmitting}
                {...field}
                onChangeText={handleClearErrorMessage('lastName', !!error, field.onChange)}
                aria-label="name"
              />
            )}
          />
        </YStack>

        <Controller
          control={control}
          rules={AUTH_SCHEMA.PASSWORD}
          name="password"
          render={({ field, fieldState: { error } }) => (
            <InputField
              label="Password"
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

        <Controller
          control={control}
          rules={AUTH_SCHEMA.CONFIRM_PASSWORD}
          name="confirmPassword"
          render={({ field, fieldState: { error } }) => (
            <InputField
              label="Confirm password"
              variant="form"
              secureTextEntry={isShowConfirmPassword ? false : true}
              suffixIcon={isShowConfirmPassword ? <EyeOffIcon /> : <EyeIcon />}
              onPress={onShowConfirmPassword}
              {...field}
              isError={!!error}
              errorMessages={error?.message}
              disabled={isSubmitting}
              onChangeText={handleClearErrorMessage('confirmPassword', !!error, field.onChange)}
            />
          )}
        />

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
              SIGN UP
            </Button>
          </Form.Trigger>
        </YStack>
      </Form>

      <XStack justifyContent="center" alignItems="center" marginBottom="100px">
        <Text
          variant="quaternary"
          textAlign="center"
          dangerouslySetInnerHTML={{
            __html: 'Already have an account?',
          }}
        />
        <Link
          href={ROUTER.LOGIN}
          aria-label="sign up"
          style={{
            padding: 0,
            fontSize: 'md',
            marginLeft: 5,
            color: '#284F49',
          }}
        >
          Sign in
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

export default SignUpForm;

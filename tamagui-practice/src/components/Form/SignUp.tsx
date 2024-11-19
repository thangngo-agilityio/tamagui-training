'use client';

import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { useCallback, useMemo } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ViewOffIcon, ViewIcon } from '@chakra-ui/icons';
import Link from 'next/link';

// Component
import { EyeIcon, EyeOffIcon, GoogleIcon, LineIcon } from '@/icons';

// Constants
import {
  AUTH_SCHEMA,
  ISignUpForm,
  REQUIRED_FIELDS_REGISTER,
  ROUTER,
} from '@/constants';

// Types
import { TUser } from '@/types';
import { isEnableSubmitButton } from '@/utils';
import { Form, Stack, XStack, YStack } from 'tamagui';
import { InputField } from '@/universal';
import { useFocus } from '@/hooks';

type TAuthFormProps = {
  isPending?: boolean;
  errorMessage?: string;
  handleClearRootError?: () => void;
  onSubmit: (data: TUser) => void;
};

const SignUpForm = ({
  isPending,
  errorMessage = '',
  handleClearRootError,
  onSubmit,
}: TAuthFormProps) => {
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
  const { isOpen: isShowConfirmPassword, onToggle: onShowConfirmPassword } =
    useDisclosure();

  const renderPasswordIcon = useCallback(
    (isCorrect: boolean, callback: typeof onShowPassword): JSX.Element => {
      const Icon = isCorrect ? ViewIcon : ViewOffIcon;

      return (
        <Icon
          color="gray.400"
          w="25px"
          h="25px"
          cursor="pointer"
          onClick={callback}
        />
      );
    },
    [],
  );

  const handleClearErrorMessage = useCallback(
    (
      field: keyof ISignUpForm,
      isError: boolean,
      onChange: (value: string) => void,
    ) =>
      (data: string) => {
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
      width='$full'
      paddingHorizontal='28px'
      $gtLg={{
        width: '556px',
        paddingHorizontal: 0
      }}
      marginBottom="30px"
      alignItems="center"
      justifyContent="center"
    >
      <Box mb="36px" textAlign="center">
        <Heading as="h1" mb="8px" variant="tertiary" size="size4xl">
          Sign Up to get started
        </Heading>
        <Text variant="quaternary" size="textMd">
          Enter your details to proceed further
        </Text>
      </Box>

      <Form
        width="100%"
        gap="10px"
        alignItems="center"
        marginBottom="24px"
        onSubmit={handleSubmit(handleSignUp)}
      >
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
                onChangeText={handleClearErrorMessage(
                  'firstName',
                  !!error,
                  field.onChange,
                )}
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
                onChangeText={handleClearErrorMessage(
                  'lastName',
                  !!error,
                  field.onChange,
                )}
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
              onChangeText={handleClearErrorMessage(
                'password',
                !!error,
                field.onChange,
              )}
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
              onChangeText={handleClearErrorMessage(
                'confirmPassword',
                !!error,
                field.onChange,
              )}
            />
          )}
        />

        <Box mb={7} w="76%">
          <Text color="red" textAlign="center" py={2} h={10}>
            {errorMessage}
          </Text>
          <Button
            width="100%"
            py="26px"
            type="submit"
            role="button"
            aria-label="Sign Up"
            size="md"
            variant="auth"
            colorScheme="primary"
            textTransform="capitalize"
            isDisabled={isDisableSubmit}
            isLoading={isPending}
          >
            SIGN UP
          </Button>
        </Box>
      </Form>

      <Flex justifyContent="center" alignItems="center" mb="100px">
        <Text
          variant="quaternary"
          textAlign="center"
          dangerouslySetInnerHTML={{
            __html: 'Already have an account?',
          }}
        />
        <Button
          as={Link}
          href={ROUTER.LOGIN}
          aria-label="sign in"
          w="fit-content"
          p={0}
          _hover={{
            bg: 'transparent',
          }}
          fontSize="md"
          variant="authTertiary"
          ml={1}
        >
          Sign in
        </Button>
      </Flex>
      <Flex
        w={{ base: '100%', lg: 'unset' }}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Flex flexDirection="row" gap="18px" alignItems="center" mb="14px">
          <LineIcon />
          <Text variant="quaternary">Or</Text>
          <LineIcon />
        </Flex>
        <Button
          variant="iconPrimary"
          size="md"
          position="relative"
          isDisabled={true}
        >
          <Box position="absolute" top="17px" left="18px">
            <GoogleIcon />
          </Box>
          Sign Up with Google
        </Button>
      </Flex>
    </Stack>
  );
};

export default SignUpForm;

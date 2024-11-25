'use client';

import {
  Box,
  Checkbox,
  Flex,
  HStack,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import { useCallback, useMemo } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Link from 'next/link';
import { Form, YStack } from 'tamagui';


// Component
import { Button, Heading, InputField, Text } from '@/universal';
import { EyeIcon, EyeOffIcon, GoogleIcon, LineIcon } from '@/icons';

// Constants
import {
  AUTH_SCHEMA,
  REQUIRED_FIELDS_LOGIN,
  ROUTER,
  TSignInForm,
} from '@/constants';

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

const LoginForm = ({
  isPending,
  errorMessage = '',
  handleClearRootError,
  onSubmit,
}: TAuthFormProps) => {
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
    (
      field: keyof LoginFormData,
      isError: boolean,
      onChange: (value: string) => void,
    ) =>
      (data: string) => {
        isError && clearErrors(field);

        onChange(data);
      },
    [clearErrors],
  );

  const handleSignIn = useCallback(
    (data: TSignInForm) => onSubmit(data),
    [onSubmit],
  );

  const dirtyItems = Object.keys(dirtyFields);

  const enableSubmit: boolean = useMemo(
    () => isEnableSubmitButton(REQUIRED_FIELDS_LOGIN, dirtyItems, errors),
    [dirtyItems, errors],
  );
  const isDisableSubmit = !enableSubmit;

  return (
    <Stack
      w={{ base: '100%', lg: '556px' }}
      px={{ base: '28px', lg: 'unset' }}
      mb="30px"
      alignItems="center"
      justifyContent="center"
    >
      <YStack marginBottom="36px" alignItems='center'>
        <Heading marginBottom="8px" variant='tertiary' size='huge'>
          Welcome Back!
        </Heading>
        <Text variant="quaternary" size="small">
          Enter your details to proceed further
        </Text>
      </YStack>

      <Form
        width="100%"
        gap="10px"
        alignItems="center"
        marginBottom="24px"
        onSubmit={handleSubmit(handleSignIn)}
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
              <InputField label="Email"
                variant='form'
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
              onChangeText={handleClearErrorMessage(
                'password',
                !!error,
                field.onChange,
              )}
              onBlur={handleClearRootError}
            />
          )}
        />

        <HStack justifyContent="space-between" w="100%" mt="10px">
          <Checkbox aria-label="remember" variant="round" position="relative">
            <Text variant="quinary" fontWeight="bold">
              Remember me
            </Text>
          </Checkbox>
          <Button
            variant='warning'
            paddingHorizontal={0}
            fit={true}
            aria-label="recover password"
            transform="capitalize"
          >
            Recover password
          </Button>
        </HStack>

        <YStack marginBottom={7} width="76%">
          <Text color="$textError" textAlign="center" paddingVertical={2} height={10}>
            {errorMessage}
          </Text>
          <Form.Trigger asChild >
            <Button
              width="100%"
              paddingVertical="15px"
              role="button"
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

      <Flex justifyContent="center" alignItems="center" mb="100px">
        <Text
          variant="quaternary"
          textAlign="center"
          dangerouslySetInnerHTML={{
            __html: 'Don&apos;t have an account?',
          }}
        />
        <Button
          as={Link}
          href={ROUTER.REGISTER}
          aria-label="sign up"
          w="fit-content"
          p={0}
          _hover={{
            bg: 'transparent',
          }}
          fontSize="md"
          variant="authTertiary"
          ml={1}
        >
          Sign up
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


    </Stack >
  );
};

export default LoginForm;

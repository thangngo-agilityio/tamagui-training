import { ERROR_MESSAGES } from './message';
import { REGEX } from './regex';

export const AUTH_SCHEMA = {
  NAME: {
    required: ERROR_MESSAGES.FIELD_REQUIRED('Name'),
    pattern: {
      value: REGEX.CHARACTERS,
      message: ERROR_MESSAGES.TEXT_FAILED,
    },
  },
  EMAIL: {
    required: ERROR_MESSAGES.FIELD_REQUIRED('Email'),
    pattern: {
      value: REGEX.EMAIL,
      message: ERROR_MESSAGES.EMAIL_FAILED,
    },
  },
  PASSWORD: {
    required: ERROR_MESSAGES.FIELD_REQUIRED('Password'),
    validate: (value: string) => {
      if (!REGEX.LENGTH_IS_EIGHT.test(value)) {
        return ERROR_MESSAGES.PASS_WORD_SHORT;
      }

      if (!REGEX.PASSWORD.test(value)) {
        return ERROR_MESSAGES.PASS_WORD_WEAK;
      }

      return true;
    },
  },
  CONFIRM_PASSWORD: {
    required: ERROR_MESSAGES.FIELD_REQUIRED('Confirm password'),
    validate: (val: string, { password }: { password: string }) => {
      if (password && val !== password) {
        return ERROR_MESSAGES.PASSWORD_NOT_MATCH;
      }
    },
  },
};

export interface ISignUpForm {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export type TSignInForm = {
  email: string;
  password: string;
};

export const REQUIRED_FIELDS_LOGIN = ['email', 'password'];
export const REQUIRED_FIELDS_REGISTER = [
  'email',
  'firstName',
  'lastName',
  'password',
  'confirmPassword',
];

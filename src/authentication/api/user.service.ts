import { Auth } from 'aws-amplify';
import type { CognitoUser, CognitoUserSession, ISignUpResult } from 'amazon-cognito-identity-js';

const signup = (email: string, password: string): Promise<ISignUpResult> => {
  return Auth.signUp(email, password);
};

const confirmSignup = (email: string, code: string): Promise<any> => {
  return Auth.confirmSignUp(email, code);
};

const resendSignupCode = (email: string): Promise<any> => {
  return Auth.resendSignUp(email);
};

const signin = (email: string, password: string): Promise<any> => {
  return Auth.signIn(email, password);
};

const signout = (): Promise<any> => {
  return Auth.signOut();
};

const currentSession = (): Promise<CognitoUserSession> => {
  return Auth.currentSession();
};

const forgotPasswordCode = (username: string): Promise<any> => {
  return Auth.forgotPassword(username);
};

const resendForgotPasswordCode = (email: string): Promise<any> => {
  return Auth.forgotPassword(email);
};

const forgotPasswordUpdate = (username: string, code: string, password: string): Promise<string> => {
  return Auth.forgotPasswordSubmit(username, code, password);
};

const get = async (): Promise<object | unknown> => {
  try {
    const currentUser = await Auth.currentAuthenticatedUser();
    const userAttributes = await Auth.userAttributes(currentUser);
    return userAttributes.reduce((obj, attr) => ({ ...obj, [attr.Name]: attr.Value }), {});
  } catch (error: unknown) {
    return error;
  }
};

const update = async (attributes: any): Promise<string | unknown> => {
  try {
    const currentUser = await Auth.currentAuthenticatedUser();
    return await Auth.updateUserAttributes(currentUser, attributes);
  } catch (error: unknown) {
    return error;
  }
};

const resendUpdateEmailCode = (email: string): Promise<void> => {
  return Auth.verifyCurrentUserAttribute('email');
};

const confirmUpdateEmail = (code: string): Promise<string> => {
  return Auth.verifyCurrentUserAttributeSubmit('email', code);
};

const challengePassword = async (newPassword: string): Promise<CognitoUser | unknown> => {
  try {
    const currentUser = await Auth.currentAuthenticatedUser();
    return await Auth.completeNewPassword(currentUser, newPassword);
  } catch (error: unknown) {
    return error;
  }
};

const updatePassword = async (oldPassword: string, newPassword: string): Promise<string | unknown> => {
  try {
    const currentUser = await Auth.currentAuthenticatedUser();
    return Auth.changePassword(currentUser, oldPassword, newPassword);
  } catch (error: unknown) {
    return error;
  }
};

const authenticationService = {
  signup,
  confirmSignup,
  resendSignupCode,
  signin,
  signout,
  currentSession,
  forgotPasswordCode,
  resendForgotPasswordCode,
  forgotPasswordUpdate,
  get,
  update,
  resendUpdateEmailCode,
  confirmUpdateEmail,
  challengePassword,
  updatePassword,
};
export default authenticationService;

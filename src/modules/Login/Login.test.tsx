import React from "react";
import { fireEvent, render, screen } from "@testing-library/react-native";
import { NativeBaseProviderMock } from "../../config/jest/mocks/NativeBaseProviderMock";
import { NavigationContainer } from "@react-navigation/native";

import { Login } from "./Login.view";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackNavigator } from "../../stacks/AuthStack";

type LoginProps = NativeStackScreenProps<AuthStackNavigator, "Login">;

const navigationMock = { navigate: jest.fn() };

beforeEach(() => {
  render(
    <NativeBaseProviderMock>
      <NavigationContainer>
        <Login
          navigation={navigationMock as unknown as LoginProps["navigation"]}
          route={null as unknown as LoginProps["route"]}
        />
      </NavigationContainer>
    </NativeBaseProviderMock>
  );
});

describe("<Login />", () => {
  describe("test email input rendering", () => {
    it("should be have email input", () => {
      expect(screen.getByTestId("email-input")).toBeTruthy();
    });

    it("should be have placeholder with value 'E-mail'", () => {
      expect(screen.getByPlaceholderText("E-mail")).toBeTruthy();
    });

    it("email input should be defaultValue with empty value", () => {
      const emailInput = screen.getByTestId("email-input");
      expect(emailInput.props.defaultValue).toBe("");
    });
  });

  describe("test password input rendering", () => {
    it("should be have password input", () => {
      expect(screen.getByTestId("password-input")).toBeTruthy();
    });

    it("should be have placeholder with value 'Password'", () => {
      expect(screen.getByPlaceholderText("Password")).toBeTruthy();
    });

    it("password input should be defaultValue with empty value", () => {
      const passwordInput = screen.getByTestId("password-input");
      expect(passwordInput.props.defaultValue).toBe("");
    });
  });

  describe("test SignIn button rendering", () => {
    it("should be have Sign In button", () => {
      expect(screen.getByTestId("signIn-button")).toBeTruthy();
    });

    it("should be have 'Sign In' text in SignIn Button", () => {
      expect(screen.getByText("Sign In")).toBeTruthy();
    });

    it("should be have 'SignIn' Button disabled", () => {
      const signInButton = screen.getByTestId("signIn-button");
      expect(signInButton.props).toHaveProperty(
        "accessibilityState.disabled",
        true
      );
    });
  });

  describe("test actions on the form", () => {
    it("Sign in button should be disabled when email or password field is empty", () => {
      const emailInput = screen.getByTestId("email-input");
      const passwordInput = screen.getByTestId("password-input");
      const signInButton = screen.getByTestId("signIn-button");

      fireEvent.changeText(emailInput, "");
      fireEvent.changeText(passwordInput, "");

      expect(signInButton.props).toHaveProperty(
        "accessibilityState.disabled",
        true
      );
    });

    it("Login button should be disabled when email is filled in but password field is empty", () => {
      const emailInput = screen.getByTestId("email-input");
      const passwordInput = screen.getByTestId("password-input");
      const signInButton = screen.getByTestId("signIn-button");

      fireEvent.changeText(emailInput, "user@email.com");
      fireEvent.changeText(passwordInput, "");

      expect(signInButton.props).toHaveProperty(
        "accessibilityState.disabled",
        true
      );
    });

    it("Login button should be disabled when password is filled in but email field is empty", () => {
      const emailInput = screen.getByTestId("email-input");
      const passwordInput = screen.getByTestId("password-input");
      const signInButton = screen.getByTestId("signIn-button");

      fireEvent.changeText(emailInput, "");
      fireEvent.changeText(passwordInput, "senha123");

      expect(signInButton.props).toHaveProperty(
        "accessibilityState.disabled",
        true
      );
    });

    it("Login button should not be disabled when email and password are filled", () => {
      const emailInput = screen.getByTestId("email-input");
      const passwordInput = screen.getByTestId("password-input");
      const signInButton = screen.getByTestId("signIn-button");

      fireEvent.changeText(emailInput, "user@email.com");
      fireEvent.changeText(passwordInput, "senha123");

      expect(signInButton.props).not.toHaveProperty(
        "accessibilityState.disabled"
      );
    });
  });

  describe("test 'Forgot password' ", () => {
    it("should be 'Forget Password?' text", () => {
      const forgetPasswordText = screen.getByText("Forget Password?");
      expect(forgetPasswordText).toBeTruthy();
    });

    it("should has 'Recover here' text", () => {
      const recoverHereText = screen.getByText("Recover here");
      expect(recoverHereText).toBeTruthy();
    });

    it("should has button with text 'Recover here' button that navigate to the 'Recover here' screen", () => {
      const recoverHereText = screen.getByText("Recover here");
      fireEvent.press(recoverHereText);

      expect(navigationMock.navigate).toHaveBeenCalledWith("ForgetPassword");
    });
  });
});

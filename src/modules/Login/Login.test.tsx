import {
  fireEvent,
  render,
  screen,
} from "@testing-library/react-native";
import React from "react";
import { NativeBaseProviderMock } from "../../utils/mocks/NativeBaseProviderMock";
import { Login } from "./Login.view";

beforeEach(() =>
  render(
    <NativeBaseProviderMock>
      <Login />
    </NativeBaseProviderMock>
  )
);

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
      expect(
        screen.getByPlaceholderText("Password")
      ).toBeTruthy();
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
});

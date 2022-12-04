import React from "react";
import { render, screen } from "@testing-library/react-native";
import { NativeBaseProviderMock } from "../../jest/mocks/NativeBaseProviderMock";
import { NavigationContainer } from "@react-navigation/native";
import { ForgetPassword } from "./ForgetPassword.view";

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");


beforeEach(() => {
  render(
    <NativeBaseProviderMock>
      <NavigationContainer>
        <ForgetPassword/>
      </NavigationContainer>
    </NativeBaseProviderMock>
  );
});


describe("<ForgetPassword />", () => {
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

      describe("test submit button rendering", () => {
        it("should be have submit button", () => {
            const submitButton = screen.getByText("Submit");
            expect(submitButton).toBeTruthy();
        });
      });


      describe("test keyboard events", () => {
        it("should open the keyboard automatically when you get to the screen", () => {
            const emailInput = screen.getByTestId("email-input");
            expect(emailInput.props.autoFocus).toBeTruthy();
        });
      });
});
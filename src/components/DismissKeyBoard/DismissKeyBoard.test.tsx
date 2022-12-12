import React from "react";
import { Keyboard } from "react-native";
import { fireEvent, render, screen } from "@testing-library/react-native";
import DismissKeyBoard from "./DismissKeyBoard";
import { Text } from "react-native";

const CustomDismissKeyBoardComponent = () => (
  <DismissKeyBoard>
    <Text>CustomDismissKeyBoardComponent</Text>
  </DismissKeyBoard>
);

beforeEach(() => {
  render(<CustomDismissKeyBoardComponent />);
});

describe("<DismissKeyBoard />", () => {
  it("should has one element with toolbar role", () => {
    expect(screen.getByRole("toolbar")).toBeTruthy();
  });

  it("when clicking on the element with toolbar role the keyboard should disappear", () => {
    const DismissKeyBoardComponent = screen.getByRole("toolbar");

    const EventDismissKeyBoard = spyOn(Keyboard, "dismiss");

    fireEvent.press(DismissKeyBoardComponent);

    expect(EventDismissKeyBoard).toBeCalledTimes(1);
  });
});

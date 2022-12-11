import React from "react";
import { Keyboard } from "react-native";
import { fireEvent, render, screen, } from "@testing-library/react-native";
import DismissKeyBoard from "./DismissKeyBoard";
import { View, Text } from "react-native";


const CustomDismissKeyBoard = () => (
    <DismissKeyBoard>
            <Text>CustomDismissKeyBoard</Text>
    </DismissKeyBoard>
);

beforeEach(() => {
    render(<CustomDismissKeyBoard />);
});

describe("<DismissKeyBoard />", () => {
   it("should has one element with toolbar role", () => {

    expect(screen.getByRole("toolbar")).toBeTruthy();
   });


   it("when clicking on the toolbar element the keyboard should disappear", () => {
        const DismissKeyBoardComponent = screen.getByRole("toolbar");
        
        const EventDismissKeyBoard = spyOn(Keyboard, "dismiss");

        fireEvent.press(DismissKeyBoardComponent);

        expect(EventDismissKeyBoard).toBeCalledTimes(1);

   });
});
import React from "react";
import { TouchableWithoutFeedback, Keyboard } from "react-native";

const DismissKeyBoard = ({ children }: { children: React.ReactNode }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} accessibilityRole="toolbar">
    {children}
  </TouchableWithoutFeedback>
);

export default DismissKeyBoard;

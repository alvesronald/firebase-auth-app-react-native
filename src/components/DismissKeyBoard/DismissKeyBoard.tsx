import React from "react";
import {
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

const DismissKeyBoard = ({
  children,
}: {
  children: JSX.Element;
}) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default DismissKeyBoard;

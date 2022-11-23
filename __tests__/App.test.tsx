/**
 * @format
 */

import "react-native";
import React from "react";
import App from "../src/App";

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";
import {
  render,
  screen,
} from "@testing-library/react-native";

describe("render <App />", () => {
  it("renders correctly", () => {
    renderer.create(<App />);
  });

  it("render whiteLabel Text", () => {
    render(<App />);
    expect(screen.getByText(/whiteLabel/i)).toBeTruthy();
  });
});

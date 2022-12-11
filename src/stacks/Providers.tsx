import React from "react";
import { NativeBaseProvider as NBProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";

const inset = {
  frame: { x: 0, y: 0, width: 0, height: 0 },
  insets: { top: 0, left: 0, right: 0, bottom: 0 },
};

export const NativeBaseProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => <NBProvider initialWindowMetrics={inset}>{children}</NBProvider>;

const Providers = ({ children }: { children: React.ReactNode }) => (
  <NativeBaseProvider>
    <NavigationContainer>{children}</NavigationContainer>
  </NativeBaseProvider>
);

export default Providers;

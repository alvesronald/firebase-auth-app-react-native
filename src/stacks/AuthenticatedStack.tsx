import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../modules/Home/Home.view";

export type AuthenticatedStack = {
  Home: undefined;
};

const Stack = createNativeStackNavigator<AuthenticatedStack>();

const AuthenticatedStack = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen
      name="Home"
      component={Home}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

export default AuthenticatedStack;

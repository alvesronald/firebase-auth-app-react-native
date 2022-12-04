import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../modules/Login/Login.view";
import { ForgetPassword } from "../modules/ForgetPassword/ForgetPassword.view";


export type AuthStackNavigator = {
  Login: undefined;
  ForgetPassword: undefined
}

const Stack = createNativeStackNavigator<AuthStackNavigator>();

const AuthStack = () => (
  <Stack.Navigator initialRouteName="Login">
    <Stack.Screen
      name="Login"
      component={Login}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ForgetPassword"
      component={ForgetPassword}
    />
  </Stack.Navigator>
);

export default AuthStack;

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthStack from "./AuthStack";
import AuthenticatedStack from "./AuthenticatedStack";
import useAuth from "../hooks/useAuth/useAuth";

type RootStackNavigator = {
  Auth: undefined;
  AuthenticatedStack: undefined;
};

const Stack = createNativeStackNavigator<RootStackNavigator>();

const Routes = () => {
  const isAuthenticaded = false;

  const { user } = useAuth();

  return (
    <Stack.Navigator>
      {isAuthenticaded ? (
        <Stack.Screen
          name="AuthenticatedStack"
          component={AuthenticatedStack}
          options={{
            headerShown: false,
          }}
        />
      ) : (
        <Stack.Screen
          name="Auth"
          component={AuthStack}
          options={{
            headerShown: false,
          }}
        />
      )}
    </Stack.Navigator>
  );
};

export default Routes;

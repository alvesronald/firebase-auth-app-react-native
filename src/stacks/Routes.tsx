import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthStack from "./AuthStack";

type RootStackNavigator = {
  Auth: undefined;
};

const Stack = createNativeStackNavigator<RootStackNavigator>();

const Routes = () => (
    <Stack.Navigator>
      <Stack.Screen
        name="Auth"
        component={AuthStack}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
);

export default Routes;

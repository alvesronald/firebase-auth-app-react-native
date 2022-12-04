import React from "react";
import { VStack, Input, Button, Text, Box, HStack } from "native-base";
import DismissKeyBoard from "../../components/DismissKeyBoard/DismissKeyBoard";
import useLoginViewModal from "./Login.view.model";
import { TouchableOpacity } from "react-native";
import { AuthStackNavigator } from "../../stacks/AuthStack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type LoginProps = NativeStackScreenProps<AuthStackNavigator, "Login">;

export const Login = ({ navigation }: LoginProps) => {
  const { form, handleChangeForm, isDisabledSignInButton } =
    useLoginViewModal();

  return (
    <DismissKeyBoard>
      <Box flex={1}>
        <VStack alignItems="center" space={5} marginTop={250}>
          <Input
            variant="outline"
            type="text"
            defaultValue=""
            size="2xl"
            placeholder="E-mail"
            width="90%"
            testID="email-input"
            value={form.email}
            onChangeText={(text) => handleChangeForm("email", text)}
          />
          <Input
            variant="outline"
            type="password"
            defaultValue=""
            size="2xl"
            placeholder="Password"
            width="90%"
            testID="password-input"
            value={form.password}
            onChangeText={(text) => handleChangeForm("password", text)}
          />
          <Button
            testID="signIn-button"
            isDisabled={isDisabledSignInButton}
            width="90%"
          >
            <Text color="white">Sign In</Text>
          </Button>
          <HStack>
            <Text fontSize="13">Forget Password? </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("ForgetPassword")}
            >
              <Text fontSize="13" underline>
                Recover here
              </Text>
            </TouchableOpacity>
          </HStack>
        </VStack>
      </Box>
    </DismissKeyBoard>
  );
};

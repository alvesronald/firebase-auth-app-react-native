import React from "react";
import { VStack, Input, Button, Text, Box } from "native-base";
import DismissKeyBoard from "../../components/DismissKeyBoard/DismissKeyBoard";

export const ForgetPassword = () => {
  return (
    <DismissKeyBoard>
      <Box flex={1}>
        <VStack alignItems="center" space={5} marginTop={250}>
          <Input
            variant="outline"
            type="password"
            defaultValue=""
            size="2xl"
            placeholder="E-mail"
            width="90%"
            testID="email-input"
            ref={(ref) => {
              ref?.getNativeRef()?.focus();
            }}
          />
          <Button testID="signIn-button" width="90%">
            <Text color="white">Submit</Text>
          </Button>
        </VStack>
      </Box>
    </DismissKeyBoard>
  );
};

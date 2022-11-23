import React from "react";
import { VStack, Input, Button, Text } from "native-base";

export const Login = () => {
    return(
        <VStack width="100%" alignItems="center"  style={{ flex: 1, marginTop: 250 }}>
            <VStack space={5}>
                <Input variant="outline" size="2xl" placeholder="E-mail" width='90%'/>
                <Input variant="outline" size="2xl" placeholder="Password" width='90%' type="password"/>
                <Button>
                    <Text color="white">Sign In</Text>
                </Button>
            </VStack>
        </VStack>
    );
};
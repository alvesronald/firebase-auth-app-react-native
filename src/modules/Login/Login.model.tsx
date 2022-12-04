import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackNavigator } from "../../stacks/AuthStack";

export type LoginProps = NativeStackScreenProps<AuthStackNavigator, "Login">;

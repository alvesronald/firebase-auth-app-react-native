import React from "react";
import {
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { Login } from "./modules/Login/Login.view";
import { NativeBaseProvider } from "native-base";


const App = () => {
  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.container}>
        <Login />
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  text: {
    color: "white",
    textTransform: "uppercase",
    fontSize: 20,
    textAlign: "center",
  },
});

export default App;

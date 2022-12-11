import React from "react";
import Routes from "./stacks/Routes";
import Providers from "./stacks/Providers";

const App = () => {
  return (
    <Providers>
      <Routes />
    </Providers>
  );
};

export default App;

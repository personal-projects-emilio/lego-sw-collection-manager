import React, { useEffect } from "react";
import Routes from "./routes";
import AppBar from "./components/commons/app-bar";

export const App = props => {
  const {tryAutoSignup} = props;
  
  useEffect(() => {
    tryAutoSignup();
  }, [tryAutoSignup]);

  return (
    <>
      <AppBar />
      <Routes />
    </>
  );
};

export default App;

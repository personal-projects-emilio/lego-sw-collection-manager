import React, { useEffect } from "react";
import Routes from "./routes";
import AppBar from "./components/commons/app-bar";

export const app = props => {
  useEffect(() => {
    props.tryAutoSignup();
  }, []);
  return (
    <>
      <AppBar />
      <Routes />
    </>
  );
};

export default app;

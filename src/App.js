import React from "react";
import Providers from "./providers";
import Routes from "./routes";
import AppBar from "./components/commons/app-bar";

export const app = () => (
    <Providers>
        <AppBar />
        <Routes />
    </Providers>
)

export default app;
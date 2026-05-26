import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ConfigProvider } from "antd";
import App from "./App.jsx";
import { theme } from "./theme.js";
import "./index.css";
import {QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <ConfigProvider theme={theme}>
                <App />
            </ConfigProvider>
        </QueryClientProvider>
    </StrictMode>,
);

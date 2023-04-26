import React, { Suspense } from 'react'
import App from "./App";
import {createRoot} from "react-dom/client";
import './utils/i18n'

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!!);

root.render(
    <React.StrictMode>
        <Suspense fallback="...loading">
            <App />
        </Suspense>
    </React.StrictMode>
);

import React, { Suspense } from 'react'
import App from "./App";
import {createRoot, Root} from "react-dom/client";
import './utils/i18n'

const rootElement: HTMLElement | null = document.getElementById("root")
const root: Root = createRoot(rootElement!!)

root.render(
    <React.StrictMode>
        <Suspense fallback="...loading">
            <App />
        </Suspense>
    </React.StrictMode>
);

import React, { Suspense } from "react"
import App from "./App"
import { createRoot, type Root } from "react-dom/client"
import "./utils/i18n"
import "./styles/globalStyle.css"
import { firebaseSetup } from "./utils/firebase"

firebaseSetup()

const rootElement: HTMLElement | null = document.getElementById("root")
const root: Root = createRoot(rootElement as Element)

root.render(
  <React.StrictMode>
    <Suspense fallback="...loading">
      <App />
    </Suspense>
  </React.StrictMode>
)

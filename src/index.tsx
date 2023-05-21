import React, { Suspense } from "react"
import App from "./App"
import { createRoot, type Root } from "react-dom/client"
import "./utils/i18n"
import "./styles/globalStyle.css"
import { firebaseSetup } from "./utils/firebase"

firebaseSetup()

const rootElement: HTMLElement | null = document.getElementById("root")
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root: Root = createRoot(rootElement!)

root.render(
  <React.StrictMode>
    <Suspense fallback="...loading">
      <App />
    </Suspense>
  </React.StrictMode>
)

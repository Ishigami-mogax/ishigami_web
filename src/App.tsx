import React from 'react'
import { RouterProvider } from "react-router-dom"
import router from "./routes"
import "./utils/i18n"

const App:React.FC = (): JSX.Element => {
    return <div>
        <RouterProvider router={router} />
    </div>
}

export default App;

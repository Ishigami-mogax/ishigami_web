import React from 'react'
import { RouterProvider } from "react-router-dom"
import router from "./routes"
import "./utils/i18n"
import {styles} from "./styles/App.style";

const App:React.FC = (): JSX.Element => {
    const {principalDiv} = styles

    return <div style={principalDiv}>
        <RouterProvider router={router} />
    </div>
}

export default App;

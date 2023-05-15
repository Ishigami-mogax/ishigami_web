import { createBrowserRouter } from "react-router-dom";
import Example from "./components/_example/Example";
import Navbar from "./components/_global/Navbar/Navbar";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Navbar></Navbar>
    },
    {
        path: "/collections",
        element: <Navbar/>
    },
    {
        path: "/stats",
        element: <Navbar/>
    },
    {
        path: "/exercises",
        element: <Navbar/>
    },
    {
        path: "/profile",
        element: <Navbar/>
    },
    {
        path: "/sign-up",
        element: <SignUp/>
    },
    {
        path: "/sign-in",
        element: <SignIn/>
    },
    {
        path: "/test",
        element: <Example/>
    },
    {
        path: "*",
        element: <div>404</div>
    },
]);

export default router;

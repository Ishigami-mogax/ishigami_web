import { createBrowserRouter } from "react-router-dom";
import Example from "./components/_example/Example";
import Navbar from "./components/_global/Navbar/Navbar";
import MethodCheck from "./components/Session/AdvancementMenu/MethodCheck/MethodCheck";
import Session from "./components/Session/Session";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Navbar/>
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
        path: "/test",
        element: <Session/>
    },
    {
        path: "*",
        element: <div>404</div>
    },
]);

export default router;

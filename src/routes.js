import { createBrowserRouter } from "react-router-dom";
import Example from "./components/_example/Example";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div/>
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

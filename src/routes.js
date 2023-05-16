import { createBrowserRouter } from "react-router-dom";
import Example from "./components/_example/Example";
import Navbar from "./components/_global/Navbar/Navbar";
import Collections from "./components/Colections/Collections";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Navbar>
        <Collections />
      </Navbar>
    ),
  },
  {
    path: "/collections",
    element: <Navbar />,
  },
  {
    path: "/stats",
    element: <Navbar />,
  },
  {
    path: "/exercises",
    element: <Navbar />,
  },
  {
    path: "/profile",
    element: <Navbar />,
  },
  {
    path: "/test",
    element: <Example />,
  },
  {
    path: "*",
    element: <div>404</div>,
  },
]);

export default router;

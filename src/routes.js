import { createBrowserRouter } from "react-router-dom"
import Example from "./components/_example/Example"
import Navbar from "./components/_global/Navbar/Navbar"
import Authentication from "./components/Authentication/Authentication"
import Collections from "./components/Colections/Collections"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar></Navbar>
  },
  {
    path: "/collections",
    element: (
      <Navbar>
        <Collections />
      </Navbar>
    )
  },
  {
    path: "/stats",
    element: <Navbar />
  },
  {
    path: "/exercises",
    element: <Navbar />
  },
  {
    path: "/profile",
    element: <Navbar />
  },
  {
    path: "/authentication",
    element: <Authentication sign={false} />
  },
  {
    path: "/test",
    element: <Example />
  },
  {
    path: "*",
    element: <div>404</div>
  }
])

export default router

import { createBrowserRouter } from "react-router";
import Main from "../Layout/Main";
import Home from "../pages/Home";
import About from "../pages/About";
import Experience from "../pages/Experience";
import Contact from "../pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/experience",
        element: <Experience></Experience>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

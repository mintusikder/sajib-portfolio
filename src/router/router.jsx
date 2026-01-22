// src/router/router.jsx
import { createBrowserRouter } from "react-router";
import Main from "../Layout/Main";
import Home from "../pages/Home";
import About from "../pages/About";
import Experience from "../pages/Experience";
import Contact from "../pages/Contact";
import Work from "../pages/Work";
import Brands from "../pages/Brands";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/experience", element: <Experience /> },
      { path: "/contact", element: <Contact /> },
      { path: "/work", element: <Work /> },
      { path: "/brands", element: <Brands /> },
    ],
  },
]);

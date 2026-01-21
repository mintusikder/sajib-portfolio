import { createBrowserRouter } from "react-router";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", lazy: () => import("../pages/Home.jsx") },
      { path: "/about", lazy: () => import("../pages/About.jsx") },
      { path: "/contact", lazy: () => import("../pages/Contact.jsx") }, ]
  },
]);
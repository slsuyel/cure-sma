import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Care from "../pages/Care/Care";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";
import ErrorPage from "../components/ErrorPage";
import Advocacy from "../pages/Advocacy/Advocacy";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/care",
        element: <Care />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/advocacy",
        element: <Advocacy />,
      },
    ],
  },
]);

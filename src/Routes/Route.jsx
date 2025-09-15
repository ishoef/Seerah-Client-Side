import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Seerah from "../Pages/Seerah/Seerah";
import Quiz from "../Pages/Quize/Quiz";
import AboutUs from "../Pages/AboutUs/AboutUs";
import AuthLayout from "../Layouts/AuthLayout";
import LoginForm from "../Auth/Login/Login";
import RegisterForm from "../Auth/Register/Register";
import DashboardLayout from "../Layouts/DashboardLayout";
import ArticleDetails from "../Pages/ArticleDetails/ArticleDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/articles",
        element: <Seerah />,
      },
      {
        path: "/quizes",
        element: <Quiz />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/articles/:id",
        element: <ArticleDetails />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    // children: [
    //   {
    //     index: true,
    //     path: "login",
    //     element: <LoginForm />,
    //   },
    //   {
    //     path: "register",
    //     element: <RegisterForm />,
    //   },
    // ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
  },
]);

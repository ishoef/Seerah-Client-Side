import { createBrowserRouter, Navigate } from "react-router";
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
import useUserRole from "../Hooks/useUserRole/useUserRole";
import AdminDashboard from "../Dashboard/AdminDashboard/AdminDashboard";
import UserDashboard from "../Dashboard/UserDashboard/UserDashboard";
import Loader from "../Components/Loader/Loader/Loader";
import Overview from "../Dashboard/AdminDashboard/Overview/Overview";
import UserProfile from "../Dashboard/UserDashboard/UserProfile/UserProfile";
import AllUsers from "../Dashboard/AdminDashboard/AllUsers/AllUsers";
import AllArticles from "../Dashboard/AdminDashboard/AllArticles/AllArticles";
import AllQuizes from "../Dashboard/AdminDashboard/AllQuizes/AllQuizes";
import AddQuizes from "../Dashboard/AdminDashboard/AddQuizes/AddQuizes";
import AddArticle from "../Dashboard/AdminDashboard/AddArticle/AddArticle";
import AllAdmin from "../Dashboard/AdminDashboard/AllAdmin/AllAdmin";
import Leaderboard from "../Dashboard/AdminDashboard/Leaderboard/Leaderboard";

// eslint-disable-next-line react-refresh/only-export-components
function DashboardRedirect() {
  const { role, loading } = useUserRole();

  if (loading) return <Loader />;

  if (role === "admin") {
    return <Navigate to="/dashboard/admin/overview" replace />;
  } else if (role === "user") {
    return <Navigate to="/dashboard/user" replace />;
  } else {
    return <Navigate to="/auth" replace />;
  }
}

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
    children: [
      // if user just visits /dashboard → redirect based on role
      { index: true, element: <DashboardRedirect /> },

      // explicit routes
      {
        path: "admin",
        element: <AdminDashboard />,
        children: [
          {
            index: true,
            element: <Overview />,
          },
          {
            path: "overview",
            element: <Overview />,
          },
          {
            path: "all-users",
            element: <AllUsers />,
          },
          {
            path: "all-articles",
            element: <AllArticles />,
          },
          {
            path: "add-articles",
            element: <AddArticle />,
          },
          {
            path: "all-quizes",
            element: <AllQuizes />,
          },
          {
            path: "add-quizes",
            element: <AddQuizes />,
          },
          {
            path: "all-admins",
            element: <AllAdmin />,
          },
          {
            path: "leaderboard",
            element: <Leaderboard />,
          },
        ],
      },
      {
        path: "user",
        element: <UserDashboard />,
        children: [{ path: "profile", element: <UserProfile /> }],
      },
    ],
  },
]);

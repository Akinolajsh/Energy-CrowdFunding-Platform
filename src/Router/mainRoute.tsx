import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/common/Layout";
import HomeScreen from "../Pages/Home/HomeScreen";
import Register from "../Pages/Auth/Register";
import Login from "../Pages/Auth/Login";
import Resetpassword from "../Pages/Auth/ResetPassword";
import ChangePassword from "../Pages/Auth/ChangePassword";
import Testimony from "../Pages/Home/Testimony";
import Category from "../Pages/Home/Category";
import MessagePage from "../Pages/screen/MessagePage";
import AlternatePage from "../Pages/screen/AlternatePage";

export const mainRoute = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
    ],
  },
  {
    path: "/alternate",
    element: <AlternatePage />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/:token/verify",
    element: <Login />,
  },
  {
    path: "/reset-password",
    element: <Resetpassword />,
  },
  {
    path: "/change-user-password",
    element: <ChangePassword />,
  },
  {
    path: "/:token/reset-user-password",
    element: <ChangePassword />,
  },
  {
    path: "/testimony",
    element: <Testimony />,
  },
  {
    path: "/category",
    element: <Category />,
  },
  {
    path: "/message",
    element: <MessagePage />,
  },
]);

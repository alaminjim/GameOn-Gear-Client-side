import { createBrowserRouter } from "react-router-dom";
import Layouts from "../Layouts/Layouts";
import Home from "../Pages/Home";
import AllEquipments from "../Pages/AllEquipments";
import AddEquipments from "../Pages/AddEquipments";
import EquipmentsList from "../Pages/EquipmentsList";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ErrorPage from "../Components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts></Layouts>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/all",
        element: <AllEquipments></AllEquipments>,
      },
      {
        path: "/add",
        element: <AddEquipments></AddEquipments>,
      },
      {
        path: "/list",
        element: <EquipmentsList></EquipmentsList>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);

export default router;

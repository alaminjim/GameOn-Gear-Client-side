import { createBrowserRouter } from "react-router-dom";
import Layouts from "../Layouts/Layouts";
import Home from "../Pages/Home";
import AllEquipments from "../Pages/AllEquipments";
import AddEquipments from "../Pages/AddEquipments";
import EquipmentsList from "../Pages/EquipmentsList";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ErrorPage from "../Components/ErrorPage";
import UpdateEquipments from "../Pages/UpdateEquipments";
import ViewDetails from "../Pages/ViewDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts></Layouts>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://game-on-gear-server.vercel.app/equipment"),
      },
      {
        path: "/all",
        element: <AllEquipments></AllEquipments>,
        loader: () =>
          fetch("https://game-on-gear-server.vercel.app/equipments"),
      },
      {
        path: "/add",
        element: (
          <PrivateRoute>
            <AddEquipments></AddEquipments>
          </PrivateRoute>
        ),
      },
      {
        path: "/list",
        element: (
          <PrivateRoute>
            <EquipmentsList></EquipmentsList>
          </PrivateRoute>
        ),
        loader: () =>
          fetch("https://game-on-gear-server.vercel.app/equipments"),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdateEquipments></UpdateEquipments>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://game-on-gear-server.vercel.app/equipments/${params.id}`
          ),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <ViewDetails></ViewDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://game-on-gear-server.vercel.app/equipments/${params.id}`
          ),
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

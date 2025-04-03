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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts></Layouts>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/equipment"),
      },
      {
        path: "/all",
        element: <AllEquipments></AllEquipments>,
        loader: () => fetch("http://localhost:5000/equipments"),
      },
      {
        path: "/add",
        element: <AddEquipments></AddEquipments>,
      },
      {
        path: "/list",
        element: <EquipmentsList></EquipmentsList>,
        loader: () => fetch("http://localhost:5000/equipments"),
      },
      {
        path: "/update/:id",
        element: <UpdateEquipments></UpdateEquipments>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/equipments/${params.id}`),
      },
      {
        path: "/details/:id",
        element: <ViewDetails></ViewDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/equipments/${params.id}`),
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

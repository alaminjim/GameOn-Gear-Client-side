import { createBrowserRouter } from "react-router-dom";
import Layouts from "../Layouts/Layouts";
import Home from "../Components/Home";
import AllEquipments from "../Components/AllEquipments";
import AddEquipments from "../Components/AddEquipments";
import EquipmentsList from "../Components/EquipmentsList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts></Layouts>,
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
]);

export default router;

import { useLoaderData } from "react-router-dom";
import Card from "../Components/Card";
import AllCards from "../Components/AllCards";

const AllEquipments = () => {
  const equipmentDataS = useLoaderData();
  return (
    <div>
      <div className="mt-12 space-y-9">
        {equipmentDataS.map((item) => (
          <AllCards key={item._id} item={item}></AllCards>
        ))}
      </div>
    </div>
  );
};

export default AllEquipments;

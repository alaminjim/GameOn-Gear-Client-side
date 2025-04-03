import { useLoaderData } from "react-router-dom";
import Card from "../Components/Card";
import AllCards from "../Components/AllCards";
import { useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const AllEquipments = () => {
  const equipmentDataS = useLoaderData();
  const [equipment, setEquipment] = useState(equipmentDataS);

  return (
    <div>
      <div className="mt-12 space-y-9">
        {equipment.map((item) => (
          <AllCards
            key={item._id}
            item={item}
            equipment={equipment}
            setEquipment={setEquipment}
          ></AllCards>
        ))}
      </div>
    </div>
  );
};

export default AllEquipments;

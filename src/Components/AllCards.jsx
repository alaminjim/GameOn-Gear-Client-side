import { TbFileDescription } from "react-icons/tb";
import { IoIosPricetags } from "react-icons/io";
import { CiStar } from "react-icons/ci";
import { SiStockx } from "react-icons/si";
import { CiTimer } from "react-icons/ci";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const AllCards = ({ item, setEquipment, equipment }) => {
  const { itemName, image, description, price, rating, stock, time, _id } =
    item;

  const handelDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://game-on-gear-server.vercel.app/equipment/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Data has been deleted.",
                icon: "success",
              });

              const remaining = equipment.filter(
                (deleteOne) => deleteOne._id !== _id
              );
              setEquipment(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="bg-[#b4be2d43] my-10">
        <div className="lg:flex">
          <img
            src={image}
            className="lg:max-w-sm rounded-lg   lg:m-5 mr-1.5 shadow-xl"
          />
          <div className="pt-8 pl-2 space-y-2">
            <h2 className="card-title font-bold text-2xl text-[#B5BE2D]">
              {itemName}
            </h2>
            <p className="font-semibold text-gray-500 flex gap-1.5">
              <TbFileDescription className="w-5 h-5"></TbFileDescription>
              {description}
            </p>

            <p className="flex gap-1.5 font-extrabold text-gray-500">
              <IoIosPricetags className="w-4 h-4 mt-1"></IoIosPricetags> {price}
              $
            </p>
            <p className="font-extrabold text-gray-500 flex gap-1.5">
              <SiStockx className="w-4 h-4 mt-1"></SiStockx>
              {stock}
            </p>
            <p className="font-extrabold text-gray-500 flex gap-1">
              <CiTimer className="w-4 h-4 mt-1"></CiTimer>
              {time}
            </p>
            <p className="flex gap-1 font-extrabold text-gray-500">
              <CiStar className="w-5 h-5"></CiStar>
              {rating}
            </p>
            <div className="space-x-3">
              <Link to={`/update/${_id}`}>
                <button className="w-[95px]  h-10 mb-6  text-[#B5BE2D] font-bold border-2 border-[#B5BE2D] hover:bg-[#B5BE2D] hover:text-white rounded-full">
                  Update
                </button>
              </Link>
              <button
                onClick={() => handelDelete(_id)}
                className="w-[95px]  h-10 text-red-300 font-bold border-2 border-red-300 hover:bg-red-300 hover:text-white rounded-full"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCards;

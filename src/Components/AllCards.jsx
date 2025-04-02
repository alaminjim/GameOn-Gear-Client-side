import { TbFileDescription } from "react-icons/tb";
import { IoIosPricetags } from "react-icons/io";
import { CiStar } from "react-icons/ci";
import { SiStockx } from "react-icons/si";
import { CiTimer } from "react-icons/ci";

const AllCards = ({ item }) => {
  const { itemName, image, description, price, rating, stock, time } = item;
  return (
    <div>
      <div className="bg-[#b4be2d43]">
        <div className="flex">
          <img src={image} className="max-w-sm rounded-lg m-5 shadow-xl" />
          <div className="pt-8 space-y-2">
            <h2 className="card-title font-bold text-2xl text-[#B5BE2D]">
              {itemName}
            </h2>
            <p className="font-semibold text-gray-500 flex gap-1.5">
              <TbFileDescription className="w-5 h-5"></TbFileDescription>
              {description}
            </p>

            <p className="flex gap-1.5 font-extrabold text-gray-500">
              <IoIosPricetags className="w-4 h-4 mt-0.5"></IoIosPricetags>{" "}
              {price}$
            </p>
            <p className="font-extrabold text-gray-500 flex gap-1.5">
              <SiStockx className="w-4 h-4 mt-0.5"></SiStockx>
              {stock}
            </p>
            <p className="font-extrabold text-gray-500 flex gap-1">
              <CiTimer className="w-4 h-4 mt-0.5"></CiTimer>
              {time}
            </p>
            <p className="flex gap-1 font-extrabold text-gray-500">
              <CiStar className="w-5 h-5"></CiStar>
              {rating}
            </p>
            <div className="space-x-3">
              <button className="w-[95px]  h-10 text-[#B5BE2D] font-bold border-2 border-[#B5BE2D] hover:bg-[#B5BE2D] hover:text-white rounded-full">
                Update
              </button>
              <button className="w-[95px]  h-10 text-red-300 font-bold border-2 border-red-300 hover:bg-red-300 hover:text-white rounded-full">
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

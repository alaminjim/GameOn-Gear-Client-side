import { TbFileDescription } from "react-icons/tb";
import { IoIosPricetags } from "react-icons/io";
import { CiStar } from "react-icons/ci";
import { SiStockx } from "react-icons/si";
import { CiTimer } from "react-icons/ci";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  const { itemName, image, description, price, rating, stock, time, _id } =
    item;

  return (
    <div>
      <div className="card bg-[#b4be2d2f] w-96 shadow-sm">
        <figure>
          <img
            className="w-full h-[256px] object-contain"
            src={image}
            alt={itemName}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-[#B5BE2D]">{itemName}</h2>
          <p className="font-semibold text-gray-500 flex gap-1.5">
            <TbFileDescription className="w-5 h-5"></TbFileDescription>
            {description}
          </p>

          <p className="flex gap-1.5 font-extrabold text-gray-500">
            <IoIosPricetags className="w-4 h-4 mt-0.5"></IoIosPricetags> {price}
            $
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
          <Link to={`/details/${_id}`}>
            <button className="w-[110px]  h-10 mb-6  text-[#B5BE2D] font-bold border-2 border-[#B5BE2D] hover:bg-[#B5BE2D] hover:text-white rounded-full">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;

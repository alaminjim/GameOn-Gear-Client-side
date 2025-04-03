import { useLoaderData } from "react-router-dom";
import { TbFileDescription } from "react-icons/tb";
import { IoIosPricetags } from "react-icons/io";
import { CiStar } from "react-icons/ci";
import { SiStockx } from "react-icons/si";
import { CiTimer } from "react-icons/ci";
import { BiCustomize } from "react-icons/bi";
import { MdOutlineCategory } from "react-icons/md";
import { MdOutlineSubtitles } from "react-icons/md";

const ViewDetails = () => {
  const detailsLoader = useLoaderData();
  const {
    itemName,
    category,
    image,
    description,
    price,
    rating,
    stock,
    time,
    customization,
    title,
  } = detailsLoader;

  return (
    <div>
      <h2 className="text-center text-2xl font-semibold pt-7 text-[#B5BE2D]">
        Equipments Details
      </h2>
      <p className="text-center font-semibold text-gray-500 pt-4">
        Read all details this item.And thinking what should you do.
      </p>
      <div className="hero bg-[#b4be2d53] my-16  py-7 h-full">
        <div>
          <img
            src={image}
            className="w-5xl lg:ml-16 mt-5 rounded-lg shadow-xl"
          />
          <div className="space-y-2 pl-16">
            <h1 className="text-4xl pt-4 text-[#B5BE2D] font-bold">
              {itemName}
            </h1>
            <p className="pt-2.5 flex gap-1">
              <TbFileDescription className="w-5 h-5"></TbFileDescription>
              <span className="text-gray-500 font-bold">Description: </span>
              <span className="text-gray-600 font-extrabold flex">
                {description}
              </span>
            </p>
            <p className="flex gap-1">
              <MdOutlineSubtitles></MdOutlineSubtitles>
              <span className="text-gray-500 font-bold">Title: </span>
              <span className="text-gray-600 font-extrabold flex">{title}</span>
            </p>
            <p className="flex gap-1">
              <MdOutlineCategory className="w-4 h-4 mt-1"></MdOutlineCategory>
              <span className="text-gray-500 font-bold">Category: </span>
              <span className="text-gray-600 font-extrabold flex">
                {category}
              </span>
            </p>
            <p className="flex gap-1">
              <IoIosPricetags className="w-4 h-4 mt-1"></IoIosPricetags>
              <span className="text-gray-500 font-bold">Price: </span>
              <span className="text-gray-600 font-extrabold flex">
                {price}$
              </span>
            </p>
            <p className="flex gap-1">
              <BiCustomize className="w-4 h-4 mt-1"></BiCustomize>
              <span className="text-gray-500 font-bold">Customization: </span>
              <span className="text-gray-600 font-extrabold flex">
                {customization}
              </span>
            </p>
            <p className="flex gap-1">
              <SiStockx className="w-4 h-4 mt-1"></SiStockx>
              <span className="text-gray-500 font-bold">Stock: </span>
              <span className="text-gray-600 font-extrabold flex">{stock}</span>
            </p>
            <p className="flex gap-1">
              <CiStar className="w-4 h-4 mt-1"></CiStar>
              <span className="text-gray-500 font-bold">Rating: </span>
              <span className="text-gray-600 font-extrabold flex">
                {rating}
              </span>
            </p>
            <p className="flex gap-1">
              <CiTimer className="w-4 h-4 mt-1"></CiTimer>
              <span className="text-gray-500 font-bold">Time: </span>
              <span className="text-gray-600 font-extrabold flex">{time}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;

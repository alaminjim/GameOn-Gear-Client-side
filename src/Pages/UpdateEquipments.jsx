import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";

const UpdateEquipments = () => {
  const updateLoader = useLoaderData();

  const { user } = useContext(AuthContext);
  const [customization, setCustomization] = useState("");
  const [userName, setUserName] = useState(user?.displayName);
  const [userEmail, setUserEmail] = useState(user?.email);

  const handelAdd = (e) => {
    e.preventDefault();

    const form = e.target;
    const itemName = form.itemName.value;
    const category = form.category.value;
    const image = form.image.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const stock = form.stock.value;
    const time = form.time.value;

    const updateEquipment = {
      itemName,
      category,
      image,
      description,
      price,
      rating,
      stock,
      time,
      customization,
      userName,
      userEmail,
    };

    console.log(updateEquipment);
  };

  return (
    <div>
      <div className="w-full  h-full bg-[#b4be2d2f] rounded-md my-20">
        <h1 className="text-2xl text-center font-semibold pt-6 text-[#B5BE2D]">
          Update SPORTS EQUIPMENTS...!
        </h1>
        <form onSubmit={handelAdd}>
          <div className="ml-46 text-lg font-semibold mt-5 text-gray-500">
            {user?.displayName && (
              <p
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="flex gap-2"
              >
                <FaUser className="size-5 ml-1.5"></FaUser> UserName:
                {user.displayName}
              </p>
            )}
            {user?.email && (
              <p
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                className="flex"
              >
                <MdOutlineMarkEmailUnread className="w-7 h-7 mr-1.5"></MdOutlineMarkEmailUnread>{" "}
                UserEmail: {user.email}
              </p>
            )}
          </div>

          <div className="lg:flex justify-center items-center gap-8 space-y-2 mt-10">
            <div className="space-y-1 pt-2">
              <label className="fieldset-label pl-1 font-bold">Item Name</label>
              <input
                className="lg:w-[380px] w-full h-[43px]  rounded-xl border-2 border-[#B5BE2D] px-3  placeholder:font-semibold"
                type="text"
                name="itemName"
                placeholder="Item Name"
                defaultValue={updateLoader.itemName}
              />
            </div>
            <div className="space-y-1">
              <label className="fieldset-label pl-1 font-bold">
                Category Name
              </label>
              <input
                className="lg:w-[380px] w-full  h-[43px] rounded-xl border-2 border-[#B5BE2D] px-3  placeholder:font-semibold"
                type="text"
                name="category"
                placeholder="Category Name"
                defaultValue={updateLoader.category}
              />
            </div>
          </div>
          <div className="lg:flex justify-center items-center space-y-2 gap-8 lg:mt-5">
            <div className="space-y-1 pt-1.5">
              <label className="fieldset-label pl-1 font-bold">Image</label>
              <input
                className="lg:w-[380px] w-full h-[43px] rounded-xl border-2 border-[#B5BE2D] px-3  placeholder:font-semibold"
                type="text"
                name="image"
                placeholder="Image"
                defaultValue={updateLoader.image}
              />
            </div>
            <div className="space-y-1">
              <label className="fieldset-label pl-1 font-bold">
                Description
              </label>
              <input
                className="lg:w-[380px] w-full  h-[43px] rounded-xl border-2 border-[#B5BE2D] px-3  placeholder:font-semibold"
                type="text"
                name="description"
                placeholder="Description"
                defaultValue={updateLoader.description}
              />
            </div>
          </div>
          <div className="lg:flex justify-center items-center space-y-2 gap-8 lg:mt-5">
            <div className="space-y-1 pt-1.5">
              <label className="fieldset-label pl-1 font-bold">Price</label>
              <input
                className="lg:w-[380px] w-full h-[43px] rounded-xl border-2 border-[#B5BE2D] px-3  placeholder:font-semibold"
                type="text"
                name="price"
                placeholder="Price"
                defaultValue={updateLoader.price}
              />
            </div>
            <div className="space-y-1">
              <label className="fieldset-label pl-1 font-bold">Rating</label>
              <input
                className="lg:w-[380px] w-full  h-[43px] rounded-xl border-2 border-[#B5BE2D] px-3  placeholder:font-semibold"
                type="text"
                name="rating"
                placeholder="Rating"
                defaultValue={updateLoader.rating}
              />
            </div>
          </div>
          <div className="lg:flex justify-center items-center space-y-2 gap-8 lg:mt-5">
            <div className="space-y-1 pt-1.5">
              <label className="fieldset-label pl-1 font-bold">
                Available Stock
              </label>
              <input
                className="lg:w-[380px] w-full  h-[43px] rounded-xl border-2 border-[#B5BE2D] px-3  placeholder:font-semibold"
                type="text"
                name="stock"
                placeholder="Stock"
                defaultValue={updateLoader.stock}
              />
            </div>
            <div className="space-y-1">
              <label className="fieldset-label pl-1 font-bold">
                Process Time
              </label>
              <input
                type="time"
                name="time"
                defaultValue={updateLoader.time}
                className="input lg:w-[380px] w-full  h-[43px] rounded-xl border-2 border-[#B5BE2D] py-4 bg-base-200"
              />
            </div>
          </div>
          <div className="space-y-1 mt-4 lg:ml-[179px]">
            <label className="fieldset-label pl-1 font-bold">
              Customization
            </label>
            <select
              value={customization}
              onChange={(e) => setCustomization(e.target.value)}
              defaultValue={updateLoader.customization}
              className="lg:w-[795px] h-[43px] w-full border-2 border-[#B5BE2D] px-3 rounded-xl focus:outline-none focus:border-gray-600"
            >
              <option value="extra-grip">Bat with Extra Grip</option>
              <option value="hit-paper">Hit Paper</option>
              <option value="custom-sticker">Custom Sticker</option>
              <option value="engraving">Name Engraving</option>
            </select>
          </div>

          <button className="btn lg:w-[795px] lg:ml-[179px] w-full mb-8 mt-9 bg-[#B5BE2D] text-white">
            Update Equipment
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateEquipments;

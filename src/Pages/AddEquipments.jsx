import { useState } from "react";

const AddEquipments = () => {
  const [customization, setCustomization] = useState("");

  const handelAdd = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const category = form.category.value;
    const image = form.image.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const stock = form.stock.value;
    const time = form.time.value;

    const newEquipment = {
      name,
      category,
      image,
      description,
      price,
      rating,
      stock,
      time,
      customization,
    };
    console.log(newEquipment);
  };

  return (
    <div>
      <form
        onSubmit={handelAdd}
        className="w-full h-[650px] bg-[#b4be2d2f] rounded-md my-20"
      >
        <h1 className="text-2xl text-center font-semibold pt-4 text-[#B5BE2D]">
          ADD MORE SPORTS EQUIPMENTS IN YOUR SHOP...!
        </h1>
        <div className="flex justify-center items-center gap-8 mt-10">
          <div className="space-y-1">
            <label className="fieldset-label pl-1 font-bold">Item Name</label>
            <input
              className="w-[380px]  h-[43px] rounded-xl border-2 border-[#B5BE2D] px-3  placeholder:font-semibold"
              type="text"
              name="name"
              placeholder="Item Name"
            />
          </div>
          <div className="space-y-1">
            <label className="fieldset-label pl-1 font-bold">
              Category Name
            </label>
            <input
              className="w-[380px]  h-[43px] rounded-xl border-2 border-[#B5BE2D] px-3  placeholder:font-semibold"
              type="text"
              name="category"
              placeholder="Category Name"
            />
          </div>
        </div>
        <div className="flex justify-center items-center gap-8 mt-5">
          <div className="space-y-1">
            <label className="fieldset-label pl-1 font-bold">Image</label>
            <input
              className="w-[380px]  h-[43px] rounded-xl border-2 border-[#B5BE2D] px-3  placeholder:font-semibold"
              type="text"
              name="image"
              placeholder="Image"
            />
          </div>
          <div className="space-y-1">
            <label className="fieldset-label pl-1 font-bold">Description</label>
            <input
              className="w-[380px]  h-[43px] rounded-xl border-2 border-[#B5BE2D] px-3  placeholder:font-semibold"
              type="text"
              name="description"
              placeholder="Description"
            />
          </div>
        </div>
        <div className="flex justify-center items-center gap-8 mt-5">
          <div className="space-y-1">
            <label className="fieldset-label pl-1 font-bold">Price</label>
            <input
              className="w-[380px]  h-[43px] rounded-xl border-2 border-[#B5BE2D] px-3  placeholder:font-semibold"
              type="text"
              name="price"
              placeholder="Price"
            />
          </div>
          <div className="space-y-1">
            <label className="fieldset-label pl-1 font-bold">Rating</label>
            <input
              className="w-[380px]  h-[43px] rounded-xl border-2 border-[#B5BE2D] px-3  placeholder:font-semibold"
              type="text"
              name="rating"
              placeholder="Rating"
            />
          </div>
        </div>
        <div className="flex justify-center items-center gap-8 mt-5">
          <div className="space-y-1">
            <label className="fieldset-label pl-1 font-bold">
              Available Stock
            </label>
            <input
              className="w-[380px]  h-[43px] rounded-xl border-2 border-[#B5BE2D] px-3  placeholder:font-semibold"
              type="text"
              name="stock"
              placeholder="Stock"
            />
          </div>
          <div className="space-y-1">
            <label className="fieldset-label pl-1 font-bold">
              Process Time
            </label>
            <input
              type="time"
              name="time"
              className="input w-[380px]  h-[35px] rounded-xl border-2 border-[#B5BE2D] py-5 bg-base-200"
            />
          </div>
        </div>
        <div className="space-y-1 mt-4 ml-[179px]">
          <label className="fieldset-label pl-1 font-bold">Customization</label>
          <select
            value={customization}
            onChange={(e) => setCustomization(e.target.value)}
            className="w-[795px] h-[43px]  border-2 border-[#B5BE2D] px-3 rounded-xl focus:outline-none focus:border-gray-600"
          >
            <option value="extra-grip">Bat with Extra Grip</option>
            <option value="hit-paper">Hit Paper</option>
            <option value="custom-sticker">Custom Sticker</option>
            <option value="engraving">Name Engraving</option>
          </select>
        </div>
        <button className="btn w-[795px] ml-[179px] mt-9 bg-[#B5BE2D] text-white">
          Add Equipment
        </button>
      </form>
    </div>
  );
};

export default AddEquipments;

import { Link, useLoaderData } from "react-router-dom";

const EquipmentsList = () => {
  const tableLoader = useLoaderData();

  return (
    <div>
      <h1 className="text-center text-2xl text-[#B5BE2D] font-semibold">
        All Equipment Data in table row
      </h1>
      <p className="text-center pt-3 text-gray-600">
        If needed, I would gladly rethink entire layout. The aim in the end is
        to manage equipment rental properly - <br></br>with as much automation
        as possible in order to save time, and minimize copy-paste mistakes.
      </p>
      <div className="my-16">
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-[#b4be2d47]">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Serial</th>
                <th>Name</th>
                <th className="hidden lg:block">Category</th>
                <th>Price</th>
                <th>View Details</th>
              </tr>
            </thead>
            <tbody>
              {tableLoader.map((item, index) => (
                <tr key={item._id} idx={index}>
                  <th>{index + 1}</th>
                  <td>{item.itemName}</td>
                  <td className="hidden lg:block">{item.category}</td>
                  <td>{item.price}$</td>
                  <td>
                    <Link to={`/details/${item._id}`}>
                      <button className="w-[95px]  h-10 mb-6  text-[#B5BE2D] font-bold hover:border-2 border-[#B5BE2D] hover:bg-[#B5BE2D] hover:text-white rounded-full">
                        Details
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EquipmentsList;

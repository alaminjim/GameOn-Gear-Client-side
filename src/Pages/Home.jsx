import { Link, useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import Card from "../Components/Card";

const Home = () => {
  const equipmentData = useLoaderData();
  return (
    <div>
      <section className="mt-8">
        <Banner></Banner>
      </section>
      <section>
        <h1 className="text-center text-3xl font-semibold">
          My shop's sports equipment{" "}
        </h1>
        <p className="text-center py-3 text-gray-500 font-bold">
          {" "}
          You’ll find all kinds of sports equipment—football, cricket,
          badminton, basketball, and more! Get <br></br>high-quality gear at the
          best prices to enhance your game.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8 lg:ml-0 ml-6">
          {equipmentData.map((item) => (
            <Card key={item._id} item={item}></Card>
          ))}
        </div>
        <Link to="/all">
          <button className="btn bg-[#B5BE2D] ml-6 lg:ml-0 my-5 text-white">
            View All
          </button>
        </Link>
      </section>
    </div>
  );
};

export default Home;

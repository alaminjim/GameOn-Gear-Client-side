import { Link, useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import Card from "../Components/Card";
import army from "../assets/Bangladesh-Army.png";
import police from "../assets/police.png";
import rab from "../assets/rab.png";
import air from "../assets/bangladesh-Air-force.png";
import pic1 from "../assets/Gulshan-Club.png";
import pic2 from "../assets/Barishal-Club.png";
import pic3 from "../assets/Kurmitola-Golf-Club.png";
import pic4 from "../assets/Rayhan-Fitness.png";
import ufc from "../assets/logo-ufc-150x77.png";
import adidas from "../assets/logo-adidas-400x183.png";
import suha from "../assets/shua-400x112.png";
import wave from "../assets/logo-wavechina-400x123.png";

const Home = () => {
  const equipmentData = useLoaderData();
  return (
    <div>
      <section className="mt-8">
        <Banner></Banner>
      </section>
      <section>
        <p className="text-center text-xl pt-20 font-semibold text-gray-600">
          "Holding the most reputed brands like ufc, Adidas, Sole, Spirit,
          Freemotion etc, the owner is very experienced and knowledgeable with
          what he sells. Very reasonable pricing for the quality, most
          importantly after sales service is exceptional. If you are looking for
          longterm fitness equipment I highly recommend this store."
        </p>
        <div className="flex justify-evenly pt-10">
          <img className="w-[150px] object-contain" src={ufc} alt="" />
          <img className="w-[200px] object-contain" src={adidas} alt="" />
          <img className="w-[200px] object-contain" src={suha} alt="" />
          <img className="w-[200px] object-contain" src={wave} alt="" />
        </div>
      </section>
      <section className="mt-20">
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
      <section className="mb-20">
        <h1 className="text-center text-3xl mt-18 font-semibold text-gray-500">
          Our Proud Clients
        </h1>
        <p className="text-3xl font-semibold pt-8 text-[#B5BE2D]">
          GOVERNMENT SECTOR
        </p>
        <div className="flex justify-evenly mt-10">
          <img src={army} alt="" />
          <img className="object-contain" src={police} alt="" />
          <img className="object-contain" src={rab} alt="" />
          <img className="object-contain" src={air} alt="" />
        </div>
        <p className="text-3xl font-semibold pt-8 text-[#B5BE2D]">
          GYM & SPORTS CLUB
        </p>
        <div className="flex justify-evenly mt-10">
          <img src={pic1} alt="" />
          <img className="object-contain" src={pic2} alt="" />
          <img className="object-contain" src={pic3} alt="" />
          <img className="object-contain" src={pic4} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Home;

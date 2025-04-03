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
import bat from "../assets/240_F_58348927_cUo2z22SZIgP6o3gvllVCBR0sV2qBJ6d.jpg";
import football from "../assets/photo-1575361204480-aadea25e6e68.avif";
import racket from "../assets/istockphoto-858272962-612x612.jpg";

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
        <div className="lg:flex ml-28 lg:ml-0 md:flex space-y-2.5 justify-evenly pt-10">
          <img
            className="w-[150px] ml-10 lg:ml-0 object-contain"
            src={ufc}
            alt=""
          />
          <img className="w-[200px] object-contain" src={adidas} alt="" />
          <img className="w-[200px] object-contain" src={suha} alt="" />
          <img className="w-[200px] object-contain" src={wave} alt="" />
        </div>
      </section>
      <section>
        <h1 className="text-center pt-14 text-3xl font-semibold">
          Most Popular Sports Category Equipment
        </h1>
        <div className="hero  mt-12">
          <div className="hero-content gap-12 flex-col lg:flex-row">
            <img src={bat} className="max-w-sm rounded-lg shadow-xl" />
            <div>
              <h1 className="text-3xl font-bold text-[#B5BE2D]">Cricket Bat</h1>
              <p className="py-6 text-gray-500 font-bold">
                The Cricket Bat is a high-quality English willow bat,
                meticulously crafted for both professional and amateur players.
                Its sturdy construction ensures durability while providing
                exceptional balance and power for impactful shots. The bat
                features a thick blade with a well-defined sweet spot, allowing
                for maximum shot precision and powerful strokes. Designed with
                an ergonomic handle, it offers an enhanced grip, reducing
                vibrations and improving control over each shot. Whether you're
                executing a powerful cover drive, a delicate late cut, or a
                commanding pull shot, this bat ensures smooth stroke play and
                consistent performance.
              </p>
            </div>
          </div>
        </div>
        <div className="hero mt-12">
          <div className="hero-content gap-12 flex-col lg:flex-row-reverse">
            <img src={football} className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-3xl font-bold text-[#B5BE2D]">Football</h1>
              <p className="py-6 text-gray-500 font-bold">
                The Football is designed for players of all levels, from casual
                street games to professional matches. Made with premium
                synthetic leather, it offers a soft yet durable exterior that
                enhances control, precision, and power in every kick. The ball's
                multi-layered construction ensures excellent shape retention,
                allowing for consistent bounce and flight stability. This
                football is FIFA-approved, meeting international match
                standards, making it ideal for both training sessions and
                competitive play. Its aerodynamic panel design reduces air
                resistance, helping players achieve accurate passes, powerful
                shots, and controlled dribbling. Whether you’re executing a
                precise free-kick, a swift through pass, or a powerful
                long-range strike, this ball ensures optimal performance on any
                playing surface.
              </p>
            </div>
          </div>
        </div>
        <div className="hero  mt-12">
          <div className="hero-content gap-12 flex-col lg:flex-row">
            <img src={racket} className="max-w-sm rounded-lg shadow-xl" />
            <div>
              <h1 className="text-3xl font-bold text-[#B5BE2D]">
                Badmenton Racket
              </h1>
              <p className="py-6 text-gray-500 font-bold">
                The Badminton Racket is expertly designed for players seeking
                power, precision, and control in their game. Crafted from
                high-quality carbon fiber, it offers a lightweight yet durable
                frame, allowing for faster swings and reduced arm fatigue.
                Whether you're a beginner or a seasoned professional, this
                racket ensures smooth maneuverability and effortless
                shot-making. The isometric head shape expands the sweet spot,
                giving you greater accuracy even on off-center hits. The
                high-tension strings provide excellent shuttlecock repulsion,
                enabling powerful smashes and precise drop shots. With a
                reinforced shaft, the racket maintains stability during intense
                rallies, ensuring better shot placement and consistency.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-20">
        <h1 className="text-center text-3xl font-semibold">
          Shop's sports equipment{" "}
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
        <p className="lg:text-3xl text-2xl font-semibold pt-8 text-[#B5BE2D]">
          GOVERNMENT SECTOR
        </p>
        <div className="lg:flex md:flex md:mr-16 ml-28 lg:ml-0 space-y-3.5 justify-evenly mt-10">
          <img src={army} alt="" />
          <img className="object-contain lg:ml-0 ml-10" src={police} alt="" />
          <img className="object-contain lg:ml-0 ml-8" src={rab} alt="" />
          <img className="object-contain lg:ml-0 ml-10" src={air} alt="" />
        </div>
        <p className="text-3xl font-semibold pt-8 text-[#B5BE2D]">
          GYM & SPORTS CLUB
        </p>
        <div className="lg:flex md:flex md:mr-16 ml-36 lg:ml-0 space-y-5 justify-evenly mt-10">
          <img className="object-contain" src={pic1} alt="" />
          <img className="object-contain" src={pic2} alt="" />
          <img className="object-contain" src={pic3} alt="" />
          <img className="object-contain" src={pic4} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Home;

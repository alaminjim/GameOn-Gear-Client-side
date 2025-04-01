import Banner from "./Banner";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto">
        <NavBar></NavBar>
        <div className="min-h-[calc(100vh-250px)]">
          <section className="mt-14">
            <Banner></Banner>
          </section>

          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;

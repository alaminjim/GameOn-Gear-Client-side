import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

const Layouts = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="min-h-[calc(100vh-250px)] max-w-6xl mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Layouts;

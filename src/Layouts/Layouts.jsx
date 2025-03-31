import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

const Layouts = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <NavBar></NavBar>
      <div className="min-h-[calc(100vh-250px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Layouts;

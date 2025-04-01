import { Link, NavLink } from "react-router-dom";
import logo from "../assets/Game On.png";

const NavBar = () => {
  return (
    <div>
      <div className="w-full h-[54px] bg-[#B5BE2D] hidden md:hidden lg:block">
        <span className="flex justify-around text-xl pt-2 text-white">
          <p>NEED HELP? | XXXXXXX | XXXXXXXXX | info#gmail.com</p>
          <p>ABOUT US | SHOP LOCATOR</p>
        </span>
      </div>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-y-1.5 *:text-xs"
            >
              <NavLink
                className={({ isActive }) => (isActive ? "text-[#B5BE2D]" : "")}
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? "text-[#B5BE2D]" : "")}
                to="/all"
              >
                All Equipments
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? "text-[#B5BE2D]" : "")}
                to="/add"
              >
                Add Equipments
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? "text-[#B5BE2D]" : "")}
                to="/list"
              >
                Equipments List
              </NavLink>
            </ul>
          </div>
          <div className="flex justify-center items-center space-x-2">
            <img
              className="w-10 h-10 object-contain rounded-full hidden md:hidden lg:block"
              src={logo}
            />
            <a className=" lg:text-xl text-[#B5BE2D] font-bold">
              GameOn _<a className="text-black">Gear</a>
            </a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5">
            <NavLink
              className={({ isActive }) => (isActive ? "text-[#B5BE2D]" : "")}
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "text-[#B5BE2D]" : "")}
              to="/all"
            >
              All Equipments
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "text-[#B5BE2D]" : "")}
              to="/add"
            >
              Add Equipments
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "text-[#B5BE2D]" : "")}
              to="/list"
            >
              Equipments List
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/login" className="btn">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

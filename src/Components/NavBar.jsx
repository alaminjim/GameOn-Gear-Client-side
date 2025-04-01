import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm ">
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
              <NavLink to="/">Home</NavLink>
              <NavLink to="/all">All Equipments</NavLink>
              <NavLink to="/add">Add Equipments</NavLink>
              <NavLink to="/list">Equipments List</NavLink>
            </ul>
          </div>
          <a className="text-xl">
            GameOn _<a>Gear</a>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5 *:text-xs">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/all">All Equipments</NavLink>
            <NavLink to="/add">Add Equipments</NavLink>
            <NavLink to="/list">Equipments List</NavLink>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Log in</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

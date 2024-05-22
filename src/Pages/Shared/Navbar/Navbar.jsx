import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {
  const { user,logOut } = useContext(AuthContext);

  const handleSignOut = () =>{
    logOut()
      .then(result =>{
        console.log(result,"There is no User")
      })
      .catch(error=>{
        console.log(error.message)
      })
  }



  const navLinks = (
    <>
      <li>
        <NavLink to="/">
          <span className="font-bold">Home</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/all">
          <span className="font-bold">All Art & craft Items</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/add">
          <span className="font-bold">Add Craft Item</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/my">
          {" "}
          <span className="font-bold">My Art&Craft List</span>{" "}
        </NavLink>
      </li>
      <hr className="lg:hidden" />
      <div className="flex lg:hidden ">
        <li>
          <Link to="/login">
            {" "}
            <span className="font-medium md:text-xl text-green-500 ">
              Login
            </span>{" "}
          </Link>
        </li>
        <li>
          <Link to="/register">
            {" "}
            <span className="font-medium md:text-xl text-pink-500 ">
              Register
            </span>{" "}
          </Link>
        </li>
      </div>
    </>
  );

  return (
    <div className="navbar bg-base-100">
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <img className="h-12 w-12 " src="/public/logo.png" alt="" />{" "}
          <span className="text-pink-400 font-bold text-3xl">
            Ma<span className="text-green-600">K</span>er
          </span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 ">{navLinks}</ul>
      </div>

      <div className="navbar-end  ">
        <div className="md:flex md:gap-4 hidden">
          {user ? (
            <button onClick={handleSignOut} className="btn">Sign Out</button>
          ) : (
            <Link to="login">
              <button className="btn text-green-500 font-extrabold">
                Login
              </button>
            </Link>
          )}

          <Link to="register">
            <button className="btn text-pink-500 font-extrabold">
              Register
            </button>
          </Link>
        </div>

        {/* ___________This is Dark mode_________________ */}
        <div>
          <label className="flex cursor-pointer gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <input
              type="checkbox"
              value="synthwave"
              className="toggle theme-controller"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

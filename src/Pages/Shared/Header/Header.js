import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { FaUser } from "react-icons/fa";
import "./Header.css";
// import {logo} from '../../../assets/images/logo.png';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <div className="navbar bg-base-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/courses">Courses</Link>
              </li>
              <li>
                <Link to="/checkout">CheckOut</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>

              {user?.uid ? (
                <>
                  {user?.photoURL ? (
                    <div
                      className="tooltip tooltip-bottom ml-3 mt-3"
                      data-tip={user?.displayName}
                    >
                      <img
                        src={user?.photoURL}
                        alt=""
                        style={{ height: "40px" }}
                        className="rounded-full"
                      />
                    </div>
                  ) : (
                    <FaUser></FaUser>
                  )}
                  <li className="m-3" onClick={handleLogOut}>
                    Log out
                  </li>
                </>
              ) : (
                <div>
                  <li>
                    <Link to="/login">Log in</Link>
                  </li>
                  <li>
                    <Link to="/register">Register</Link>
                  </li>
                </div>
              )}
            </ul>
          </div>
          <div className="flex items-center header-title">
            {/* <img src={logo} alt="logo" /> */}
            <Link className="btn btn-ghost normal-case text-3xl">Edu Tech</Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/checkout">CheckOut</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              {/* testing */}
              

              <div class="flex items-center justify-center w-full">
                <label for="toggleB" class="flex items-center cursor-pointer">
                  <div class="relative">
                    <input type="checkbox" id="toggleB" class="sr-only" />
                    <div class="block bg-gray-600 w-14 h-8 rounded-full"></div>
                    <div class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
                    <span class="absolute font-medium text-xs uppercase right-1 text-white"> OFF </span>
  <span class="absolute font-medium text-xs uppercase right-8 text-white"> ON </span>
                  </div>
                </label>
              </div>
            </li>
          </ul>
        </div>
        <div className="navbar-end hidden lg:flex">
          {user?.uid ? (
            <>
              {user?.photoURL ? (
                <div
                  className="tooltip tooltip-bottom"
                  data-tip={user?.displayName}
                >
                  <img
                    src={user?.photoURL}
                    alt=""
                    style={{ height: "40px" }}
                    className="rounded-full"
                  />
                </div>
              ) : (
                <FaUser></FaUser>
              )}

              <button className="btn btn-ghost ml-3" onClick={handleLogOut}>
                Log out
              </button>
            </>
          ) : (
            <div className="menu menu-horizontal p-0 hidden lg:flex">
              <li>
                <Link to="/login">Log in</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

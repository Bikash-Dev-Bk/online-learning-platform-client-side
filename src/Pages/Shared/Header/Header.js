import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { FaUser } from "react-icons/fa";
import logo from '../../../assets/images/logo.png';
import './Header.css';

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
              {/* <li>
                <Link to="/checkout">CheckOut</Link>
              </li> */}
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
          <div className="flex items-center header-title header-logo">
            <img src={logo} alt="" />
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
            {/* <li>
              <Link to="/courses/:id/checkout">CheckOut</Link>
            </li> */}
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <label for="Toggle4" className="inline-flex items-center p-1 cursor-pointer dark:bg-gray-300 dark:text-gray-800">
                <input id="Toggle4" type="checkbox" className="hidden peer" />
                <span className="px-2 py-2 dark:bg-gray-600 peer-checked:dark:bg-gray-300">Dark</span>
                <span className="px-2 py-2 dark:bg-gray-300 peer-checked:dark:bg-violet-400"> Light</span>
              </label>
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

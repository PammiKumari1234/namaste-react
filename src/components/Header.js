import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [btnName, setBtnName] = useState("Login");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-between shadow-lg mb-2">
      <div className="logo-container">
        <Link to="/" className="font-bold hover:text-red-500">
          <img src={LOGO_URL} alt="logo" className="w-24" />
        </Link>
      </div>
      <div className="flex items-center">
        {/* Hamburger Icon */}
        <button
          className="block lg:hidden focus:outline-none p-4"
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6 fill-current text-gray-900"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm16 4H4v2h16v-2z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
              />
            )}
          </svg>
        </button>

        {/* Menu Items */}
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex p-4 m-4 center space-x-4`}
        >
          <li className="px-4">
            <Link to="/" className="font-bold hover:text-red-500">
              Home
            </Link>
          </li>
          <li className="px-4">
            <Link to="/about" className="font-bold hover:text-red-500">
              About us
            </Link>{" "}
          </li>
          <li className="px-4">
            <Link to="/Contact" className="font-bold hover:text-red-500">
              Contact Us
            </Link>{" "}
          </li>
          <li className="px-4 font-bold hover:text-red-500">Cart</li>
          <button
            className="font-bold hover:text-red-500"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

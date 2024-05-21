import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [btnName, setBtnName] = useState("Login");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between shadow-lg bg-gradient-to-r from-red-500 to-yellow-500">
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
            <Link to="/" className="font-bold hover:text-white">
              Home
            </Link>
          </li>
          <li className="px-4">
            <Link to="/about" className="font-bold hover:text-white">
              About us
            </Link>{" "}
          </li>
          <li className="px-4">
            <Link to="/Contact" className="font-bold hover:text-white">
              Contact Us
            </Link>{" "}
          </li>
          <li className="px-2 font-bold relative hover:text-white">
          <Link to="/Cart" className="font-bold hover:text-white">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-1.5 py-0.5 text-xs">
                {cartItems.length}
              </span>
            )}
            </Link>
          </li>

          <button
            className="font-bold hover:text-white"
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

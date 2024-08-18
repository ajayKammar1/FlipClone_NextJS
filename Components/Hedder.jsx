import React, { useState } from "react";
import Link from "next/link";
import { FaEye, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux";

const Hedder = () => {
  const [isOpen, setIsOpen] = useState(false);
  const Data = useSelector((state) => state);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 text-white static w-full">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-between sm:items-stretch sm:justify-start">
            <div className="flex-shrink-1">
              <Link href="/">
                <div className="text-2xl font-bold text-white">FlipClone</div>
              </Link>
            </div>

            <div className="flex sm:hidden items-center">
              <button
                onClick={toggleNavbar}
                className="text-white focus:outline-none"
              >
                {isOpen ? (
                  <FaTimes className="h-6 w-6" />
                ) : (
                  <FaBars className="h-6 w-6" />
                )}
              </button>
            </div>

            <div className={`hidden sm:flex items-center sm:ml-6 sm:space-x-4`}>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for products"
                  className="bg-white text-gray-800 px-3 py-1 rounded-md shadow-md"
                />
              </div>
              <Link href="/">
                <div className="text-white hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium">
                  Categories
                </div>
              </Link>

              <Link href="/cart">
                <div className="text-white flex items-center hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium">
                  <FaShoppingCart className="text-3xl p-1 relative" />
                  {Data.Cart.length > 0 && (
                    <span className="absolute bg-red-500 top-1 ml-12 text-white text-xs font-bold rounded-full px-2 py-1">
                      {Data.Cart.length}
                    </span>
                  )}
                  Cart
                </div>
              </Link>
              <Link href="/cart">
                <div className="text-white hover:bg-blue-500 flex items-center px-3 py-2 rounded-md text-sm font-medium">
                  <FaEye className="text-3xl p-1 relative " />
                  {Data.Wishlist.length > 0 && (
                    <span className="absolute bg-red-500 top-1 ml-20 text-white text-xs font-bold rounded-full px-2 py-1">
                      {Data.Wishlist.length}
                    </span>
                  )}
                  WishList
                </div>
              </Link>
              <Link href="/">
                <div className="text-white hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium">
                  Account
                </div>
              </Link>

              <Link href="/User/login">
                <div className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">
                  Login
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={`sm:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link href="/">
            <div className="text-gray-300 hover:bg-blue-500 hover:text-white block px-0 py-2 rounded-md text-base font-medium">
              Categories
            </div>
          </Link>

          <Link href="/cart">
            <div className="text-gray-300 hover:bg-blue-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Cart
            </div>
          </Link>
          <Link href="/">
            <div className="text-gray-300 hover:bg-blue-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Account
            </div>
          </Link>
          {/* Add Login Button for mobile view */}
          <Link href="/login">
            <div className="text-gray-300 hover:bg-blue-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Login
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Hedder;

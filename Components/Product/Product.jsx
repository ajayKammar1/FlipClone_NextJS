import React, { useState } from "react";
import { useRouter } from "next/router";
import { FaRegHeart, FaSearch, FaShoppingCart } from "react-icons/fa";
import { IoMdStar } from "react-icons/io";
import Image from "next/image";
import { addToCart, remove } from "@/Redux/Slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { addToWishList } from "@/Redux/Slices/WishlistSlice";

const Product = ({ item }) => {
  const dispatch = useDispatch();

  // Dummy data

  // const [wishList, setWishList] = useState([]);
  const router = useRouter();

  const addToCarts = (item) => {
    dispatch(addToCart(item));
    router.push(`/cart`);
  };

  const addToWish = () => {
    dispatch(addToWishList(item));
    router.push(`/cart`);
  };

  return (
    <div className="bg-white w-60 h-80 m-1 shadow-md rounded-lg overflow-hidden relative group">
      <div className="relative h-1/2 flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-1000">
        <Image
          src={item.image}
          width={200}
          height={200}
          alt={item.title}
          className="w-48 h-48 object-cover"
        />
      </div>
      <div className="p-4 h-1/3">
        <div className="flex items-center ">
          <h3 className="text-black text-lg font-semibold">
            {item.Discount > 0
              ? Math.floor(item.price * (1 - item.Discount / 100))
              : item.price}{" "}
            Rs
          </h3>
          <span className="text-green-600 text-md font-semibold pl-2">
            {item.Discount === 0 ? "" : `${item.Discount} %`}
          </span>
        </div>
        <h4 className="text-red-500 text-sm line-through">
          {" "}
          {item.Discount > 0 ? `${item.price} Rs` : ""}
        </h4>
        <p className="text-sm font-medium">{item.title}</p>
        <div className="text-sm text-green-600 font-semibold">
          {item.status}
        </div>
        <div className="flex items-center space-x-2 mt-2">
          <IoMdStar className="text-yellow-400" />
          <span className="ml-1">3.5</span>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 flex flex-col items-end p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
        <div
          onClick={() => addToCarts(item)}
          className="w-10 h-10 flex items-center justify-center bg-blue-200 rounded-full shadow-md cursor-pointer transition-transform duration-1000 hover:scale-110"
        >
          <FaShoppingCart className="text-xl" />
        </div>
        <div
          onClick={() => router.push(`/productDetail/${item._id}`)}
          className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full shadow-md cursor-pointer transition-transform duration-1000 hover:scale-110 mt-2"
        >
          <FaSearch className="text-xl" />
        </div>
        <div
          onClick={() => addToWish(item)}
          className="w-10 h-10 flex items-center justify-center bg-pink-200 rounded-full shadow-md cursor-pointer transition-transform duration-1000 hover:scale-110 mt-2"
        >
          <FaRegHeart className="text-xl" />
        </div>
      </div>
    </div>
  );
};

export default Product;

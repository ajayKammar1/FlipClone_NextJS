import Image from "next/image";
import React from "react";
import { IoIosAdd } from "react-icons/io";
import { GrFormSubtract } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, remove } from "@/Redux/Slices/cartSlice";

const index = () => {
  const CartData = useSelector((state) => state.Cart);
  const dispatch = useDispatch();

  const TotalPrice =
    CartData &&
    CartData.reduce((pre, cr) => {
      return (
        pre +
        Math.floor(cr.item.price * (1 - cr.item.Discount / 100)) * cr.quantity
      );
    }, 0);

  const totalItems = CartData.reduce(
    (pre, cur) => pre + Math.floor(cur.quantity),
    0
  );

  const discountPrice = CartData.reduce(
    (pre, cr) =>
      pre + Math.floor(cr.item.price * (cr.item.Discount / 100)) * cr.quantity,
    0
  );

  const IncrementItem = (item) => {
    dispatch(increment(item));
  };

  const deCrementItem = (item) => {
    dispatch(decrement(item));
  };

  const removeItem = (item) => {
    dispatch(remove(item));
  };

  const placeOrder = () => {};

  if (!CartData.length > 0) {
    return (
      <>
        <p className="h-[80vh] flex justify-center items-center text-2xl">
          No Items in Cart
        </p>
      </>
    );
  }

  return (
    <div className="container mx-auto flex p-4">
      <div className="w-2/3 m-2 flex flex-col">
        <h1 className="text-2xl font-bold mb-4">Product List</h1>
        {CartData &&
          CartData.map(({ item, quantity }) => (
            <ul
              key={item._id}
              className="shadow rounded-md bg-white flex p-4 overflow-hidden border"
            >
              <div className="w-1/4 h-[200px] flex center justify-center">
                <Image
                  src={item.image}
                  alt="Product Image"
                  width={120}
                  height={100}
                />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                <p>{item.description}</p>
                <div className="flex items-center justify-between mt-5">
                  <span>{item.price}</span>
                </div>
                <div>
                  <div className="flex justify-center items-center">
                    <GrFormSubtract
                      className="text-4xl"
                      onClick={() => deCrementItem(item)}
                    />
                    <span className="text-4xl p-2">
                      {quantity !== 0 ? quantity : 1}
                    </span>
                    <IoIosAdd
                      className="text-4xl"
                      onClick={() => IncrementItem(item)}
                    />
                  </div>
                  <button onClick={() => removeItem(item)}>REMOVE</button>
                </div>
              </div>
            </ul>
          ))}

        <button
          onClick={() => alert("Order placed successfully")}
          className="bg-blue-500 text-white p-2 rounded-md mt-4"
        >
          Place Order
        </button>
      </div>
      <div className="w-[25rem] m-4 text-center h-[50vh] bg-white border sticky right-0 top-[4rem] rounded-sm shadow-md">
        <h1 className="pl-4 pt-2 text-xl text-start text-gray-600">
          PRICE DETAILS
        </h1>
        <div className="p-3">
          <div className="items-start text-md p-2 flex border-t-2 justify-between">
            <div>Price({totalItems} Item)</div>
            <div>{TotalPrice} Rs</div>
          </div>
          <div className="items-start text-md p-2 flex justify-between">
            <div>Discount</div>
            <div>{discountPrice} Rs</div>
          </div>
          <div className="items-start text-md p-2 flex justify-between">
            <div>Delivery Charges</div>
            <div>
              {TotalPrice > 500 ? "Free" : TotalPrice === 0 ? "0 Rs" : "250 Rs"}
            </div>
          </div>
          <div className="items-start text-xl p-2 flex justify-between border-t-2 bold border-b-2">
            <div>Total Amount</div>
            <div>{TotalPrice > 500 ? TotalPrice : TotalPrice + 250} Rs</div>
          </div>
          <div className="text-green-600">
            {discountPrice > 0
              ? `You will save ${discountPrice} on this Order`
              : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;

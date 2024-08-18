import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import cartSlice from "./Slices/cartSlice";
import WishlistSlice from "./Slices/WishlistSlice";

const Store = () =>
  configureStore({
    reducer: {
      Cart: cartSlice,
      Wishlist: WishlistSlice,
    },
  });

// export default Store;

export const wrapper = createWrapper(Store);

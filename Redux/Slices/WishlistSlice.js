const { createSlice } = require("@reduxjs/toolkit");

const WishlistSlice = createSlice({
  name: "Wishlist",
  initialState: [],
  reducers: {
    addToWishList: (state, action) => {
      const item = action.payload;
      const existingItem = state.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.push({ item, quantity: 1 });
      }
    },
    removeWishlist: (state, item) => {
      return state.filter((i) => i.id !== item.id);
    },
  },
});

export const { addToWishList, removeWishlist } = WishlistSlice.actions;
export default WishlistSlice.reducer;

const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.find((i) => i.item.id == item.id);
      console.log(existingItem);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.push({ item, quantity: 1 });
      }
    },
    remove: (state, action) => {
      const id = action.payload.id;

      return state.filter((i) => i.item.id !== id);
    },
    increment: (state, action) => {
      const id = action.payload.id;

      const existingItem = state.find((i) => i.item.id === id);
      if (existingItem) existingItem.quantity++;
    },
    decrement: (state, action) => {
      const id = action.payload.id;

      const existingItem = state.find((i) => i.item.id === id);
      if (existingItem && existingItem.quantity > 0) existingItem.quantity--;
    },
  },
});

export const { addToCart, remove, increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;

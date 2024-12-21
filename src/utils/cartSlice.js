import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    // addItem is the action here and the function in this addItem is the reducer function
    //we are mutating our state here
    addItem: (state, action) => {
      state.items.push(action.payload);
      // push is beacuse we are adding items to cart or here items is an array
    },
    removeItem: (state, action) => {
      state.items.pop();
      // logic is pop beacuse we are removing items to cart or here items is an array
    },
    clearCart: (state) => {
      state.items.length = 0; // we cannot do state = [], because immer will not allow, see notes to know what is immer
      //   this is because we want to clear the cart and set the array to zero
    },
  },
});
export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

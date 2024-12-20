import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import { useReducer } from "react";

const appStore = configureStore({
  //  we have our store as appStore, not we have to add slices to it

  reducer: {
    // this whole 'reducer' is for the entire applyMiddleware, the below ones liek cart, user and all are smaller reducers
    cart: cartReducer, //cartReducer is a slice
    // user: useReducer,
  },
});
export default appStore;

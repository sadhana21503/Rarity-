import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice"; // Updated path

const store = configureStore({
	reducer: {
		cart: cartReducer,
	},
});

export default store;

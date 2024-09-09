import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		items: JSON.parse(localStorage.getItem("cart")) || [],
	},
	reducers: {
		addItem: (state, action) => {
			state.items.push(action.payload);
			localStorage.setItem("cart", JSON.stringify(state.items));
		},
		updateQuantity: (state, action) => {
			const { id, size, quantity } = action.payload;
			const item = state.items.find(
				(item) => item.id === id && item.size === size
			);
			if (item) {
				item.quantity = quantity;
			}
			localStorage.setItem("cart", JSON.stringify(state.items));
		},
		removeItem: (state, action) => {
			const { id, size } = action.payload;
			state.items = state.items.filter(
				(item) => !(item.id === id && item.size === size)
			);
			localStorage.setItem("cart", JSON.stringify(state.items));
		},
		clearCart: (state) => {
			state.items = [];
			localStorage.setItem("cart", JSON.stringify(state.items));
		},
	},
});

export const { addItem, updateQuantity, removeItem, clearCart } =
	cartSlice.actions;
export default cartSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	items: [],
};

export const basketSlice = createSlice({
	name: 'basket',
	initialState,
	reducers: {
		addToBasket: (state, action) => {
			const newBasket = [...state.items];
			const incoming = action.payload;
			const isSame = newBasket.find(item => item.id === action.payload.id);
			if (isSame) {
				const sameItem = newBasket.indexOf(isSame);
				newBasket[sameItem].quantity++;
			} else {
				incoming.quantity = 1;
				state.items = [incoming, ...newBasket];
			}
		},
		removeFromBasket: (state, action) => {
			const idx = state.items.findIndex(item => item.id === action.payload.id);

			let newBasket = [...state.items];

			if (idx >= 0) {
				const quantity = newBasket[idx].quantity;
				if (quantity > 1) {
					newBasket[idx].quantity--;
				} else {
					newBasket.splice(idx, 1);
				}
			} else {
				console.warn(
					`Product of ID ${action.payload.id} is not found in basket`
				);
			}

			state.items = newBasket;
		},
	},
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = state => state.basket.items;
export const selectTotal = state =>
	state.basket.items.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);

export default basketSlice.reducer;

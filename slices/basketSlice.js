import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	items: [],
};

export const basketSlice = createSlice({
	name: 'basket',
	initialState,
	reducers: {
		addToBasket: (state, action) => {
			state.items = [...state.items, action.payload];
		},
		removeFromBasket: (state, action) => {
			const idx = state.items.findIndex(item => item.id === action.payload.id);

			let newBasket = [...state.items];

			if (idx >= 0) {
				newBasket.splice(idx, 1);
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

export default basketSlice.reducer;

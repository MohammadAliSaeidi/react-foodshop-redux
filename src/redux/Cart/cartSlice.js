import {createSlice} from "@reduxjs/toolkit";

export const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		cartItems: [],
		total: 0,
	},
	reducers: {
		addToCart(state, action) {
			const newCartItems = action.payload;

			const finalCartItems = [
				...state.cartItems,
				...newCartItems.filter((newItem) => !state.cartItems.some((cartItem) => cartItem.id === newItem.id)),
			];

			return {
				...state,
				cartItems: finalCartItems,
			};
		},

		removeFromCart(state, action) {
			const updatedCartItems = state.cartItems.filter(item => item.id !== action.payload);
			console.log(updatedCartItems)

			if (updatedCartItems.length === 0) {
				return {
					...state,
					cartItems: [],
					total: 0
				};
			}

			return {
				...state,
				cartItems: updatedCartItems
			};
		},

		increaseQuantity(state, action) {
			return {
				...state,
				cartItems: state.cartItems.map(item => {
					if (item.id === action.payload) {
						return {
							...item,
							quantity: item.quantity + 1,
						};
					}
					return item;
				})
			}
		},

		decreaseQuantity(state, action) {
			return {
				...state,
				cartItems: state.cartItems.map(item => {
					if (item.id === action.payload && item.quantity > 1) {
						return {
							...item,
							quantity: item.quantity - 1,
						};
					}

					return item;
				}),
			}
		},

		clearCart(state, action) {
			return {
				...state,
				cartItems: []
			}
		}
	}
})

const {actions, reducer} = cartSlice

export const {
	addToCart,
	removeFromCart,
	clearCart,
	decreaseQuantity,
	increaseQuantity
} = actions

export default reducer;
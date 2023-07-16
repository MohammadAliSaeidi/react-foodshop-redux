import {createSlice} from "@reduxjs/toolkit";

export const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		cartOrders: [],
		total: 0,
	},
	reducers: {
		addToCart(state, action) {
			let newOrders = action.payload;

			// Convert single order to an array if it's not already
			if (!Array.isArray(newOrders)) {
				newOrders = [newOrders];
			}

			const finalCartOrders = [
				...state.cartOrders,
				...newOrders.filter(
					(newOrder) => !state.cartOrders.some((order) => order.id === newOrder.id)
				),
			];

			return {
				...state,
				cartOrders: finalCartOrders,
			};
		},

		removeFromCart(state, action) {
			const updatedCartOrders = state.cartOrders.filter(order => order.id !== action.payload);

			if (updatedCartOrders.length === 0) {
				return {
					...state,
					cartOrders: [],
					total: 0
				};
			}

			return {
				...state,
				cartOrders: updatedCartOrders
			};
		},

		increaseQuantity(state, action) {
			return {
				...state,
				cartOrders: state.cartOrders.map(order => {
					if (order.id === action.payload) {
						return {
							...order,
							quantity: order.quantity + 1,
						};
					}
					return order;
				})
			}
		},

		decreaseQuantity(state, action) {
			return {
				...state,
				cartOrders: state.cartOrders.map(order => {
					if (order.id === action.payload && order.quantity > 1) {
						return {
							...order,
							quantity: order.quantity - 1,
						};
					}

					return order;
				}),
			}
		},

		clearCart(state, action) {
			return {
				...state,
				cartOrders: []
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
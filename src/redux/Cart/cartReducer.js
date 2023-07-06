import {ADD_TO_CART, CLEAR_CART, DECREASE_QUANTITY, INCREASE_QUANTITY, REMOVE_FROM_CART} from "./cartActions";

const initialState = {
	cartItems: [],
	total: 0,
}

const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TO_CART:
			return {
				...state,
				cartItems: [...state.cartItems, ...action.payload],
			}

		case REMOVE_FROM_CART:
			return {
				...state,
				cartItems: state.cartItems.filter(item => item.id === action.payload),
			}

		case INCREASE_QUANTITY:
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
				}),
			};

		case DECREASE_QUANTITY:
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
			};

		case CLEAR_CART:
			return {
				...state,
				cartItems: []
			}

		default:
			return state;
	}
}


export default cartReducer;
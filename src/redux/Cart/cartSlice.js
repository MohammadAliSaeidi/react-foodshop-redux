import {createSlice} from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
        total: 0,
    },
    reducers: {
        addToCart: (state, action) => {
            const newCartItems = action.payload;

            const finalCartItems = [
                ...state.cartItems,
                ...newCartItems.filter((newItem) => !state.cartItems.some((cartItem) => cartItem.id === newItem.id)),
            ];

            return {
                ...state,
                cartItems: finalCartItems,
            };
        }
    }
})

export const {addToCart} = cartSlice.actions
export default cartSlice.reducer
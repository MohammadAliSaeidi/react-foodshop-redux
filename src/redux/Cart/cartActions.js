export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const CLEAR_CART = 'CLEAR_CART'

export const addToCart = (item) => ({
    type: ADD_TO_CART,
    payload: item
})

export const removeFromCart = (itemId) => ({
    type: REMOVE_FROM_CART,
    payload: itemId
})

export const clearCart = () => ({
    type: CLEAR_CART
})
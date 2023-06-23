import {combineReducers, createStore} from "@reduxjs/toolkit";
import cartReducer from "./Cart/cartReducer";

const rootReducer = combineReducers({
    cart: cartReducer
})

const store = createStore(rootReducer);

export default store
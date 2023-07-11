import {combineReducers} from "redux";
import cartReducer from "./Cart/cartReducer";

const rootReducer = combineReducers({
    cart: cartReducer
})

export default rootReducer
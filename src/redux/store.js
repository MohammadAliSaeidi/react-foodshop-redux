import {configureStore} from "@reduxjs/toolkit";
import cakeReducer from './cake/cakeReducer'

const store = configureStore(cakeReducer)

export default  store
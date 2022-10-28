import { configureStore } from "@reduxjs/toolkit";
import CartSliceReducer from './Cart'

export const store = configureStore({
    reducer: {
        cart: CartSliceReducer
    }
})

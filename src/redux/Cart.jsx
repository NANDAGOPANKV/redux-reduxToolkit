// import dependencies
import { createSlice } from "@reduxjs/toolkit";

// initail state global
const INITIAL_STATE = {
    cartList: [],
    setCount: 0
}

// main function of resux-toolkit
const cartSlice = createSlice({
    name: "cart",
    initialState: INITIAL_STATE,
    reducers: {
        addToCart: (state) => {
            state.setCount = 1
        },
        normal: (state) => {
            state.setCount = 0
        },
        increment: (state) => {
            state.setCount = state.setCount + 1
        },
        decrement: (state) => {
            state.setCount = state.setCount - 1
        },
    }
})

// export functions
export const { addToCart, decrement, increment, normal } = cartSlice.actions
export default cartSlice.reducer

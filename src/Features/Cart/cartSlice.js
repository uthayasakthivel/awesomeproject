import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
    product: {},

}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        showCart: (state, action) => {
            state.value += 1;
            const productId = action.payload
            if (!state.product[productId])
                state.product[productId] = 1
            else
                state.product[productId] += 1
        },
        // reset: (state) => { state.value = 0 }
    },
})

// Action creators are generated for each case reducer function
export const { showCart, decrement } = cartSlice.actions

export default cartSlice.reducer
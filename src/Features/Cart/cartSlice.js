import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
    product: {},
    Total: 0,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        showCart: (state, action) => {
            state.value += 1;
            const { productId, produtPrice } = action.payload
            if (!state.product[productId])
                state.product[productId] = 1
            else
                state.product[productId] += 1

            state.Total += produtPrice

        },
        // reset: (state) => { state.value = 0 }
    },
})

// Action creators are generated for each case reducer function
export const { showCart, decrement } = cartSlice.actions

export default cartSlice.reducer
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { data as product } from '../MainPage'

interface initialState {
    val: Array<product>
}

const initialState: initialState = {
    val: []
}

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<product>) {
            state.val = [...state.val, action.payload]
        },
        removeFromCart(state, action: PayloadAction<string>) {
            state.val = state.val.filter(el => el._id !== action.payload)
        }
    }
})

export default cartSlice.reducer
export const { addToCart, removeFromCart } = cartSlice.actions
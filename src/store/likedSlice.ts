import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { data as product } from '../MainPage'

interface initialState {
    val: Array<product>
}

const initialState: initialState = {
    val: []
}

const likedSlice = createSlice({
    name: 'likedSlice',
    initialState,
    reducers: {
        addLiked(state, action: PayloadAction<product>) {
            state.val = [...state.val, action.payload]
        },
        removeLiked(state, action: PayloadAction<string>) {
            state.val = state.val.filter(el => el._id !== action.payload)
        }
    }
})

export default likedSlice.reducer
export const { addLiked, removeLiked } = likedSlice.actions
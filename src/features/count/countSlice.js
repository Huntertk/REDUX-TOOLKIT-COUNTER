import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}

const countSlice = createSlice({
    name:'count',
    initialState,
    reducers:{
        increment:(state) => {
            state.count = state.count + 1
        },
        decrement:(state) => {
            state.count = state.count - 1
        },
    }
})

console.log(countSlice);
export const {increment, decrement} = countSlice.actions
export default countSlice.reducer
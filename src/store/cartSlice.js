import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    add(state, action) { },
    rem0ve(state, action) { },

})

export const { add, remove } = cartSlice.actions;
export const carReducer = cartSlice.reducer;
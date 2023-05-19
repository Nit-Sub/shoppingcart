import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartList: [],
        total: 0
    },
    add(state, action) { 
        const updatedCartList= state.cartList.concat(action.payload);
        return {...state , cartList: updatedCartList}
    },
    rem0ve(state, action) { },

})

export const { add, remove } = cartSlice.actions;
export const carReducer = cartSlice.reducer;
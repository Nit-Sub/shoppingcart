import { configureStore } from "@reduxjs/toolkit";
import { carReducer } from "./cartSlice";

export const store= configureStore({
    reducer:{
        cartState: carReducer
    }
})

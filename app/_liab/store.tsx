import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../_liab/features/cardslice'

export const store = configureStore({
    reducer:{
        cart: cartReducer
    }
})
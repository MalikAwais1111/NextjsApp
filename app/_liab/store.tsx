import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../_liab/features/cardslice'
import searchReducer from '../_liab/features/searchslice'

export const store = configureStore({
    reducer:{
        cart: cartReducer,
        search:searchReducer
    }
})
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the type for items in the cart
interface CartItem {
    id: number;
    title: string;
    price: number;
    count: number;
}

// Define the state shape
interface CartState {
    cart: CartItem[];
}

// Define the initial state with the proper type
const initialState: CartState = {
    cart: []
};

// Define the slice
const Cartslice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addtocart: (state, action: PayloadAction<{ id: number; title: string; price: number }>) => {
            const { id, title, price } = action.payload;
            const existingItem = state.cart.find((item) => item.id === id);

            if (existingItem) {
                existingItem.count += 1;
            } else {
                const cartItem: CartItem = {
                    id,
                    title,
                    price,
                    count: 1
                };
                state.cart.push(cartItem);
            }
        },
        removefromcart: (state, action: PayloadAction<{ id: number }>) => {
            const { id } = action.payload;
            state.cart = state.cart.filter((item) => item.id !== id);
        },
        increment: (state, action: PayloadAction<{ id: number }>) => {
            const { id } = action.payload;
            const item = state.cart.find((item) => item.id === id);
            if (item) {
                item.count += 1;
            }
        },
        decrement: (state, action: PayloadAction<{ id: number }>) => {
            const { id } = action.payload;
            const item = state.cart.find((item) => item.id === id);
            if (item) {
                if (item.count > 1) {
                    item.count -= 1;
                } else {
                    state.cart = state.cart.filter((item) => item.id !== id);
                }
            }
        }
    }
});

export const { addtocart, removefromcart, increment, decrement } = Cartslice.actions;

export default Cartslice.reducer;

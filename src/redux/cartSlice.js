import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    cartItemsQuantity: localStorage.getItem("cartQunatity") ? JSON.parse(localStorage.getItem("cartQunatity")):0,
    cartItemsTotal: localStorage.getItem("cartTotal") ? JSON.parse(localStorage.getItem("cartTotal")):0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.cartItems.push(action.payload)
            state.cartItemsQuantity += 1;
            state.cartItemsTotal += action.payload.postData.price * action.payload.quantity
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            localStorage.setItem("cartQunatity", JSON.stringify(state.cartItemsQuantity));
            localStorage.setItem("cartTotal", JSON.stringify(state.cartItemsTotal));
        },

        removeProduct: (state, action) => {
            const nextCartItems = state.cartItems.filter(cartItem => cartItem._id !== action.payload._id);
            state.cartItems = nextCartItems;

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
       

        clearCart: (state) => {
            state.cartItems = [];
            state.cartItemsQuantity =0
            state.cartItemsTotal =0
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            localStorage.setItem("cartQunatity", JSON.stringify(state.cartItemsQuantity));
            localStorage.setItem("cartTotal", JSON.stringify(state.cartItemsTotal));
        }
    },
})

export const { addProduct, clearCart, removeProduct } = cartSlice.actions;
export default cartSlice.reducer
import { configureStore } from '@reduxjs/toolkit'
import authReducer from "../redux/authSlice"
import cartReducer from "../redux/cartSlice"
import productReducer from "../redux/productSlice"

const store = configureStore({
    reducer: {
        user: authReducer,
        products: productReducer,
        cart: cartReducer
    },
})

export default store
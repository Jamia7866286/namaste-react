import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../slices/cart/cartSlice'
import authSlice from '../slices/auth/authSlice'

const store = configureStore({
    reducer:{
        cart:cartReducer,
        auth: authSlice,
    }
})

export default store
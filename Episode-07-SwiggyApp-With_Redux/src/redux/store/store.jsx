import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../slices/cart/cartSlice'

const store = configureStore({
    reducer:{
        cart:cartReducer
    }
})

export default store
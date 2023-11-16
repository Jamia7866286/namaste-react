import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        item:[]
    },

    reducers:{
        addCartItem:(state, action)=>{
            state.item.push(action.payload)
        },
        removeCartItem:(state, action)=>{
            state.item.pop(action.payload)
        },
    }
})

export const { addCartItem, removeCartItem } = cartSlice.actions;
export default cartSlice.reducer;
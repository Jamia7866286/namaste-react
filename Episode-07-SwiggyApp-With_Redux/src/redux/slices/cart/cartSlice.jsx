import { createSlice, current } from "@reduxjs/toolkit";

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
        clearCart:(state)=>{

            console.log("current",current(state))
            // state.item.length = 0 or 
            return {item:[]}
        },
    }
})

export const { addCartItem, removeCartItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
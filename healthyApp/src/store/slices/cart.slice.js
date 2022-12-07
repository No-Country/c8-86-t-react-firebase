import {createSlice} from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        userInCart: '',
        productsAdd: []
    },
    reducers:{
        setCart: (state,action) => action.payload
    }
})

export const {setCart} = cartSlice.actions

export default cartSlice.reducer
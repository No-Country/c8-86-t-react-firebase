import {createSlice} from '@reduxjs/toolkit'

export const productSlice = createSlice({
    name: 'product',
    initialState:'',
    reducers:{
        setProduct: (state,action) => action.payload
    }
})

export const {setProduct} = productSlice.actions

export default productSlice.reducer
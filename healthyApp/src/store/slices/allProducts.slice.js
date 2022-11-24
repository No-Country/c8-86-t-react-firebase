import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

export const allProductsSlice = createSlice({
    name: 'allProducts',
    initialState:[],
    reducers:{
        setAllProducts: (state,action) => action.payload
    }
})

export const {setAllProducts} = allProductsSlice.actions

export const getAllProducts = (productCategory) => (dispatch)=>{
    const URL = `https://us-central1-saine-api.cloudfunctions.net/app/api/products`
    axios.get(URL)
        .then(res => {
            dispatch(setAllProducts(res.data))
        })
}

export default allProductsSlice.reducer
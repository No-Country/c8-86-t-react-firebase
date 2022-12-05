import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'
import {setLoading} from './loading.slice'

export const allProductsSlice = createSlice({
    name: 'allProducts',
    initialState:[],
    reducers:{
        setAllProducts: (state,action) => action.payload
    }
})

export const {setAllProducts} = allProductsSlice.actions

export const getAllProducts = (productCategory) => (dispatch)=>{
    dispatch(setLoading(true))
    const URL = `https://us-central1-saine-api.cloudfunctions.net/app/api/products`
    axios.get(URL)
        .then(res => {
            dispatch(setAllProducts(res.data))
        }).finally(() => dispatch(setLoading(false)))
}

export default allProductsSlice.reducer
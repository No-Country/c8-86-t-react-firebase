import {createSlice} from '@reduxjs/toolkit'
import {setLoading} from './loading.slice'
import axios from 'axios'


export const productItemSlice = createSlice ({
    name: 'productItem',
    initialState: [],
    reducers: {
        setProductItem: (state,action) => action.payload
    }
})


export const getProductsItem = (id) => (dispatch)=> {
    dispatch(setLoading(true))
    const URL = `https://us-central1-saine-api.cloudfunctions.net/app/api/products/${id}`

    axios.get(URL).then(res => { dispatch(setProductItem(res.data))}).finally(() => dispatch(setLoading(false)))
}

export const {setProductItem} = productItemSlice.actions
export default productItemSlice.reducer
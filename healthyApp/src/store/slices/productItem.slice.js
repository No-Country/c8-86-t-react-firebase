import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'


export const productItemSlice = createSlice ({
    name: 'productItem',
    initialState: [],
    reducers: {
        setProductItem: (state,action) => action.payload
    }
})


export const getProductsItem = (id) => (dispatch)=> {
    const URL = `https://us-central1-saine-api.cloudfunctions.net/app/api/products/${id}`

    axios.get(URL).then(res => { dispatch(setProductItem(res.data))})
}

export const {setProductItem} = productItemSlice.actions
export default productItemSlice.reducer
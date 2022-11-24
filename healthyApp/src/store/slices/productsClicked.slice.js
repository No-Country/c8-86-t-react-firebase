import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

export const productsClickedSlice = createSlice({
    name: 'productsClicked',
    initialState:'',
    reducers:{
        setProductClicked: (state,action) => action.payload
    }
})

export const {setProductClicked} = productsClickedSlice.actions

export const getProducts = (productCategory) => (dispatch)=>{
    const URL = `https://us-central1-saine-api.cloudfunctions.net/app/api/products`
    axios.get(URL)
        .then(res => {
            let allProducts = res.data
            let filterProducts = allProducts.filter(product => {
                if(product.category === productCategory){
                    return true
                }
            })

            // console.log(filterProducts)

            dispatch(setProductClicked(filterProducts))

        })
}

export default productsClickedSlice.reducer

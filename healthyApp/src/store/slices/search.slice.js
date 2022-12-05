import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

import {setLoading} from './loading.slice'

export const searchSlice = createSlice({
    name: 'searchSlice',
    initialState:'',
    reducers:{
        setSearchSlice: (state,action) => action.payload
    }
})

export const {setSearchSlice} = searchSlice.actions

export const getSearch = (search) => (dispatch)=>{
    dispatch(setLoading(true))
    const URL = `https://us-central1-saine-api.cloudfunctions.net/app/api/products`
    axios.get(URL)
        .then(res => {
            let allProducts = res.data
            let filterProducts = allProducts.filter(product => {
                let productName = product.name.toLowerCase()
                let matching = search.toLowerCase()
                if(productName.includes(matching)){
                    return true
                }
            })

            // console.log(filterProducts)

            dispatch(setSearchSlice(filterProducts))

        }).finally(() => dispatch(setLoading(false)))
}


export default searchSlice.reducer

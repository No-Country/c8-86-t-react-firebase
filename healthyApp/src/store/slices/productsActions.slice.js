import {createSlice} from '@reduxjs/toolkit'

export const productsActionsSlice = createSlice({
    name: 'productsActions',
    initialState:{
        productIsClick: false,
        categoryIsClick: {
            toggle: false,
            categoryName: ''
        },
        subcategoryIsClick: {
            toggle: false,
            subcategoryName: ''
        }
    },
    reducers:{
        setProductsActions: (state,action) => action.payload
    }
})

export const {setProductsActions} = productsActionsSlice.actions

export default productsActionsSlice.reducer
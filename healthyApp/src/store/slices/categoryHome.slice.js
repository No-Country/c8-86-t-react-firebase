import {createSlice} from '@reduxjs/toolkit'

export const categoryHomeSlice = createSlice({
    name: 'categoryHomeSlice',
    initialState:[
        {
            categoryName: 'Más Populares',
        },
        {
            categoryName: 'Ofertas',
        },
        {
            categoryName: 'Novedades',
        },
        {
            categoryName: 'Fitness',
        }
    ],
    reducers:{
        setCategoryHomeSlice: (state,action) => action.payload
    }
})

export const {setCategoryHomeSlice} = categoryHomeSlice.actions



export default categoryHomeSlice.reducer
import {createSlice} from '@reduxjs/toolkit'

export const categoryHomeActionsSlice = createSlice({
    name: 'categoryHomeActionsSlice',
    initialState:{
        categoryHomeIsClick: {
            toggle: true,
            categoryName: 'Más Populares'
        }
    },
    reducers:{
        setCategoryHomeActionsSlice: (state,action) => action.payload
    }
})

export const {setCategoryHomeActionsSlice} = categoryHomeActionsSlice.actions



export default categoryHomeActionsSlice.reducer
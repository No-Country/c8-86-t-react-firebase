import {createSlice} from '@reduxjs/toolkit'

export const favoritesActionsSlice = createSlice({
    name: 'favoritesActionsSlice',
    initialState:{
        favoritesIsShow: false
    },
    reducers:{
        setFavoritesActionsSlice: (state,action) => action.payload
    }
})

export const {setFavoritesActionsSlice} = favoritesActionsSlice.actions



export default favoritesActionsSlice.reducer
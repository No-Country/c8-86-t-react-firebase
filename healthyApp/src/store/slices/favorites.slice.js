import {createSlice} from '@reduxjs/toolkit'

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState:{
        user: '',
        favorites: []
    },
    reducers:{
        setFavorites: (state,action) => action.payload
    }
})

export const {setFavorites} = favoritesSlice.actions

export default favoritesSlice.reducer
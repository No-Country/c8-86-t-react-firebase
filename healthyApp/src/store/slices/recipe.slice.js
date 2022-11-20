import {createSlice} from '@reduxjs/toolkit'

export const recipeSlice = createSlice({
    name: 'recipe',
    initialState:'',
    reducers:{
        setRecipe: (state,action) => action.payload
    }
})

export const {setRecipe} = recipeSlice.actions

export default recipeSlice.reducer
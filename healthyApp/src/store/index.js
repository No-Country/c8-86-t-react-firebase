import {configureStore} from '@reduxjs/toolkit'
import productSlice from './slices/product.slice'
import recipeSlice from './slices/recipe.slice'

export default configureStore({
    reducer:{
        productSlice,
        recipeSlice
    }
})
import {configureStore} from '@reduxjs/toolkit'
import productSlice from './slices/product.slice'
import recipeSlice from './slices/recipe.slice'
import productsClickedSlice from './slices/productsClicked.slice'
import allProductsSlice from './slices/allProducts.slice'

export default configureStore({
    reducer:{
        productSlice,
        recipeSlice,
        productsClickedSlice,
        allProductsSlice
    }
})
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProduct } from '../../../store/slices/product.slice'
import { setRecipe } from '../../../store/slices/recipe.slice'
import './MenuDropDown.css'

const MenuDropDown = ({name,section,setMenuIsShow}) => {

    const product = useSelector(state => state.productSlice)
    const recipe = useSelector(state => state.recipeSlice)

    const dispatch = useDispatch()

    const showSection= (name,section) =>{
        if(section==='Productos'){
            console.log(name)
            const showProduct=()=> dispatch(setProduct(name))
            const showRecipe=()=> dispatch(setRecipe(''))
            showProduct()
            showRecipe()
            setMenuIsShow(false)
        }
        else if(section==='Recetas'){
            console.log(name)
            const showRecipe=()=> dispatch(setRecipe(name))
            const showProduct=()=> dispatch(setProduct(''))
            showRecipe()
            showProduct()
            setMenuIsShow(false)
        }
    }



    return (
        <button className='MenuDropDown' onClick={()=> showSection(name,section)}>
            <span>{name}</span>
        </button>
    )
}

export default MenuDropDown

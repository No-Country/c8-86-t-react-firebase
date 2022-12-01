import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCategoryHomeActionsSlice } from '../../store/slices/categoryHomeActions.slice'
import './CategoryCard.css'

const CategoryCard = ({ name }) => {

    let state = ''
    const categoryHomeActions = useSelector(state => state.categoryHomeActionsSlice)

    const dispatch = useDispatch()

    //Funcion para definir categoria del home
    const setCategory = () => {
        dispatch(setCategoryHomeActionsSlice({
            categoryHomeIsClick: {
                toggle: true,
                categoryName: name
            }
        }))
    }

    if (categoryHomeActions.categoryHomeIsClick.categoryName === name) {
        state = 'active'
    }
    else {
        state = 'inactive'
    }



    return (
        <button className={`CategoryCard-${state}`} onClick={setCategory}>
            <p>{name}</p>
        </button>
    )
}

export default CategoryCard

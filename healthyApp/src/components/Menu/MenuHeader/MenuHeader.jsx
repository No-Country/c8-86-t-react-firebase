import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProductsActions } from '../../../store/slices/productsActions.slice'
import './MenuHeader.css'

const MenuHeader = ({ category, toggleCategoryInProducts, setSubCategoryInProducts, hideMenu }) => {
    const productsActions = useSelector(state => state.productsActionsSlice)

    return (
        <div className='MenuHeader' >
            <button onClick={() => toggleCategoryInProducts(category?.category)}>{category?.category}</button>
            {
                (category?.category === productsActions.categoryIsClick.categoryName) &&
                <div className='MenuHeader__subcategory'>
                    {
                        category?.subcategories.map(subcategory => (
                            <button
                                onClick={() => {
                                    setSubCategoryInProducts(subcategory, category?.category)
                                    hideMenu()
                                }
                                }
                                key={subcategory.id}
                            >
                                {subcategory}
                            </button>
                        ))
                    }
                </div>


            }
        </div>
    )
}

export default MenuHeader

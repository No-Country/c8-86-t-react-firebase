import React from 'react'
import './CategoryCard.css'

const CategoryCard = ({name,state}) => {
    return (
        <div className={`CategoryCard-${state}`}>
            <p>{name}</p> 
        </div>
    )
}

export default CategoryCard

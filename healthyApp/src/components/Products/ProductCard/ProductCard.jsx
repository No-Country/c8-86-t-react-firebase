import React from 'react'
import './ProductCard.css'
import { FaCarrot } from "react-icons/fa";

const ProductCard = () => {
    return (
        <div className='ProductCard'>
            <div className='ProductCard__header'>
                <FaCarrot />
            </div>
            <div className='ProductCard__description'>

            </div>
        </div>
    )
}

export default ProductCard

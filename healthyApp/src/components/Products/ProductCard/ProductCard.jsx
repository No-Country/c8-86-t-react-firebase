import React from 'react'
import './ProductCard.css'
import { FaCarrot } from "react-icons/fa";

const ProductCard = ({product}) => {
    console.log(product)
    return (
        <div className='ProductCard'>
            <div className='ProductCard__header'>
                <img src={product.imageUrl} alt="product_img" />
            </div>
            <div className='ProductCard__description'>
                <div className='ProductCard__description__tittle'>
                    <span>{product?.name}</span> 
                </div>
                <div className='ProductCard__description__price'>
                    <span>$ {product?.price}</span>
                </div>
            </div>
        </div>
    )
}

export default ProductCard

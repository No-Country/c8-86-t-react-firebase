import React from 'react'
import './ProductCard.css'


const ProductCard = ({ product }) => {
    // console.log(product)
    if(product){
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
    else{
        return <h2>Loading</h2>
    }

    
}

export default ProductCard

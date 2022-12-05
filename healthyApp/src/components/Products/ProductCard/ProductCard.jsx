import React, { useEffect, useState } from 'react'
import './ProductCard.css'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';



const oferts = [
    '25 %',
    '45 %',
    '60 %',
    '10 %',
    '15 %'
]

const ProductCard = ({ product, category }) => {
    const [index, setIndex] = useState()

    

    useEffect(() => {
        setIndex(Math.floor(Math.random() * (oferts.length - 0) + 0))
    }, [])

    const navigate = useNavigate()
    

    if (product) {
        return (
            <div className='ProductCard'>
                <button className='button__cart'>
                    <AiOutlineShoppingCart />
                </button>
                {
                    category === 'Ofertas' ?
                        <div className='Ofertas__tag'>
                            <span>{oferts[index]}</span>
                        </div>
                        :
                        category === 'Novedades' &&
                        <div className='Novedades__tag'>
                            <span>New</span>
                        </div>
                }
                    <div className='ProductCard__header' style={{backgroundImage : `url(${product.imageUrl})`}}>
                        {/* <img src={product.imageUrl} alt="Loading ..." /> */}
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
    else {
        return <h2>Loading</h2>
    }


}

export default ProductCard

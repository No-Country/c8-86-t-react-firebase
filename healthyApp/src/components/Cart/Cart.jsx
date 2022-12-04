import React from 'react'
import '../Header/Header.css'
import './Cart.css'
import Container from 'react-bootstrap/Container'
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai"
import { useState, useEffect } from 'react'
import axios from 'axios'
import Header from '../Header/Header'


const Cart = () => {

    const [detailProduct, setDetailProduct] = useState({})
    const [checkCant, setCheckCant] = useState(1)

    useEffect(() => {
        setCheckCant(1)
        axios.get(`https://us-central1-saine-api.cloudfunctions.net/app/api/products/2`).then(data => setDetailProduct(data.data))
    },[]);

    console.log(checkCant);

    return (
        <>
            <Header/>
            <Container>
                <h2 className='title_cart mt-3 ms-3'>Mi Carrito</h2>

                <div className='listInCart'>
                    
                    <div className='listInCart__Item'>
                        <div className='addImg'>
                            <div className='containerImage'>
                                <img src={detailProduct.imageUrl}alt="" />
                            </div>
                                <ul>
                                    <li>Lorem ipsum</li>
                                    <li>PRECIO</li>
                                </ul>
                        </div>
                            <div className='addCount'>
                                <div className='inputs'>
                                    <button onClick={() => setCheckCant(checkCant-1)} disabled={checkCant <= 1}>-</button>
                                    <p>{checkCant}</p>
                                    <button onClick={() => setCheckCant(checkCant+1)} disabled={checkCant >= 5}>+</button>
                                </div>
                            </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Cart

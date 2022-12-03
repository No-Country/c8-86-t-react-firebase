import React from 'react'
import '../Header/Header.css'
import './Cart.css'
import Container from 'react-bootstrap/Container'
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai"
import { useState, useEffect } from 'react'
import axios from 'axios'

const Cart = () => {

    const [detailProduct, setDetailProduct] = useState({})

    useEffect(() => {
        axios.get(`https://us-central1-saine-api.cloudfunctions.net/app/api/products/1`).then(data => setDetailProduct(data.data))
    }, []);

    return (
        <>
            <div className='Header'>
                <button  className={`Header__btn-false left`}> <AiOutlineMenu /> </button>
                <button className={`Header__btn-false right opacity`}> <AiOutlineShoppingCart /></button>
            </div>

            <Container>
                <h2 className='title_cart mt-3 ms-3'>Mi Carrito</h2>

                <div className='listInCart'>
                <div className='listInCart__Item'>
                        <div className='addImg'>
                            <div className='containerImage'>
                                <img src={detailProduct.imageUrl} alt="" />
                            </div>
                                <ul>
                                    <li>item</li>
                                    <li>precio</li>
                                </ul>
                        </div>
                        <div className='addCount'>
                            <div className='inputs'>
                                <button>-</button>
                                <input type="text" value={2} />
                                <button>+</button>
                            </div>
                        </div>
                    </div>
                    
                    <div className='listInCart__Item'>
                        <div className='addImg'>
                            <div className='containerImage'>
                                <img src={detailProduct.imageUrl} alt="" />
                            </div>
                                <ul>
                                    <li>item</li>
                                    <li>precio</li>
                                </ul>
                        </div>
                        <div className='addCount'>
                            <div className='inputs'>
                                <button>-</button>
                                <input type="text" value={2} />
                                <button>+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Cart

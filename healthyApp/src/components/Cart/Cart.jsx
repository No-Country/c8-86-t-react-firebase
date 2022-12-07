import React from 'react'
import '../Header/Header.css'
import './Cart.css'
import Container from 'react-bootstrap/Container'
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai"
import { useState, useEffect } from 'react'
import axios from 'axios'
import Arrow from '../../assets/arrow-back.svg'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    const navigate = useNavigate()
    const [detailProduct, setDetailProduct] = useState({})
    const [checkCant, setCheckCant] = useState(1)

    const url = `https://us-central1-saine-api.cloudfunctions.net/app/api/products/`;

    useEffect(() => {
        setCheckCant(1)

        const l = JSON.parse(localStorage.getItem('addProduct'));
        console.log(JSON.parse(localStorage.getItem('addProduct')));
        const arr = [];
        arr.push(l.id);
        console.log(l.id);
        /*arr.forEach(i => {
            axios.get(`https://us-central1-saine-api.cloudfunctions.net/app/api/products/${i.id}`).then(data => setDetailProduct(data.data))
        });*/
    },[]);

    console.log(detailProduct);

    return (
        <>
            <header className='header-menu d-flex justify-content-start align-items-center'>
                <div>
                    <button className='border border-0' onClick={() => navigate('/')}> 
                        <img src={Arrow} alt="arrow back" />
                    </button>
                </div>
            </header>
            <Container>
                <h2 className='title_cart mt-3 ms-3'>Mi Carrito</h2>

                <div className='listInCart'>
                    
                    <div className='listInCart__Item'>
                        <div className='addImg'>
                            <div className='containerImage'>
                                <img src={detailProduct.imageUrl}alt="" />
                            </div>
                                <ul>
                                    <li>{detailProduct.name}</li>
                                    <li><b> $ {detailProduct.price}</b></li>
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

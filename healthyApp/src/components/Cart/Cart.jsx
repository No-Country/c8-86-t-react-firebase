import React from 'react'
import '../Header/Header.css'
import './Cart.css'
import Container from 'react-bootstrap/Container'
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai"
import { useState, useEffect } from 'react'
import axios from 'axios'
import Arrow from '../../assets/arrow-back.svg'
import { useNavigate } from 'react-router-dom'
import { async } from '@firebase/util'
import { useAuth } from '../../context/AuthContext'
import Modal from '../../components/Profile/Modal/Modal'


const Cart = () => {
    const navigate = useNavigate()
    // const [detailProduct, setDetailProduct] = useState({})
    // const [checkCant, setCheckCant] = useState(1)

    const url = `https://us-central1-saine-api.cloudfunctions.net/app/api/products/`;
    // let arrayAux = [];

    // useEffect(() => {
    //     setCheckCant(1)


    //     /*arr.forEach(i => {
    //         axios.get(`https://us-central1-saine-api.cloudfunctions.net/app/api/products/${i.id}`).then(data => setDetailProduct(data.data))
    //     });*/
    // },[localStorage.getItem('addProduct')]);


    // const l = JSON.parse(localStorage.getItem('addProduct'));
    // console.log(JSON.parse(localStorage.getItem('addProduct')));
    /*arrayAux.push({id: 1, quantity: 5});
    arrayAux.push({id: 7, quantity: 5});*/
    // arrayAux.push(l);
    // console.log("Array: ", arrayAux);
    //console.log(detailProduct);

    // arrayAux.forEach( async (element) => {
    //     await axios.get(`https://us-central1-saine-api.cloudfunctions.net/app/api/products/${element.id}`).then(data => setDetailProduct(data.data))
    // });

    //localStorage.setItem('addProduct',JSON.parse(arrayAux));


    // ------ FUNCIONALIDAD DE SEBASTIAN ---------

    const { user } = useAuth()
    const [cart, setCart] = useState()
    const [modified, setModified] = useState()
    const [total, setTotal] = useState()

    //Seteo inicial del carrito, por si ya habia agregado productos


    useEffect(() => {
        console.log('Actualizado cart')
        let cartInStorage = JSON.parse(localStorage.getItem('cart'))
        let totalOfCart = 0
        if (cartInStorage?.userInCart?.uid === user.uid) {
            setCart(cartInStorage)
            cartInStorage?.productsAdd?.map(product => {
                totalOfCart += (product?.product?.price * product?.quantity)
            })
            setTotal(totalOfCart)
        }
    }, [modified])

    console.log(cart)
    console.log(total)

    //Funcion checkout
    const [checkoutModal, setCheckoutModal] = useState(false)

    const checkout = () => {
        let cartInStorage = JSON.parse(localStorage.getItem('cart'))
        if (cartInStorage?.userInCart?.uid === user.uid) {
            localStorage.removeItem('cart')
            setModified(!modified)
            setCheckoutModal(true)
            setTimeout(() => {
                setCheckoutModal(false)
            }, 3000);
            setTimeout(() => {
                navigate('/')
            }, 4000);

        }
    }

    //Función para agregar mas unidades al carrito

    const plus = (id) => {
        let cartInStorage = JSON.parse(localStorage.getItem('cart'))
        if (cartInStorage?.userInCart?.uid === user.uid) {
            let index = cartInStorage?.productsAdd?.findIndex(product => product?.id === id)

            let plusItem = {
                id: cartInStorage?.productsAdd[index].id,
                product: cartInStorage?.productsAdd[index].product,
                quantity: cartInStorage?.productsAdd[index].quantity + 1
            }

            cartInStorage?.productsAdd?.splice(index, 1, plusItem)
            localStorage.setItem('cart', JSON.stringify(cartInStorage))
        }
        setModified(!modified)
    }
    const minus = (id) => {
        let cartInStorage = JSON.parse(localStorage.getItem('cart'))
        if (cartInStorage?.userInCart?.uid === user.uid) {
            let index = cartInStorage?.productsAdd?.findIndex(product => product?.id === id)
            if (cartInStorage?.productsAdd[index].quantity > 1) {
                let plusItem = {
                    id: cartInStorage?.productsAdd[index].id,
                    product: cartInStorage?.productsAdd[index].product,
                    quantity: cartInStorage?.productsAdd[index].quantity - 1
                }

                cartInStorage?.productsAdd?.splice(index, 1, plusItem)
                localStorage.setItem('cart', JSON.stringify(cartInStorage))
            }
            else if (cartInStorage?.productsAdd[index].quantity === 1) {
                cartInStorage?.productsAdd?.splice(index, 1)
                localStorage.setItem('cart', JSON.stringify(cartInStorage))
            }

        }
        setModified(!modified)
    }
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
                {
                    checkoutModal &&
                    <Modal
                        checkout={checkoutModal}
                    />
                }

                <h2 className='title_cart mt-3 ms-3'>Mi Carrito</h2>
                {
                    cart ?
                        <div className='listInCart'>
                            {
                                cart?.productsAdd?.map(product => (
                                    <div className='listInCart__Item' key={product?.id}>
                                        <div className='addImg'>
                                            <div className='containerImage'>
                                                <img src={product?.product?.imageUrl} alt="product-image" />
                                            </div>
                                            <ul>
                                                <li>{product?.product?.name}</li>
                                                <li><b> $ {product?.product?.price}</b></li>
                                            </ul>
                                        </div>
                                        <div className='addCount'>
                                            <div className='inputs'>
                                                <button onClick={() => plus(product.id)} >+</button>
                                                <p>{product?.quantity}</p>
                                                <button onClick={() => minus(product.id)} >-</button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }

                            <div className='cart__total'>
                                <h5>Total: ${total}</h5>
                            </div>


                            <button className='color border border-0 m-auto w-100' onClick={checkout}>CheckOut</button>
                        </div>
                        :
                            <div className='cart__empty'>
                                <h4>El carrito está vacio</h4>
                            </div>

                    
                }


            </Container>
        </>
    )
}

export default Cart

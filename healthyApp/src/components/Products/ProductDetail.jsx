import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
//import { useDispatch, useSelector } from 'react-redux'
//import { getProductsItem, setProductItem } from '../../store/slices/productItem.slice'

import { BiArrowBack } from "react-icons/bi"

import '../Login/Login.css'
import Arrow from '../../assets/arrow-back.svg'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

import Container from 'react-bootstrap/Container';
import './productDetail.css'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { useAuth } from '../../context/AuthContext'


import { setLoading } from '../../store/slices/loading.slice'
import { useDispatch, useSelector } from 'react-redux'
import { setFavorites } from '../../store/slices/favorites.slice'

import { setCart } from '../../store/slices/cart.slice'

const ProductDetail = () => {
    const navigate = useNavigate()

    const dispatch = useDispatch()

    //const loading = useSelector(state => state.setLoading())

    // const productItem = useSelector(state => state.productItem)
    // const details = () => dispatch(setProductItem())


    const { id } = useParams()
    const [detailProduct, setDetailProduct] = useState({})


    const backHome = () => navigate('/')

    useEffect(() => {

        axios.get(`https://us-central1-saine-api.cloudfunctions.net/app/api/products/${id}`).then(data => setDetailProduct(data.data)).finally(() => dispatch(setLoading(true)))
        // const p = () => dispatch(getProductsItem(id));
        //  p()

    }, [])

    const [statusFavorite, setStatusFavorite] = useState(false)
    const [statusCart, setStatusCart] = useState(false)
    const { user } = useAuth()

    //Funcion para que cuando cargue el componente, verifique que el producto ya esta en favoritos
    useEffect(() => {
        let favorites = JSON.parse(localStorage.getItem('favorites'))

        let filter = favorites?.favoritesArray.filter(favorite => favorite?.detailProduct?.name === detailProduct.name)

        if (filter?.length > 0) {
            // console.log('Ya esta en favoritos')
            setStatusFavorite(true)
        }
    }, [detailProduct])

    //Formato para guardar en localStorage y en slice
    /*
        {
        userInCart: '',
        productsAdd: []
        }
    */

    const addProductCart = () => {
        setStatusCart(!statusCart)
        let cartSaved = JSON.parse(localStorage.getItem('cart'))
        if(cartSaved){
            if(cartSaved?.userInCart?.uid === user.uid){
                console.log('Es el mismo usuario')
                let filter = cartSaved?.productsAdd?.filter(product => product?.id === Number(id))
                if(filter.length>0){
                    setStatusCart(true)
                    console.log('El producto ya esta agregado al carrito')
                }
                else{
                    cartSaved?.productsAdd?.push(
                        {
                            quantity: 1,
                            id: Number(id),
                            product: detailProduct
                        }
                    )
                    localStorage.setItem('cart', JSON.stringify(cartSaved))
                }
            }
            else{
                console.log('No es el mismo usuario')
                let cart={
                    userInCart: user,
                    productsAdd:[
                        {
                            quantity: 1,
                            id: Number(id),
                            product: detailProduct
                        }
                    ]
                }
                localStorage.setItem('cart', JSON.stringify(cart));
            }
        }
        else{
            console.log('No existe un carrito')
            let cart={
                userInCart: user,
                productsAdd:[
                    {
                        quantity: 1,
                        id: Number(id),
                        product: detailProduct
                    }
                ]
            }
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    
        
        //let productInCart = JSON.parse(localStorage.getItem('addProduct'));
    };

    //Funcion para agregar o quitar de favoritos un producto
    const toggleFavorites = () => {
        if (statusFavorite) {
            let favorites = JSON.parse(localStorage.getItem('favorites'))

            //Funcion para cuando ya esta en favoritos
            setStatusFavorite(false)
            if (favorites?.userFavorites?.uid === user.uid) {

                let result = favorites?.favoritesArray?.find(favorite => favorite.name === detailProduct.name)
                let index = favorites?.favoritesArray.indexOf(result)
                favorites?.favoritesArray.splice(index, 1)
                // console.log(favorites)
                localStorage.setItem('favorites', JSON.stringify(favorites))
                // console.log(favorites)
            }

        }
        else {
            //Funci??n para cuando no est?? en favoritos
            setStatusFavorite(true)
            let favorites = JSON.parse(localStorage.getItem('favorites'))
            if (favorites) {
                if (favorites?.userFavorites?.uid === user.uid) {
                    // console.log('Usuario existia')

                    let result = favorites?.favoritesArray.filter(favorite => favorite.name === detailProduct.name)

                    if (result.length > 0) {
                        // console.log('Ya existia')
                        console.log(favorites?.favoritesArray)
                    }
                    else {
                        // console.log('No existia')
                        favorites?.favoritesArray.push({id:id,detailProduct:detailProduct})
                        console.log(favorites)
                        localStorage.setItem('favorites', JSON.stringify(favorites))
                    }
                }
                else {
                    // console.log('No existe usuario')
                    let toSave = {
                        userFavorites: user,
                        favoritesArray: [
                            {
                                id: id,
                                detailProduct: detailProduct
                            }

                        ]
                    }
                    localStorage.setItem('favorites', JSON.stringify(toSave))
                    console.log(JSON.parse(localStorage.getItem('favorites')))
                }
            }
            else {
                // console.log('No existia favorites')
                let newFavorites = {
                    userFavorites: user,
                    favoritesArray: [
                        {
                            id: id,
                            detailProduct: detailProduct
                        }
                        
                    ]
                }
                localStorage.setItem('favorites', JSON.stringify(newFavorites))
                console.log(JSON.parse(localStorage.getItem('favorites')))
            }
        }

        const setFavoritesSlice = () => dispatch(setFavorites(JSON.parse(localStorage.getItem('favorites'))))
        setFavoritesSlice()

    }


    return (
        <div>
            <header className='header-menu d-flex justify-content-start align-items-center'>
                <div>
                    <button className='border border-0' onClick={backHome}>
                        <img src={Arrow} alt="arrow back" />
                    </button>
                </div>
            </header>
            <Container className='p-5'>
                <h1 className='titleProduct'>{detailProduct.category} </h1>

                <div className='imageProduct'>
                    <img src={detailProduct.imageUrl} alt="" />
                    <button className='squireLike border border-0' onClick={toggleFavorites}>
                        {
                            statusFavorite ? <AiFillHeart /> : <AiOutlineHeart />
                        }
                    </button>
                </div>

                <h2 className='nameProduct'>{detailProduct.name}</h2>

                <div className='lineBottom'>
                    <h4 className='disabled marcProduct' >Marca marca</h4>
                </div>

                <div className='lineBottom'>
                    <h4 className='mt-4 mb-4' >Description</h4>
                    <p className='text-start text-wrap'>{detailProduct.describe}</p>
                </div>

                <div className=''>
                    <h4 className='mt-2 priceProduct'>precio/unidad</h4>
                    <button className='btnPrice border border-0 fw-semibold'> $ {detailProduct.price} </button>
                </div>

                <div className='d-flex justify-content-center mt-5'>
                    <button className='border border-0  btnAtCart fw-semibold' onClick={() => {
                        addProductCart()
                        }}> {statusCart ? "A??ADIDO" : "A??ADIR"} AL CARRITO</button>
                </div>
            </Container>
        </div>
    )
}

export default ProductDetail

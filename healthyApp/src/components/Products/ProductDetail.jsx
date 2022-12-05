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
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai'
import {useAuth} from '../../context/AuthContext'
import {useSelector} from 'react-redux'

import {setLoading} from '../../store/slices/loading.slice'
import { useDispatch, useSelector } from 'react-redux'


const ProductDetail = () => {
    const navigate = useNavigate()

    const dispatch = useDispatch()

    //const loading = useSelector(state => state.setLoading())

   // const productItem = useSelector(state => state.productItem)
   // const details = () => dispatch(setProductItem())


    const {id} = useParams()
    const [detailProduct, setDetailProduct] = useState({})
    

    const backHome = () => navigate('/')

    useEffect(() => {

        axios.get(`https://us-central1-saine-api.cloudfunctions.net/app/api/products/${id}`).then(data => setDetailProduct(data.data)).finally(() => dispatch(setLoading(false)))
       // const p = () => dispatch(getProductsItem(id));
      //  p()

    },[])

   
    const [statusFavorite, setStatusFavorite] = useState(false)
    const { user } = useAuth()
    

    /* 
        {
            userFavorites: user,
            favoritesArray:[
                detailProduct
            ]
        }
    */

    const [favorites, setFavorites] = useState(localStorage.getItem('favorites'))
    // console.log(favorites)

    const [productIsInFavorites, setProductIsInFavorites] = useState(false)

    useEffect(() => {
        if(favorites){
            let result=favorites?.favoritesArray?.filter(favorite => favorite.id === detailProduct?.id)
            if(result){
                setProductIsInFavorites(true)
            }
        }
    }, [])

    console.log(productIsInFavorites)

    const addFavorites = () =>{
        setStatusFavorite(true)
        if(favorites){
            if(favorites?.userFavorites?.uid === user.uid){
                let result=favorites?.favoritesArray?.filter(favorite => favorite.name === detailProduct?.name)
                if(!result){
                    favorites?.favoritesArray.push(detailProduct)
                    localStorage.setItem('favorites',JSON.stringify(favorites) )
                }
            }
            else{
                let newFavorites = {
                    userFavorites: user,
                    favoritesArray:[
                        detailProduct
                    ]
                }
                localStorage.setItem('favorites',JSON.stringify(newFavorites))
            }
        }
        else{
            let newFavorites = {
                userFavorites: user,
                favoritesArray:[
                    detailProduct
                ]
            }
            localStorage.setItem('favorites',JSON.stringify(newFavorites))

        }
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
            <Container>
                <h1 className='titleProduct'>{detailProduct.category} </h1>

                <div className='imageProduct'>
                    <img src={detailProduct.imageUrl} alt="" />
                    <button className='squireLike border border-0' onClick={addFavorites}>
                        {
                            statusFavorite ? <AiFillHeart/> : <AiOutlineHeart/>
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
                    <button className='border border-0  btnAtCart fw-semibold'>AÑADIR AL CARRITO</button>
                </div>
            </Container>
        </div>
    )
}

export default ProductDetail

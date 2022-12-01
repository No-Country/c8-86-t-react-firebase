import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import './Home.css'
import Footer from '../Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import Menu from '../Menu/Menu';
import Profile from '../Profile/Profile'
import { setMenuActions } from '../../store/slices/menuActions.slice';
import { setProfileActions } from '../../store/slices/profileActions.slice';
import { BiArrowBack } from "react-icons/bi";
import { setProductsActions } from '../../store/slices/productsActions.slice';
import { getProducts } from '../../store/slices/productsClicked.slice';
import ProductCard from '../Products/ProductCard/ProductCard';

import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const menuActions = useSelector(state => state.menuActionsSlice)
    const profileActions = useSelector(state => state.profileActionsSlice)
    const productsActions = useSelector(state => state.productsActionsSlice)
    const productsFilterBySubcategory = useSelector(state => state.productsClickedSlice)

    //Metodos para estados globales de control de vista
    const hideMenu = () => dispatch(setMenuActions({ menuIsShow: false }))
    const showMenu = () => dispatch(setMenuActions({ menuIsShow: true }))
    const showProfile = () => dispatch(setProfileActions({ profileIsShow: true }))
    const hideProfile = () => dispatch(setProfileActions({ profileIsShow: false }))
    const clearProducts = () => dispatch(setProductsActions(
        {
            "productIsClick": false,
            "categoryIsClick": {
                "toggle": false,
                "categoryName": ""
            },
            "subcategoryIsClick": {
                "toggle": false,
                "subcategoryName": ""
            }
        }))



    const backHome = () => {
        hideMenu()
        hideProfile()
        clearProducts()
    }

    //Traer productos específicos de acuerdo a categoria

    useEffect(() => {
        const productsClicked = () => dispatch(getProducts(productsActions?.subcategoryIsClick.subcategoryName))
        productsClicked()
    }, [productsActions?.subcategoryIsClick.subcategoryName])



    return (
        <div className='Home'>
            <Header />
            <Menu />

            {
                profileActions.profileIsShow ?
                    <>
                        {/* Usar este boton siempre para volver al menu principal */}
                        <button className='back__button' onClick={backHome}>
                            <BiArrowBack />
                        </button>
                        <Profile />
                    </>
                    :
                    <div className='Home__content'>
                        {
                            productsActions?.subcategoryIsClick.subcategoryName &&
                            <>
                                <button className='back__button' onClick={backHome}>
                                    <BiArrowBack />
                                </button>
                                <div className='Home__content__products__filter'>
                                    {
                                        productsFilterBySubcategory?.map(product => (
                                            <div className='products__card' key={product?.id}  onClick={() => navigate(`/product/${product.id}`)}>
                                                <ProductCard
                                                    product={product}

                                                />
                                            </div>
                                        ))
                                    }
                                </div>


                            </>
                        }

                    </div>
            }

            <Footer />

        </div>
    )
}

export default Home

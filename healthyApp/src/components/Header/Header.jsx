import React, { useState } from 'react'
import './Header.css'
import { AiOutlineMenu, AiOutlineShoppingCart, AiOutlineClose, AiOutlineUser } from "react-icons/ai";
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { setMenuActions } from '../../store/slices/menuActions.slice';
import { setProfileActions } from '../../store/slices/profileActions.slice';
import { setProductsActions } from '../../store/slices/productsActions.slice';


const Header = ({ }) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const menuActions = useSelector(state => state.menuActionsSlice)
    const menuIsShow = menuActions.menuIsShow
    const profileActions = useSelector(state => state.profileActionsSlice)
    const profileIsShow = profileActions.profileIsShow


    // console.log(menuActions)
    // console.log(menuIsShow)

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

    const toggleMenu = () => {
        if (menuIsShow) {
            hideMenu()

        }
        else {
            clearProducts()
            hideProfile()
            showMenu()
        }

    }

    const goToCart = () =>{
        navigate('/cart')
    }

    const toggleProfile = () => {
        if (!profileIsShow) {
            hideMenu()
            showProfile()
        }
        else{
            hideMenu()
        }

    }

    return (
        <div className='Header'>
            {
                menuIsShow ?
                    <>
                        <button className={`Header__btn-${menuIsShow} left`} onClick={toggleMenu}>
                            <AiOutlineClose />
                        </button>
                        <h3>saine</h3>
                        <button className={`Header__btn-${menuIsShow} right`} onClick={toggleProfile} >
                            <AiOutlineUser />
                        </button>
                    </>
                    :
                    <>
                        <button className={`Header__btn-${menuIsShow} left`} onClick={toggleMenu}>
                            <AiOutlineMenu />
                        </button>
                        <h3>saine</h3>
                        <button className={`Header__btn-${menuIsShow} right`} onClick={goToCart}>
                            <AiOutlineShoppingCart />
                        </button>
                    </>
            }

        </div>
    )
}

export default Header

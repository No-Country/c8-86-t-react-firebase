import React from 'react'
import './Header.css'
import { AiOutlineMenu,AiOutlineShoppingCart } from "react-icons/ai";
import {useNavigate} from 'react-router-dom'

const Header = () => {

    const navigate = useNavigate()

    const goToCart = () =>{
        navigate('/cart')
    }




    return (
        <div className='Header'>
            <button className='Header__btn left'>
                <AiOutlineMenu />
            </button>
            <h3>saine</h3>
            <button className='Header__btn right' onClick={goToCart}>
                <AiOutlineShoppingCart />
            </button>
        </div>
    )
}

export default Header

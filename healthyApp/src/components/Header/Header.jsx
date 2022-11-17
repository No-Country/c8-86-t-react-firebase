import React from 'react'
import './Header.css'
import { AiOutlineMenu,AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {





    return (
        <div className='Header'>
            <button className='Header__btn left'>
                <AiOutlineMenu />
            </button>
            <h3>saine</h3>
            <button className='Header__btn right'>
                <AiOutlineShoppingCart />
            </button>
        </div>
    )
}

export default Header

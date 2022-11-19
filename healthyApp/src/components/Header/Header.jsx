import React from 'react'
import './Header.css'
import { AiOutlineMenu, AiOutlineShoppingCart , AiOutlineClose, AiOutlineUser} from "react-icons/ai";
import { useNavigate } from 'react-router-dom'

const Header = ({ setMenuIsShow, menuIsShow , setRecipesIsClick,setProductIsClick}) => {

    const navigate = useNavigate()

    const goToCart = () => {
        navigate('/cart')
    }

    const toggleMenu = () => {
        setMenuIsShow(!menuIsShow)
        setRecipesIsClick(false)
        setProductIsClick(false)
    }

    const goToProfile = () =>{
        navigate('/profile')
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
                        <button className={`Header__btn-${menuIsShow} right`} onClick={goToProfile}>
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

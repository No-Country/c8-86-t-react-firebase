import React, { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import Header from '../../components/Header/Header'
import { Navigate, useNavigate } from 'react-router-dom'
import User from '../../assets/login/user.svg'
import './Profile.css'

const Profile = ({ toggleFavsProducts, toggleFavsRecipes }) => {

    const { user, loading, logOut } = useAuth()
    console.log(user)

    //function logOut
    const logOutFunction = () => {
        logOut()
    }

    //funcion desplegar favoritos
    const [favsIsShow, setFavsIsShow] = useState(false)
    const toggleFavs = () => {
        setFavsIsShow(!favsIsShow)
    }

    //function favoritosProductos



    if (user != null) {
        return (
            <div className='Profile'>
                <div className='Profile__header mt-3'>
                    <h4>Hola {user?.email}</h4>
                    <div className='Profile__header__img mt-3 mb-3'>
                        <img src={User} alt="user__img" />
                    </div>
                </div>
                <div className='Profile__menu mt-3'>
                    <button className='Profile__menu__item' onClick={toggleFavs}>
                        <div className='Profile__menu__title'>
                            <span className='ms-2'>Favoritos</span>
                        </div>
                        {
                            favsIsShow &&
                            <div className='Profile__menu__dropdown mb-2'>
                                <button className='Profile__menu__dropdown__item' onClick={toggleFavsProducts}>
                                    <span className='ms-3'>Productos</span>
                                </button>
                                <button className='Profile__menu__dropdown__item' onClick={toggleFavsRecipes}>
                                    <span className='ms-3'>Recetas</span>
                                </button>
                            </div>
                        }
                    </button>

                    <button className='Profile__menu__item disabled'>
                        <div className='Profile__menu__title'>
                            <span className='ms-2'>Medios de pago - Deshabilitado</span>
                        </div>
                    </button>
                    <button className='Profile__menu__item disabled'>
                        <div className='Profile__menu__title'>
                            <span className='ms-2'>Editar Perfil - Deshabilitado</span>
                        </div>
                        
                    </button>
                    <button className='Profile__menu__item' onClick={logOutFunction}>
                        <div className='Profile__menu__title'>
                            <span className='ms-2'> Cerrar sesión</span>
                        </div>

                    </button>

                </div>
            </div>
        )
    }
    else {
        return <Navigate to='/login' />
    }


}

export default Profile

import React, { useState, useEffect } from 'react'
import { useAuth } from '../../context/AuthContext'
import Header from '../../components/Header/Header'
import { Navigate, useNavigate } from 'react-router-dom'
import User from '../../assets/login/user.svg'
import './Profile.css'

import CerrarSesion from '../Alert/Model/CerrarSesion/CerrarSesion'
import EditProfile from './EditProfile/EditProfile'
import { setFavoritesActionsSlice } from '../../store/slices/favoritesActions.slice'
import { useDispatch } from 'react-redux'
import { setProfileActions } from '../../store/slices/profileActions.slice'

const Profile = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    //Estado para abrir o cerrar Modal de Cerrar Sesión 
    const [lookOption, setLookOption] = useState(false)

    const { user, loading, logOut } = useAuth()
    

    //function logOut
    /*const logOutFunction = () => {
        logOut()
    }*/

    //funcion desplegar favoritos
    const [favsIsShow, setFavsIsShow] = useState(false)
    const toggleFavs = () => {
        setFavsIsShow(!favsIsShow)
    }

    //function favoritosProductos


    useEffect(() => { setLookOption(false) }, [])

    //Función mostrar favoritos de productos

    const showFavorites = () => dispatch(setFavoritesActionsSlice({
        favoritesIsShow: true
    }))
    


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
                                <button className='Profile__menu__dropdown__item' 
                                onClick={()=>{
                                    showFavorites()
                                    const hideProfile = () => dispatch(setProfileActions({ profileIsShow: false }))
                                    hideProfile()
                                }
                                }>
                                    <span className='ms-3'>Productos</span>
                                </button>
                                <button className='Profile__menu__dropdown__item disabled'>
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
                    <button className='Profile__menu__item'>
                        <div className='Profile__menu__title'>
                            <span className='ms-2' onClick={() => navigate('/login/edit')}>Editar Perfil</span>
                        </div>
                        
                    </button>
                    <button className='Profile__menu__item' onClick={() => setLookOption(!lookOption)}>
                        <div className='Profile__menu__title'>
                            <button className='ms-2 border border-0 bg-transparent'> Cerrar sesión</button>
                            { lookOption && <CerrarSesion/> }
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
import React, { useState } from 'react'
import './Menu.css'
import MenuDropDown from './MenuDropDown/MenuDropDown'
import MenuHeader from './MenuHeader/MenuHeader'
import { useAuth } from '../../context/AuthContext'


const Menu = ({ menuIsShow, setMenuIsShow, productToggle, recipesToggle, profileToggle, productIsClick, recipesIsClick }) => {

    const { user, loading } = useAuth();


    return (
        <div className={`Menu-${menuIsShow}`}>
            <div className='Menu__header '>
                <div className='Menu__category'>
                    <MenuHeader
                        name={'Productos'}
                        setMenuIsShow={setMenuIsShow}
                        productToggle={productToggle}
                    />
                </div>

                {
                    productIsClick &&
                    <div className='dropdown'>
                        <div className='item__dropdown'>
                            <MenuDropDown
                                name={'Snacks'}
                                section={'Productos'}
                                setMenuIsShow={setMenuIsShow}
                            />
                        </div>
                        <div className='item__dropdown'>
                            <MenuDropDown
                                name={'Bebidas'}
                                section={'Productos'}
                                setMenuIsShow={setMenuIsShow}
                            />
                        </div>
                        <div className='item__dropdown'>
                            <MenuDropDown
                                name={'Cereales'}
                                section={'Productos'}
                                setMenuIsShow={setMenuIsShow}
                            />
                        </div>
                        <div className='item__dropdown'>
                            <MenuDropDown
                                name={'Harinas'}
                                section={'Productos'}
                                setMenuIsShow={setMenuIsShow}
                            />
                        </div>
                    </div>
                }
            </div>
            <div className='Menu__header '>
                <div className='Menu__category'>
                    <MenuHeader
                        name={'Recetas'}
                        setMenuIsShow={setMenuIsShow}
                        recipesToggle={recipesToggle}
                    />
                </div>
                {
                    recipesIsClick &&
                    <div className='dropdown'>
                        <div className='item__dropdown'>
                            <MenuDropDown
                                name={'Rápidas y sencillas'}
                                section={'Recetas'}
                                setMenuIsShow={setMenuIsShow}
                            />
                        </div>
                        <div className='item__dropdown'>
                            <MenuDropDown
                                name={'Platos fríos'}
                                section={'Recetas'}
                                setMenuIsShow={setMenuIsShow}
                            />
                        </div>
                        <div className='item__dropdown'>
                            <MenuDropDown
                                name={'Platos calientes'}
                                section={'Recetas'}
                                setMenuIsShow={setMenuIsShow}
                            />
                        </div>
                    </div>
                }
            </div>
            {
                (!user) ?
                    <>
                        <div className='Menu__header '>
                            <div className='Menu__category'>
                                <MenuHeader
                                    name={'Iniciar Sesión'}
                                    setMenuIsShow={setMenuIsShow}
                                />
                            </div>

                        </div>
                        <div className='Menu__header '>
                            <div className='Menu__category'>
                                <MenuHeader
                                    name={'Registrarse'}
                                    setMenuIsShow={setMenuIsShow}
                                />
                            </div>

                        </div>
                    </>
                    :
                    <div className='Menu__header'>
                        <div className='Menu__category'>
                            <MenuHeader
                                name={'Perfil'}
                                setMenuIsShow={setMenuIsShow}
                                profileToggle={profileToggle}
                            />
                        </div>

                    </div>
            }

        </div>
    )
}

export default Menu

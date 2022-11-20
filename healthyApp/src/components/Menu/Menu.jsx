import React, { useState } from 'react'
import './Menu.css'
import MenuDropDown from './MenuDropDown/MenuDropDown'
import MenuHeader from './MenuHeader/MenuHeader'


const Menu = ({ menuIsShow, setMenuIsShow ,productToggle,recipesToggle,productIsClick,recipesIsClick}) => {



    return (
        <div className={`Menu-${menuIsShow}`}>
            <div className='Menu__header'>
                <MenuHeader
                    name={'Productos'}
                    setMenuIsShow={setMenuIsShow}
                    productToggle={productToggle}
                />
                {
                    productIsClick &&
                    <>
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
                    </>
                }
            </div>
            <div className='Menu__header'>
                <MenuHeader
                    name={'Recetas'}
                    setMenuIsShow={setMenuIsShow}
                    recipesToggle={recipesToggle}
                />
                {
                    recipesIsClick &&
                    <>
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
                    </>
                }
            </div>
            {
                localStorage.getItem('token') === null ?
                    <>
                        <div className='Menu__header'>
                            <MenuHeader
                                name={'Iniciar Sesión'}
                                setMenuIsShow={setMenuIsShow}
                            />
                        </div>
                        <div className='Menu__header'>
                            <MenuHeader
                                name={'Registrarse'}
                                setMenuIsShow={setMenuIsShow}
                            />
                        </div>
                    </>
                    :
                    <div className='Menu__header'>
                        <MenuHeader
                            name={'Perfil'}
                            setMenuIsShow={setMenuIsShow}
                        />
                    </div>
            }

        </div>
    )
}

export default Menu

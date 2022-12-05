import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setMenuActions } from '../../store/slices/menuActions.slice'
import { setProductsActions } from '../../store/slices/productsActions.slice'
import './Menu.css'
import MenuHeader from './MenuHeader/MenuHeader'
import { useAuth } from '../../context/AuthContext'
import { setProfileActions } from '../../store/slices/profileActions.slice'
import { useNavigate } from 'react-router-dom'

const Menu = () => {
    const { user, loading } = useAuth();
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const menuActions = useSelector(state => state.menuActionsSlice)
    const productsActions = useSelector(state => state.productsActionsSlice)
    const categorySlice = useSelector(state => state.categorySlice)


    const hideMenu = () => dispatch(setMenuActions({ menuIsShow: false }))




    const hideProducts = () => dispatch(setProductsActions(
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
        }
    ))
    const showProducts = () => dispatch(setProductsActions(
        {
            "productIsClick": true,
            "categoryIsClick": {
                "toggle": false,
                "categoryName": ""
            },
            "subcategoryIsClick": {
                "toggle": false,
                "subcategoryName": ""
            }
        }
    ))

    const toggleCategoryInProducts = (categoryName) => dispatch(setProductsActions(
        (productsActions.categoryIsClick.categoryName) ?
            {
                "productIsClick": true,
                "categoryIsClick": {
                    "toggle": false,
                    "categoryName": ''
                },
                "subcategoryIsClick": {
                    "toggle": false,
                    "subcategoryName": ""
                }
            }
            :
            {
                "productIsClick": true,
                "categoryIsClick": {
                    "toggle": true,
                    "categoryName": categoryName
                },
                "subcategoryIsClick": {
                    "toggle": false,
                    "subcategoryName": ""
                }
            }


    ))

    const setSubCategoryInProducts = (subcategoryName, categoryName) => dispatch(setProductsActions(
        {
            "productIsClick": true,
            "categoryIsClick": {
                "toggle": true,
                "categoryName": categoryName
            },
            "subcategoryIsClick": {
                "toggle": true,
                "subcategoryName": subcategoryName
            }
        }
    ))

    // console.log(productsActions.productIsClick )



    const toggleProducts = () => {
        if (productsActions.productIsClick === true) {
            console.log('Hide products')
            hideProducts()
        }
        else {
            console.log('Show products')
            showProducts()
        }
    }

    const showProfile = () => dispatch(setProfileActions({ profileIsShow: true }))
    const hideProfile = () => dispatch(setProfileActions({ profileIsShow: false }))


    return (
        <div className={`Menu-${menuActions.menuIsShow}`}>
            <div className='Menu__section' >
                <button onClick={toggleProducts}>Productos</button>
                {
                    productsActions.productIsClick &&
                    categorySlice?.map((category,index) => (
                        <MenuHeader
                            category={category}
                            key={index}
                            toggleCategoryInProducts={toggleCategoryInProducts}
                            setSubCategoryInProducts={setSubCategoryInProducts}
                            hideMenu={hideMenu}
                        />
                    ))
                }
            </div>
            {
                user ?
                    <div className='Menu__section'>
                        <button
                            onClick={() => {
                                showProfile()
                                hideMenu()
                            }}
                        >
                            Perfil
                        </button>
                    </div>
                    :
                    <>
                        <div className='Menu__section'>
                            <button
                                onClick={()=>{
                                    navigate('/login')
                                }}
                            >Iniciar Sesión</button>
                        </div>
                        <div className='Menu__section'>
                            <button
                                onClick={()=>{
                                    navigate('/signup')
                                }}
                            >Registrarse</button>
                        </div>
                    </>

            }


        </div>
    )
}

export default Menu
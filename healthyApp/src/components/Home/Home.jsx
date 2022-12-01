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
import { AiOutlineSearch } from "react-icons/ai";
import CategoryCard from '../CategoryCard/CategoryCard';
import { getAllProducts } from '../../store/slices/allProducts.slice';

const Home = () => {
    const dispatch = useDispatch()

    const menuActions = useSelector(state => state.menuActionsSlice)
    const profileActions = useSelector(state => state.profileActionsSlice)
    const productsActions = useSelector(state => state.productsActionsSlice)
    const productsFilterBySubcategory = useSelector(state => state.productsClickedSlice)
    const allProducts = useSelector(state => state.allProductsSlice)
    const categoryHome = useSelector(state => state.categoryHomeSlice)
    const categoryHomeActions = useSelector(state => state.categoryHomeActionsSlice)
    // console.log(categoryHomeActions)

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

    //Petición de todos los productos
    useEffect(() => {
        const allProducts = () => dispatch(getAllProducts())
        allProducts()
    }, [])

    //Función para mostrar productos aleatorios al dar categorias

    const [productsRandomToCategory, setProductsRandomToCategory] = useState()



    useEffect(() => {


        let max = Math.floor(allProducts.length);
        let first_number = Math.floor(Math.random() * (max - 0) + 0);
        let second_number = Math.floor(Math.random() * (max - first_number) + first_number);
        let filterProducts = []
        if (first_number > second_number) {
            filterProducts = allProducts.slice(second_number, first_number)
        }
        else if (first_number === second_number) {

            first_number = 1
            second_number = 5
            filterProducts = allProducts.slice(first_number, second_number)
        }
        else {
            filterProducts = allProducts.slice(first_number, second_number)
        }

        // console.log(filterProducts)

        setProductsRandomToCategory(filterProducts)

    }, [categoryHomeActions])


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
                            productsActions?.subcategoryIsClick.subcategoryName ?
                                <>
                                    <button className='back__button' onClick={backHome}>
                                        <BiArrowBack />
                                    </button>
                                    <div className='Home__content__products__filter'>
                                        {
                                            productsFilterBySubcategory?.map(product => (
                                                <div className='products__card' key={product?.id}>
                                                    <ProductCard
                                                        product={product}

                                                    />
                                                </div>
                                            ))
                                        }
                                    </div>


                                </>
                                :
                                <>
                                    <h2>Encontremos lo que necesitas !</h2>

                                    <form className='Home__search__bar'>
                                        <input type="text" placeholder='¿Qué está buscando?' />
                                        <button className='Home__search__bar__btn'>
                                            <AiOutlineSearch />
                                        </button>
                                    </form>

                                    <div className='Home__categories'>
                                        {
                                            categoryHome?.map(category => (
                                                <div className='category__card' key={category.id}>
                                                    <CategoryCard
                                                        name={category.categoryName}
                                                        key={category.id}
                                                    />
                                                </div>
                                            ))
                                        }
                                    </div>

                                    <div className='Home__products'>
                                        {
                                            categoryHomeActions.categoryHomeIsClick.toggle &&
                                                productsRandomToCategory?.length > 0 ?
                                                productsRandomToCategory?.map(product => (
                                                    <div className='products__card' key={product.id}>
                                                        <ProductCard
                                                            product={product}
                                                        />
                                                    </div>
                                                ))
                                                :
                                                allProducts?.map(product => (
                                                    <div className='products__card' key={product.id}>
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

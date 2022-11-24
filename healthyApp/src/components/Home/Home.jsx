import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import './Home.css'
import { AiOutlineSearch } from "react-icons/ai";
import CategoryCard from '../CategoryCard/CategoryCard';
import ProductCard from '../Products/ProductCard/ProductCard';
import RecommendationCard from '../Products/RecommendationCard/RecommendationCard';
import Footer from '../Footer/Footer';
import Menu from '../Menu/Menu';
import { setProduct } from '../../store/slices/product.slice';
import { setRecipe } from '../../store/slices/recipe.slice';
import { useDispatch, useSelector } from 'react-redux';
import { BiArrowBack } from "react-icons/bi";
import { useAuth } from '../../context/AuthContext';
import Profile from '../Profile/Profile';
import axios from 'axios'
import { getProducts } from '../../store/slices/productsClicked.slice';
import { getAllProducts } from '../../store/slices/allProducts.slice';
import { allProductsSlice } from '../../store/slices/allProducts.slice';

const Home = () => {

    const dispatch = useDispatch()

    const [menuIsShow, setMenuIsShow] = useState(false)
    //Estado global
    const productClick = useSelector(state => state.productSlice)
    const recipeClick = useSelector(state => state.recipeSlice)
    const productsClicked = useSelector(state => state.productsClickedSlice)
    const allProducts = useSelector(state => state.allProductsSlice)

    
    //Funcion para que al dar Click en Productos se muestre en el home
    const [productIsClick, setProductIsClick] = useState(false)
    const productToggle = () => {
        setFavProductsIsShow(false)
        setProductIsClick(!productIsClick)
        setRecipesIsClick(false)
        setProfileIsShow(false)
        setFavRecipesIsShow(false)
    }

    //Funcion para que al dar Click en recetas se muestre en el home
    const [recipesIsClick, setRecipesIsClick] = useState(false)
    const recipesToggle = () => {
        setFavProductsIsShow(false)
        setProductIsClick(false)
        setRecipesIsClick(!recipesIsClick)
        setProfileIsShow(false)
        setFavRecipesIsShow(false)
    }

    //Funcion para ir al home estando en: productos, recetas, favoritos
    const goBack = () => {
        const showProduct = () => dispatch(setProduct(''))
        const showRecipe = () => dispatch(setRecipe(''))
        showProduct()
        showRecipe()
        setProfileIsShow(false)
        setFavProductsIsShow(false)
        setFavRecipesIsShow(false)
    }

    
    //Funcion para mostrar perfil en el home
    const [profileIsShow, setProfileIsShow] = useState(false)

    const profileToggle = () => {
        setFavProductsIsShow(false)
        setProductIsClick(false)
        setRecipesIsClick(false)
        setProfileIsShow(!profileIsShow)
        setFavRecipesIsShow(false)
    }


    //Funcion para mostrar favoritos de productos

    const [favProductsIsShow, setFavProductsIsShow] = useState(false)

    const toggleFavsProducts = () => {
        setFavRecipesIsShow(false)
        setFavProductsIsShow(!favProductsIsShow)
        setProductIsClick(false)
        setRecipesIsClick(false)
        setProfileIsShow(false)
    }

    //Funcion para mostrar favoritos de recetas

    const [favRecipesIsShow, setFavRecipesIsShow] = useState(false)

    const toggleFavsRecipes = () => {
        setFavRecipesIsShow(!favRecipesIsShow)
        setFavProductsIsShow(false)
        setProductIsClick(false)
        setRecipesIsClick(false)
        setProfileIsShow(false)
    }



    //Petición de todos los productos
    useEffect(() => {
        const allProducts = () => dispatch(getAllProducts())
        allProducts()
    }, [])


    //Peticion productos específicos al dar click en el menu desplegable
    useEffect(() => {
        const productsClicked = () => dispatch(getProducts(productClick))
        productsClicked()
    }, [productClick])


    return (
        <div className='Home'>
            <Header
                setMenuIsShow={setMenuIsShow}
                menuIsShow={menuIsShow}
                setProductIsClick={setProductIsClick}
                setRecipesIsClick={setRecipesIsClick}
                setProfileIsShow={setProfileIsShow}
                profileIsShow={profileIsShow}
            />
            <Menu
                menuIsShow={menuIsShow}
                setMenuIsShow={setMenuIsShow}
                productToggle={productToggle}
                recipesToggle={recipesToggle}
                profileToggle={profileToggle}
                productIsClick={productIsClick}
                recipesIsClick={recipesIsClick}
            />
            {
                profileIsShow &&
                <Profile
                    toggleFavsProducts={toggleFavsProducts}
                    toggleFavsRecipes={toggleFavsRecipes}
                />

            }
            {
                favProductsIsShow &&
                <>
                    <button onClick={goBack}><BiArrowBack /></button>
                    <h2>Productos Favoritos</h2>
                </>
            }
            {
                favRecipesIsShow &&
                <>
                    <button onClick={goBack}><BiArrowBack /></button>
                    <h2>Recipes Favoritos</h2>
                </>
            }
            {
                (!profileIsShow && !favProductsIsShow && !favRecipesIsShow) &&

                <div className='Home__content'>
                    <h2>Encontremos lo que
                        necesitas!</h2>

                    <form action="search" className='Home__search__bar'>
                        <input type="text" placeholder='¿Qué está buscando?' />
                        <button className='Home__search__bar__btn'>
                            <AiOutlineSearch />
                        </button>
                    </form>

                    {
                        productClick &&
                        <>
                            <button onClick={goBack}><BiArrowBack /></button>
                            <h2>{productClick}</h2>
                            <div className='Home__products__filter'>
                                {
                                    productsClicked?.map(product => (
                                        <div className='products__card' key={product?.id}>
                                            <ProductCard
                                                product={product}

                                            />
                                        </div>
                                    ))
                                }
                            </div>
                        </>

                    }
                    {
                        recipeClick &&
                        <>
                            <button onClick={goBack}><BiArrowBack /></button>
                            <h2>{recipeClick}</h2>
                        </>

                    }

                    {
                        (productClick === '' && recipeClick === '') &&
                        <>
                            <div className='Home__categories'>
                                <div className='category__card'>
                                    <CategoryCard
                                        name={'Más populares'}
                                        state={'active'}
                                    />
                                </div>
                                <div className='category__card'>
                                    <CategoryCard
                                        name={'Ofertas'}
                                        state={'inactive'}
                                    />
                                </div>
                                <div className='category__card'>
                                    <CategoryCard
                                        name={'Novedades'}
                                        state={'inactive'}
                                    />
                                </div>
                                <div className='category__card'>
                                    <CategoryCard
                                        name={'Snacks'}
                                        state={'inactive'}
                                    />
                                </div>
                                <div className='category__card'>
                                    <CategoryCard
                                        name={'Bebidas'}
                                        state={'inactive'}
                                    />
                                </div>
                                <div className='category__card'>
                                    <CategoryCard
                                        name={'Ingredientes'}
                                        state={'inactive'}
                                    />
                                </div>
                            </div>

                            <div className='Home__products'>
                                {
                                    allProducts?.map(product => (
                                        <div className='products__card' key={product.id}>
                                            <ProductCard
                                                product={product}
                                            />
                                        </div>
                                    ))
                                }
                            </div>

                            <p className='title__recommendations'>Recomendados para ti</p>

                            <div className='Home__recommendations'>
                                <div className='recommendations__card'>
                                    <RecommendationCard />
                                </div>
                                <div className='recommendations__card'>
                                    <RecommendationCard />
                                </div>
                                <div className='recommendations__card'>
                                    <RecommendationCard />
                                </div>
                                <div className='recommendations__card'>
                                    <RecommendationCard />
                                </div>
                                <div className='recommendations__card'>
                                    <RecommendationCard />
                                </div>


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

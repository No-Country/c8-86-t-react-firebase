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
import { getProducts, getProductsByRecommendations } from '../../store/slices/productsClicked.slice';
import ProductCard from '../Products/ProductCard/ProductCard';
import { AiOutlineSearch } from "react-icons/ai";
import CategoryCard from '../CategoryCard/CategoryCard';
import { getAllProducts } from '../../store/slices/allProducts.slice';
import RecommendationCard from '../Products/RecommendationCard/RecommendationCard'
import { useNavigate } from 'react-router-dom'
import { setRecommendationActionsSlice } from '../../store/slices/recommendationActions.slice';
import { useForm } from 'react-hook-form'
import { getSearch, setSearchSlice } from '../../store/slices/search.slice'
import { setFavorites } from '../../store/slices/favorites.slice';
import { setFavoritesActionsSlice } from '../../store/slices/favoritesActions.slice';
import { useAuth } from '../../context/AuthContext';

const Home = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {user} = useAuth()

    const menuActions = useSelector(state => state.menuActionsSlice)
    const profileActions = useSelector(state => state.profileActionsSlice)
    const productsActions = useSelector(state => state.productsActionsSlice)
    const productsFilterBySubcategory = useSelector(state => state.productsClickedSlice)
    const allProducts = useSelector(state => state.allProductsSlice)
    const categoryHome = useSelector(state => state.categoryHomeSlice)
    const categoryHomeActions = useSelector(state => state.categoryHomeActionsSlice)
    const category = useSelector(state => state.categorySlice)
    const searchResult = useSelector(state => state.searchSlice)
    const favoritesActions = useSelector(state => state.favoritesActionsSlice)
    const favorites = useSelector(state=>state.favoritesSlice)
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


    const clearRecommendation = () => dispatch(setRecommendationActionsSlice(
        {
            recommendationIsClick: {
                toggle: false,
                categoryName: '',
            }
        }
    ))
    const clearSearch = () => dispatch(setSearchSlice(''))
    const [searchClick, setSearchClick] = useState(false)

    const hideFavorites = () => dispatch(setFavoritesActionsSlice({
        favoritesIsShow: false
    }))
    

    const backHome = () => {
        hideMenu()
        hideProfile()
        clearProducts()
        clearRecommendation()
        clearSearch()
        hideFavorites()
        setSearchClick(false)
    }

    const recommendation = useSelector(state => state.recommendationActionsSlice)
    //Traer productos específicos de acuerdo a categoria

    useEffect(() => {
        const productsClicked = () => dispatch(getProducts(productsActions?.subcategoryIsClick.subcategoryName))
        productsClicked()
    }, [productsActions?.subcategoryIsClick.subcategoryName])

    //Traer productos desde recomendaciones
    useEffect(() => {
        const productsClicked = () => dispatch(getProductsByRecommendations(recommendation?.recommendationIsClick.categoryName))
        productsClicked()
    }, [recommendation?.recommendationIsClick.categoryName])

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

        setProductsRandomToCategory(filterProducts)

    }, [categoryHomeActions])


    //Funcionalidad de búsqueda

    const { register, handleSubmit, reset } = useForm()
    const [errorInSearch, setErrorInSearch] = useState()


    const search = (data) => {
        const getSearchProducts = () => dispatch(getSearch(data?.search))
        getSearchProducts()
        reset({
            'search': ''
        })
        setSearchClick(true)
    }

    useEffect(() => {
        if (searchClick) {
            if (typeof (searchResult) != Array && searchResult.length === 0) {
                setErrorInSearch(true)
                setTimeout(() => {
                    setErrorInSearch(false)
                    setSearchClick(false)
                }, 1500);
            }

        }
    }, [searchResult])

    useEffect(() => {
        if(user?.uid===JSON.parse(localStorage.getItem('favorites'))?.userFavorites?.uid){
            const setFavoritesSlice = () => dispatch(setFavorites(JSON.parse(localStorage.getItem('favorites'))))
            setFavoritesSlice()
        }
        
    }, [localStorage.getItem('favorites'),user])



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
                            favoritesActions?.favoritesIsShow ?
                                <>
                                    <button className='back__button' onClick={backHome}>
                                        <BiArrowBack />
                                    </button>

                                    <div className='Home__content__products__filter'>
                                            <div className='Home__content_products__filter__header'>
                                                <h2>Favoritos</h2>
                                            </div>
                                            <div className='Home__content_products__filter__products'>
                                                {
                                                    favorites?.favoritesArray.length === 0 &&
                                                    <div className='nofavs'>
                                                        <h4>No tienes productos en favoritos</h4>
                                                    </div>
                                                }
                                                {
                                                    favorites?.favoritesArray?.map((favorite,index) => (
                                                        <div className='products__card' key={index} onClick={() => navigate(`/product/${favorite?.id}`)}>
                                                            <ProductCard
                                                                product={favorite.detailProduct}
                                                            />
                                                        </div>
                                                    ))
                                                }
                                            </div>

                                        </div>
                                </>
                                :
                                productsActions?.subcategoryIsClick.subcategoryName ?
                                    <>
                                        <button className='back__button' onClick={backHome}>
                                            <BiArrowBack />
                                        </button>
                                        <div className='Home__content__products__filter'>
                                            <div className='Home__content_products__filter__header'>
                                                <h2>{productsActions?.categoryIsClick.categoryName}</h2>
                                                <h6>{productsActions?.subcategoryIsClick.subcategoryName}</h6>
                                            </div>
                                            <div className='Home__content_products__filter__products'>
                                                {
                                                    productsFilterBySubcategory?.map(product => (
                                                        <div className='products__card' key={product?.id} onClick={() => navigate(`/product/${product.id}`)}>
                                                            <ProductCard
                                                                product={product}

                                                            />
                                                        </div>
                                                    ))
                                                }
                                            </div>

                                        </div>


                                    </>
                                    :
                                    recommendation?.recommendationIsClick.categoryName ?
                                        <>
                                            <button className='back__button' onClick={backHome}>
                                                <BiArrowBack />
                                            </button>
                                            <div className='Home__content__products__filter'>
                                                <div className='Home__content_products__filter__header'>
                                                    <h2>{recommendation?.recommendationIsClick.categoryName}</h2>
                                                </div>
                                                <div className='Home__content_products__filter__products'>
                                                    {
                                                        productsFilterBySubcategory?.map(subcategory => (
                                                            subcategory?.map(product => (
                                                                <div className='products__card' key={product?.id} onClick={() => navigate(`/product/${product.id}`)}>
                                                                    <ProductCard
                                                                        product={product}

                                                                    />
                                                                </div>
                                                            ))
                                                        ))

                                                    }
                                                </div>

                                            </div>
                                        </>
                                        :
                                        <>
                                            <h2 className='w-100 ms-5'>Encontremos lo que necesitas !</h2>

                                            <form className='Home__search__bar' onSubmit={handleSubmit(search)}>
                                                <input type="text" placeholder='¿Qué está buscando?' {...register('search')} />
                                                <button className='Home__search__bar__btn'>
                                                    <AiOutlineSearch />
                                                </button>
                                            </form>
                                            {
                                                errorInSearch &&
                                                <div>
                                                    No se encontrarón resultados
                                                </div>
                                            }
                                            {
                                                (searchResult.length > 0 && searchResult != 'Not found') ?
                                                    <>
                                                        <button className='back__button' onClick={backHome} style={{ top: '27vh' }}>
                                                            <BiArrowBack />
                                                        </button>
                                                        <div className='Home__content__products__filter'>
                                                            <div className='Home__content_products__filter__products'>
                                                                {
                                                                    searchResult?.map((product, index) => (
                                                                        <div className='products__card' key={product.id} onClick={() => navigate(`/product/${product.id}`)} >
                                                                            <ProductCard
                                                                                product={product}
                                                                            />

                                                                        </div>
                                                                    ))
                                                                }
                                                            </div>

                                                        </div>

                                                    </>
                                                    :
                                                    <>
                                                        <div className='Home__categories'>
                                                            {
                                                                categoryHome?.map((category, index) => (
                                                                    <div className='category__card' key={index}>
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
                                                                    productsRandomToCategory?.map((product, index) => (
                                                                        <div className='products__card' key={product.id} onClick={() => navigate(`/product/${product.id}`)} id='slider'>

                                                                            <ProductCard
                                                                                product={product}
                                                                                category={categoryHomeActions.categoryHomeIsClick.categoryName}
                                                                            />

                                                                        </div>
                                                                    ))
                                                                    :
                                                                    allProducts?.map((product, index) => (
                                                                        <div className='products__card' key={product.id} onClick={() => navigate(`/product/${product.id}`)} id='slider'>
                                                                            <ProductCard
                                                                                product={product}
                                                                            />
                                                                        </div>
                                                                    ))
                                                            }

                                                        </div>
                                                        <br />
                                                        <p className='title__recommendations'>Recomendados para ti</p>
                                                        <div className='Home__recommendations'>
                                                            {
                                                                category &&
                                                                category?.map((category, index) => (
                                                                    <div className='recommendations__card' key={index}>
                                                                        <RecommendationCard
                                                                            category={category}
                                                                        />
                                                                    </div>
                                                                ))
                                                            }
                                                        </div>
                                                    </>
                                            }


                                        </>


                        }


                    </div>
            }

            <Footer />

        </div>
    )
}

export default Home

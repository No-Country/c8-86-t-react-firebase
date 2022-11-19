import React from 'react'
import Header from '../Header/Header'
import './Home.css'
import { AiOutlineSearch } from "react-icons/ai";
import CategoryCard from '../CategoryCard/CategoryCard';
import ProductCard from '../Products/ProductCard/ProductCard';
import RecommendationCard from '../Products/RecommendationCard/RecommendationCard';
import Footer from '../Footer/Footer';

const Home = () => {

    return (
        <div className='Home'>
            <Header />
            <div className='Home__content'>
                <h2>Encontremos lo que
                    necesitas!</h2>

                <form action="search" className='Home__search__bar'>
                    <input type="text" placeholder='¿Qué está buscando?' />
                    <button className='Home__search__bar__btn'>
                        <AiOutlineSearch />
                    </button>
                </form>

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
                    <div className='products__card'>
                        <ProductCard />
                    </div>
                    <div className='products__card'>
                        <ProductCard />
                    </div>
                    <div className='products__card'>
                        <ProductCard />
                    </div>
                    <div className='products__card'>
                        <ProductCard />
                    </div>
                    <div className='products__card'>
                        <ProductCard />
                    </div>
                    <div className='products__card'>
                        <ProductCard />
                    </div>

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

            </div>

            <Footer/>

        </div>
    )
}

export default Home

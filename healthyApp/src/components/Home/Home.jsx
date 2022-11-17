import React from 'react'
import Header from '../Header/Header'
import './Home.css'
import { AiOutlineSearch } from "react-icons/ai";
import CategoryCard from '../CategoryCard/CategoryCard';

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
                    <CategoryCard
                        name={'Más populares'}
                        state={'active'}
                    />
                    <CategoryCard
                        name={'Ofertas'}
                        state={'inactive'}
                    />
                    <CategoryCard
                        name={'Novedades'}
                        state={'inactive'}
                    />
                    
                </div>


            </div>

        </div>
    )
}

export default Home

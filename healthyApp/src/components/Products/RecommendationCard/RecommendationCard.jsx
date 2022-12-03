import React, { useEffect, useState } from 'react'
import './RecommendationCard.css'
import Arroz from '../../../assets/recommendations/Arroz.png'
import Aceite from '../../../assets/recommendations/aceite.png'
import Conservas from '../../../assets/recommendations/Conservas.png'
import Dips from '../../../assets/recommendations/Dips.png'
import Dulce from '../../../assets/recommendations/Dulce.png'

const recommendations = [
    {
        img: Arroz,
        categoryName: 'Arroz y legumbres'
    },
    {
        img: Aceite,
        categoryName: 'Aceites y Vinagres'
    },
    {
        img: Conservas,
        categoryName: 'Conservas'
    },
    {
        img: Dips,
        categoryName: 'Aderezos'
    },
    {
        img: Dulce,
        categoryName: 'Dulces y Mantequillas'
    },

]


const RecommendationCard = ({category}) => {

    const [filter, setFilter] = useState([])
    useEffect(() => {
        setFilter(recommendations.filter(recommendation => recommendation.categoryName ===category.category))
    }, [category])
    
    return (
        <div className='RecommendationCard'>
            <div className='RecommendationCard__img' >
                <img src={filter[0]?.img} alt={filter[0]?.categoryName} className={filter[0]?.categoryName}/>
            </div>
            
        </div>
    )
}

export default RecommendationCard

import React, { useEffect, useState } from 'react'
import './RecommendationCard.css'
import Arroz from '../../../assets/recommendations/Arroz.png'
import Aceite from '../../../assets/recommendations/aceite.png'
import Conservas from '../../../assets/recommendations/Conservas.png'
import Dips from '../../../assets/recommendations/Dips.png'
import Dulce from '../../../assets/recommendations/Dulce.png'
import Vector from '../../../assets/recommendations/Vector.png'
import {useDispatch, useSelector } from 'react-redux'
import { setRecommendationActionsSlice } from '../../../store/slices/recommendationActions.slice'

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

    
    

    const dispatch = useDispatch()

    const [filter, setFilter] = useState([])
    useEffect(() => {
        setFilter(recommendations.filter(recommendation => recommendation.categoryName ===category.category))
    }, [category])
    

    const setRecommendation = (category) => dispatch(setRecommendationActionsSlice(
        {
            recommendationIsClick: {
                toggle: true,
                categoryName: category,
            }
        }
    ))

    return (
        <div className='RecommendationCard' onClick={()=>setRecommendation(category.category)}>
            <div className='RecommendationCard__img' >
                <img src={filter[0]?.img} alt={filter[0]?.categoryName} className={filter[0]?.categoryName}/>
            </div>
            <div className='RecommendationCard__vector'>
                <img src={Vector} alt="background-vector" />
            </div>
            <span className={`span-${filter[0]?.categoryName}`}>{category.category}</span>
        </div>
    )
}

export default RecommendationCard

import React from 'react'
import './RecommendationCard.css'
import { FaCarrot } from "react-icons/fa";

const RecommendationCard = () => {
    return (
        <div className='RecommendationCard'>
            <div className='RecommendationCard__header'>
                <FaCarrot />
            </div>
            <div className='RecommendationCard__description'>
                <FaCarrot />
            </div>
        </div>
    )
}

export default RecommendationCard

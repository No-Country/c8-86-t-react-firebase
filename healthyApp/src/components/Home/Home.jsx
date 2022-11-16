import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate =useNavigate()

    const cartOpen = () => {
        navigate('/cart')
    }
    const profileOpen = () =>{
        navigate('/profile')
    }

    return (
        <div>
            Home
            <button onClick={cartOpen}>
                Go to Cart
            </button>
            <button onClick={profileOpen}>
                Profile
            </button>
        </div>
    )
}

export default Home

import React from 'react'
import './Footer.css'
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";

const Footer = () => {
    return (
        <div className='Footer'>
            <h4>Siguenos en nuestras redes</h4>
            <div className='Footer__actions'>
                <button>
                    <AiOutlineFacebook />
                </button>
                <button>
                    <AiOutlineInstagram />
                </button>
                <button>
                    <AiOutlineWhatsApp />
                </button>
            </div>

        </div>
    )
}

export default Footer

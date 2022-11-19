import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './MenuHeader.css'

const MenuHeader = ({name,setMenuIsShow,productToggle,recipesToggle}) => {

    const navigate = useNavigate()

    const goTo = (name) =>{
        if(name==='Iniciar Sesión'){
            navigate('/login')
        }
        else if(name==='Registrarse'){
            navigate('/signup')
        }
        else if(name==='Perfil'){
            navigate('/profile')
        }
        else if(name==='Productos'){
            productToggle()
        }
        else if(name==='Recetas'){
            recipesToggle()
        }
    }



    return (
        <button className='MenuHeader' onClick={()=>goTo(name)}>
            <span>{name}</span>
        </button>
    )
}

export default MenuHeader

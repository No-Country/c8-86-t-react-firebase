import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()

    const loginSubmit = () => {
        localStorage.setItem('token','true')
        navigate('/')
    } 

    return (
        <div>
            <button onClick={loginSubmit}>
                Login
            </button>
        </div>
    )
}

export default Login

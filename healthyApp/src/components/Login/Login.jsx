import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import '../Login/Login.css'

const Login = () => {
    const navigate = useNavigate()

    const { handleSubmit, register, reset } = useForm()

    const loginSubmit = () => {
        localStorage.setItem('token', 'true')
        navigate('/')
    }

    return (
        <div className='Login'>
            <form className='Login__form'>
                <div className='Login__form__simple'>
                    <div className='Login__form__simple__input'>
                        <label htmlFor="email" className=''>Email</label>
                        <input type="text" className='' placeholder='email@company.com'/>
                    </div>
                    <div className='Login__form__simple__input'>
                        <label htmlFor="password" className=''>Password</label>
                        <input type="password" className='' placeholder='* * * * * *'/>
                    </div>
                    <button onClick={loginSubmit} className='Login__form__simple__btn'>
                        Login
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Login

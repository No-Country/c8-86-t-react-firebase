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
                    <div className='Login__form__simple__div__btn'>
                    <button onClick={loginSubmit} className='Login__form__simple__btn'>
                        Login
                    </button>
                    <span><button id='btnPassword'>Forget password? </button></span>
                    </div>
                </div>
            </form>
            <div>
            <div className='container_register'>
                <p>Don't have an Account</p>
                <button onClick={() => navigate('/signup')}>Register</button>
            </div>

            <div className='singln'><a href="#"> Google Singln</a></div> </div>
        </div>
    )
}

export default Login

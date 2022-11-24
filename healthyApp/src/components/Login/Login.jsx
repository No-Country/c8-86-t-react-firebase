import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
//import { useForm } from 'react-hook-form'
import { useAuth } from '../../context/AuthContext'
import { Alert } from '../Alert/Alert'

import '../Login/Login.css'
import User from '../../assets/login/user.svg'
import Google from '../../assets/google-logo.png'
import Arrow from '../../assets/arrow-back.svg'

import Form from 'react-bootstrap/Form'
import Model from './Model/Model'

const Login = () => {
    const navigate = useNavigate()
    const [show, setShow] = useState(false)
    const [user, setUser] = useState({ email: '', password: '', })
    const { login, loginWithGoogle, resetPassword, logOut } = useAuth()
    const [error, setError] = useState()

    const handleChange = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        try {
            await login(user.email, user.password)
            { <Model/>}
            navigate("/")
        } catch (error) { setError(error.message) }
    }

    const handleGoogleSignIn = async () => {
        
        try {
            await loginWithGoogle()
            navigate('/')
        } catch (error) { setError(error.message) }
    }

    const handleResetPassword = async (e) => {
        e.preventDefault()
        if (!user.email) return setError('Please enter your email')
        try {
            await resetPassword(user.email)
            setError('we sent you an email with a link to reset your password')
        } catch (error) { setError(error.message) }
    }

    return (
        <>
            <header className='header-menu d-flex justify-content-start align-items-center'>
                <div>
                    <button className='border border-0' onClick={() => navigate('/')}> <img src={Arrow} alt="arrow back"/> </button>
                </div>
            </header>
            <Form className='p-3' onSubmit={handleSubmit}>
                {error && <Alert message={error} />}
                <div className='header_Form'>
                    <h1 className='text-start'> Bienvenido de nuevo! </h1>
                    <div className='div_img__user m-auto'>
                        <img src={User} alt='svg_user' />
                    </div>
                </div>

                <Form.Group className='mt-3' controlId='formBasicEmail'>
                    <Form.Label className='form_label'> Email </Form.Label>
                    <Form.Control className='input' type='email' placeholder='Input Text' name='email' required  onChange={handleChange} />
                </Form.Group>

                <Form.Group className='mt-3' controlId='formBasicPassword'>
                    <Form.Label className='form_label'> Contraseña </Form.Label>
                    <div className='d-flex align-items-center show' onClick={() => setShow(!show)}>
                        <Form.Control className='input' type={show ? "text" : "password"} name='password' placeholder='* * * *' required onChange={handleChange} />
                        {show ? (
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' height={'1.5rem'}>
                                <path d='M12 15a3 3 0 100-6 3 3 0 000 6z' />
                                <path fillRule='evenodd' d='M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z' clipRule='evenodd'/>
                            </svg>
                        ) : (
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' height={'1.5rem'}>
                                <path d='M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z' />
                                <path d='M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z' />
                                <path d='M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z' />
                            </svg>
                        )}
                    </div>
                </Form.Group>

                <br />
                <a id='forget' href='#' onClick={handleResetPassword}> ¿Olvidaste tu contraseña? </a>
                <br />
                <br />
                <button className='btn-Google d-flex align-items-center justify-content-center m-auto '>
                    <img src={Google} alt='Logo Google'/>
                    Iniciar sesión con Google
                </button>
                <input className='btn mt-4' type='submit' value='Ingresar' />
            </Form>
            <p> No tiene cuenta? <Link to='/signup'>Registrese</Link> </p>
            <button onClick={handleGoogleSignIn}> Google SignIn</button>
            <Model />
        </>
    )
}

export default Login
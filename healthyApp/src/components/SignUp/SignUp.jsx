import React from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const navigate = useNavigate()

    return (
        <div className='register'>
            <form className='register__form'>
                <div className='Login__form__simple'>
                    <div className='register__form__simple__input'>
                        <label htmlFor="email" className=''>Email</label>
                        <input type="text" className='' placeholder='email@company.com'/>
                    </div>
                    <div className='Login__form__simple__input'>
                        <label htmlFor="password" className=''>Password</label>
                        <input type="password" className='' placeholder='* * * * * *'/>
                    </div>
                    <button className='register__form__simple__btn'>
                        Register
                    </button>
                </div>
            </form>           

            <div className='containerLogin'>
                <p>Already have an Account?</p>
                <button onClick={() => navigate('/login')}>Login</button>
            </div>
        </div>
    )
}

export default SignUp

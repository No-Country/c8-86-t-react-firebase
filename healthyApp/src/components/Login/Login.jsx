import React  from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import '../Login/Login.css'
import User from '../../assets/login/user.svg'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = () => {
    const navigate = useNavigate()
    const { handleSubmit } = useForm()

    const submit = () => {
        localStorage.setItem('token', 'true')
        navigate('/')
    }

    return ( 
        <Form  className='p-3' onSubmit={handleSubmit(submit)}>
            <div className='header_Form'>
                <h1 className='text-start'> Bienvenido de nuevo! </h1>
                <div className='div_img__user m-auto'>
                    <img src={User} alt="svg_user" />
                </div>
            </div>

            <Form.Group className='mt-3' controlId='formBasicEmail'>
                <Form.Label className='form_label'> Email </Form.Label>
                <Form.Control className='input' type='email' placeholder='Input Text'/>
            </Form.Group>

            <Form.Group className='mt-3' controlId='formBasicPassword'>
                <Form.Label className='form_label'> Contraseña </Form.Label>
                <Form.Control className='input' type='text' placeholder='* * * *'/>
            </Form.Group>

            <Button className='btn mt-4' type='submit'> Ingresar </Button>
        </Form>
    )
}

export default Login
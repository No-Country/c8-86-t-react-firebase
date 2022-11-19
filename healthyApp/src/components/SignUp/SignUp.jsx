import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Form from 'react-bootstrap/Form';

import '../SignUp/singUp.css'
import User from '../../assets/login/user.svg'

const SignUp = () => {
    const navigate = useNavigate()
    
    const { handleSubmit, register } = useForm()

    const submit = (data) => {
        navigate('/login')
        console.log(data);
    }

    return (
        <>
        <Form  className='p-3' onSubmit={handleSubmit(submit)}>
            <div className='header_Form'>
                <h1 className='text-start'> Bienvenido! </h1>
                <div className='div_img__user m-auto'>
                    <img src={User} alt="svg_user" />
                </div>
            </div>

            <Form.Group className='mt-3' controlId='formBasicName'>
                <Form.Label className='form_label'> Nombre </Form.Label>
                <Form.Control className='input' type='text' placeholder='Input Text' {...register('name')}/>
            </Form.Group>

            <Form.Group className='mt-3' controlId='formBasicLastName'>
                <Form.Label className='form_label'> Apellido </Form.Label>
                <Form.Control className='input' type='text' placeholder='Input Text' {...register('last_name')}/>
            </Form.Group>

            <Form.Group className='mt-3' controlId='formBasicEmail'>
                <Form.Label className='form_label'> Mail </Form.Label>
                <Form.Control className='input' type='mail' placeholder='Input Text' {...register('mail')}/>
            </Form.Group>

            <Form.Group className='mt-3' controlId='formBasicRegisterPassword'>
                <Form.Label className='form_label'> Contraseña </Form.Label>
                <Form.Control className='input' type='password' placeholder='* * * *' {...register('password')}/>
            </Form.Group>

            <Form.Group className='mt-3' controlId='formBasicVerifyPassword'>
                <Form.Label className='form_label'> Verifique Contraseña </Form.Label>
                <Form.Control className='input' type='password' placeholder='* * * *' {...register('verifyPss')}/>
            </Form.Group>

            <input className='btn mt-4' type='submit' value="Registrate"/>
        </Form>
        </>
    )
}

export default SignUp



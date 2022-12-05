import React from 'react'
import { useNavigate } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Arrow from '../../../assets/arrow-back.svg'
import User from '../../../assets/login/user.svg'

import '../../Login/Login.css'
import './EditProfile.css'

const EditProfile = () => {
    const navigate = useNavigate()

    const backHome = () => navigate('/')

    const handleSubmit = () => console.log("5")

    return (
        <>
            <header className='header-menu d-flex justify-content-start align-items-center'>
                <div className='grid'>
                    <button className='border border-0' onClick={backHome}> 
                        <img src={Arrow} alt="arrow back" />
                    </button>
                </div>
                <div className='saveChange'>
                <button>Guardar cambios</button>

                </div>
            </header>
            <h3 className='ms-3 mt-3'>Editar el perfil</h3>
            <Container>
                <div>
                    <div className='header_Svg'>
                        <img src={User} alt='svg_user' />
                        <div className='btnChangePhoto'>
                            <button>+</button>
                        </div>
                    </div>

                    <Form className='p-3' onSubmit={handleSubmit}>
                        <Form.Group className='mt-3 form-general' controlId='formBasicEmail'>
                            <Form.Control className='' type='text' placeholder='Carlos Bravo' name='email' required />
                            <Form.Label className='ms-3'>Email </Form.Label>

                            <Form.Control className='mt-2' type='text' placeholder='3584-284205' name='email' required />
                            <Form.Label className='ms-3'>Telefóno </Form.Label>

                            <Form.Control className='mt-2' type='text' placeholder='Guatemala' name='email' required />
                            <Form.Label className='ms-3'>Cuidad</Form.Label>
                        </Form.Group>
                    </Form>
                </div>

            </Container>

        </>
    )
}


export default EditProfile
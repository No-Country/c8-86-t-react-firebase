import React, { useEffect, useState } from 'react'
import { useFormAction, useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Arrow from '../../../assets/arrow-back.svg'
import User from '../../../assets/login/user.svg'
import { useForm } from 'react-hook-form'
import { useAuth } from '../../../context/AuthContext'

import '../../Login/Login.css'
import './EditProfile.css'
import Modal from '../Modal/Modal'

const EditProfile = () => {
    const navigate = useNavigate()
    const { user } = useAuth()

    const backHome = () => navigate('/')

    const { handleSubmit, reset, register } = useForm()
    const [wrongEmail, setWrongEmail] = useState(false)
    const [profileUpdated, setProfileUpdated] = useState(false)
    const [initialEmail, setInitialEmail] = useState('example@mail.com')
    const [initialPhone, setInitialPhone] = useState('322456789')
    const [initialCity, setInitialCity] = useState('Buenos Aires')

    useEffect(() => {
        if (JSON.parse(localStorage.getItem('updateProfile'))) {
            let saved = JSON.parse(localStorage.getItem('updateProfile'))
            if (saved?.user?.uid === user?.uid) {
                setInitialEmail(saved.updateData.email)
                setInitialPhone(saved.updateData.phone)
                setInitialCity(saved.updateData.city)
            }
        }
    }, [localStorage.getItem('updateProfile'),user])

    const submit = (data) => {
        // console.log(data)
        //Validación correo electronico
        let emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        if (emailRegex.test(data.email)) {
            if (JSON.parse(localStorage.getItem('updateProfile'))) {
                let saved = JSON.parse(localStorage.getItem('updateProfile'))
                if (saved.user.uid === user.uid) {
                    saved.updateData.email = data.email
                    saved.updateData.phone = data.phone
                    saved.updateData.city = data.city
                    localStorage.setItem('updateProfile', JSON.stringify(saved))
                    setProfileUpdated(true)
                    setTimeout(() => {
                        setProfileUpdated(false)
                    }, 2500);
                }
                else {
                    let updateProfile = {
                        user: user,
                        updateData: {
                            email: data.email,
                            phone: data.phone,
                            city: data.city
                        }
                    }
                    localStorage.setItem('updateProfile', JSON.stringify(updateProfile))
                    setProfileUpdated(true)
                    setTimeout(() => {
                        setProfileUpdated(false)
                    }, 2500);
                }
            }
            else {
                let updateProfile = {
                    user: user,
                    updateData: {
                        email: data.email,
                        phone: data.phone,
                        city: data.city
                    }
                }
                localStorage.setItem('updateProfile', JSON.stringify(updateProfile))
                setProfileUpdated(true)
                setTimeout(() => {
                    setProfileUpdated(false)
                }, 2500);
            }
        }
        else {
            setWrongEmail(true)
            setTimeout(() => {
                setWrongEmail(false)
            }, 2500);
        }
    }

    return (
        <>
            
            <header className='header-menu d-flex justify-content-start align-items-center'>
                <div className='grid'>
                    <button className='border border-0' onClick={backHome}>
                        <img src={Arrow} alt="arrow back" />
                    </button>
                </div>

            </header>
            {
                profileUpdated &&
                    <Modal
                        profileUpdated={profileUpdated}
                    />
            }
            <h3 className='ms-3 mt-3'>Editar el perfil</h3>
            <Container>
                <div>
                    <div className='header_Svg'>
                        <img src={User} alt='svg_user' />
                        {/* <div className='btnChangePhoto'>
                            <button>+</button>
                        </div> */}
                    </div>

                    <Form className='p-3' onSubmit={handleSubmit(submit)}>
                        <Form.Group className='mt-3 form-general' controlId='formBasicEmail'>
                            <Form.Control className='' type='text' placeholder={`${initialEmail}`}  name='email' required {...register('email')} />
                            <Form.Label className='ms-3'>Email </Form.Label>
                            {
                                wrongEmail &&
                                    <div className='errorEmail p-2'>
                                        <span>Email incorrecto, intentelo de nuevo</span>
                                    </div>
                            }

                            <Form.Control className='mt-2' type='number' placeholder={`${initialPhone}`}  name='cellphone' required {...register('phone')} />
                            <Form.Label className='ms-3'>Telefóno </Form.Label>

                            <Form.Control className='mt-2' type='text' placeholder={`${initialCity}`}  name='city' required {...register('city')} />
                            <Form.Label className='ms-3'>Cuidad</Form.Label>
                        </Form.Group>
                        <div className='saveChange'>
                            <button>Guardar cambios</button>
                        </div>
                    </Form>
                </div>

            </Container>

        </>
    )
}


export default EditProfile
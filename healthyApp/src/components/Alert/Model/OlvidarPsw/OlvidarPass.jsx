import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useAuth } from '../../../../context/AuthContext'

import '../CerrarSesion/cerrarSesion.css'
import '../../../Login/Login.css'

const OlvidarPass = (setError, user) => {
    const [show, setShow] = useState(false)
    const { resetPassword } = useAuth()

    const handleResetPassword = async (e) => {
        e.preventDefault()
        setShow(false)
        if (!user.email) return setError('Please enter your email')
        try {
            await resetPassword(user.email)
            setError('we sent you an email with a link to reset your password')
        } catch (error) { setError(error.message) }
    }

    const handleClose = () => setShow(false)

    useEffect(() => { setShow(true) }, [])

    return (
        <>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton className='border border-0'>
                <Modal.Title>Ingresa tu mail</Modal.Title>
            </Modal.Header>
            <Modal.Body className='p-4'>
                <Form>
                    <Form.Group className='mb-3 fw-normal' controlId='exampleForm.ControlInput1'>
                    Si olvidaste tu contraseña, ingresa tu mail para recibir un código de recuperación.
                    <br /><br />
                        <Form.Label className='form_label colorBg fw-normal'>Mail</Form.Label>
                        <Form.Control className='input fw-normal' placeholder='input text' type='email'/>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer className='border border-0'>
                <Button className='buttonsModals' onClick={handleClose}> Cancelar </Button>
                <Button className='buttonsModals' onClick={handleResetPassword}> Enviar </Button>
            </Modal.Footer>
        </Modal >
    </>
    )
}


export default OlvidarPass
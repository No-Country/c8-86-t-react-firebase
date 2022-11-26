import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../../context/AuthContext'

import './cerrarSesion.css'

const CerrarSesion = () => {
    const navigate = useNavigate()
    const [show, setShow] = useState(false)
    const { logOut } = useAuth()

    const handleClose = () => {
        navigate('/login')
        setShow(false)
    }
    const handleShow = () => setShow(true)

    const handleLogOut = async () => { 
        handleClose()
        logOut()
        navigate('/')
    }

    return (
        <>
            <button  variant="primary" onClick={handleShow}> Cerrar Sesión </button>

            <Modal show={show} onHide={handleClose} className='rounded p-5'>
                <Modal.Header className='border border-0'>
                    <Modal.Title>¿Está seguro de que desea cerrar sesión?</Modal.Title>
                </Modal.Header>
                    <Modal.Body className='ms-2'>
                        Si hace click en “cerrar sesión” , se cerrará su sesión pero los productos que 
                        haya comprado se mantendran en el carrito de compras
                    </Modal.Body>
                <Modal.Footer className='border border-0'>
                    <Button onClick={handleClose} className='x'> Cancelar </Button>
                    <Button onClick={handleLogOut} className='x w-50'> Cerrar Sesión</Button>
                </Modal.Footer>
            </Modal>
        </> 
    )
}


export default CerrarSesion
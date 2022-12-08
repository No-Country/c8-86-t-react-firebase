import React from 'react'
import './Modal.css'

const Modal = ({profileUpdated,checkout}) => {
    return (
        <div className='Modal p-2'>
            {
                profileUpdated &&
                    <span>Los cambios se realizaron con exito</span>
            }
            {
                checkout &&
                    <span>Gracias por su compra</span>
            }
        </div>
    )
}

export default Modal

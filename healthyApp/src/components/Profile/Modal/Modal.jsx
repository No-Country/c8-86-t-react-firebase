import React from 'react'
import './Modal.css'

const Modal = ({profileUpdated}) => {
    return (
        <div className='Modal p-2'>
            {
                profileUpdated &&
                    <span>Los cambios se realizaron con exito</span>
            }
        </div>
    )
}

export default Modal

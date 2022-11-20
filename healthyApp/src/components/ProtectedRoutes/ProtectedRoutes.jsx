import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {

    if(localStorage.getItem('token')==='true'){
        return <Outlet />
    }
    else{
        return <Navigate to='/login'/>
    }
    
}

export default ProtectedRoutes

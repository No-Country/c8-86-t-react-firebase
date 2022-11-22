import React from 'react'
import { Navigate, Outlet } from 'react-router';
import { useAuth } from '../../context/AuthContext'

const ProtectedRoutes = () => {
    const {user,loading} = useAuth();

    if(user){
        return <Outlet/>
    }
    else if(!user){
        return <Navigate to='/login' />
    }
    else if(loading){
        return <h2>Loading</h2>
    }
}

export default ProtectedRoutes


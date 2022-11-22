import React from 'react'
import {useAuth} from '../../context/AuthContext'
import Header from '../../components/Header/Header'

const Profile = () => {

    const {user,loading} = useAuth()
    console.log(user)

    return (
        <div className='Profile'>
            <h4>{user.email}</h4>
            <div className=''>

            </div>
        </div>
    )
}

export default Profile

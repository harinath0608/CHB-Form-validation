import React from 'react'
import { Navigate } from 'react-router-dom'

const Login = () => {

    const isLoggin = true

    if (isLoggin) {

        return <Navigate to="/dashboard" / >

    }

            return (
                <h2> Please Login </h2>
            )
    }

    export default Login

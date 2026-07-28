import React from 'react'
import { useNavigate } from 'react-router-dom'


const UseNavigate = () => {

    const navigate = useNavigate()

    return (
        
        <div>

            <button onClick={() => navigate("/products")} > click </button>

        </div>
    )
}

export default UseNavigate

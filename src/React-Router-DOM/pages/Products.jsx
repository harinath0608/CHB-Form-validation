import React from 'react'
import products from '../products'
import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <div>
      Welcome to Products Page 

    {
        products.map((item)=>(
            
            <div key={item.id}>

                <h3> {item.name} </h3>

                <p> {item.price} </p>

                <Link to={`/products/${item.id}`}> View Details  </Link>

            </div>
        ))
    }

    </div>
  )
}

export default Products

import React from 'react'
import { useParams } from 'react-router-dom'
import products from '../products';

const ProductDetail = () => {

    const { id } = useParams();

    const product = products.find(
        (item) => item.id === Number(id)
    );

    return (

        <>
        
        <h2> Product name  : {product.name} </h2>

        <p>  Product Price : {product.price} </p>

        <p> Product ID : {product.id} </p>

        </>
    )
}

export default ProductDetail

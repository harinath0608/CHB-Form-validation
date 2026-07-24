import React, { useEffect } from 'react'

const FetchAPI = () => {


    // useEffect(()=> {

    //     fetch("https://fakestoreapi.com/products")
    //     .then(response => response.json())
    //     .then(data => console.log(data));

    // }, [])

    useEffect(() => {
        
        const getProducts = async () => {
            const response = await fetch(
                "https://fakestoreapi.com/products"
            );
            const data = await response.json();
            console.log(data);
        };

        getProducts()

    })


    return (
        <div>
            <h1> Hello Useffect </h1>
        </div>
    )
}

export default FetchAPI

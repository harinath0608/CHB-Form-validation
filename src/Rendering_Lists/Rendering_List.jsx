import React from 'react'

const Rendering_List = () => {


    // const products = [20000, 55000, 90, 2500]

    // const mobiles = [
    //     { id: 1, brand: "Nokia", price: 25000, Model: "Android" },
    //     { id: 2, brand: "Samsung", price: 35000, Model: "Android" },
    //     { id: 3, brand: "RealMe", price: 20000, Model: "Android" },
    //     { id: 4, brand: "Honor", price: 15000, Model: "Android" },
    // ]

    // const total = mobiles.reduce(
    //     (sum, item) => sum + item.price, 0 
    // )

    // console.log(total);


    // const SortedProducts = [...mobiles].sort(
    //     (a, b) => a.price - b.price
    // )

    // const employees = [
    //     { id: 1, name: "Joseph", role: "Developer", Techstack: "React,Python" },
    //     { id: 2, name: "Dileep", role: "Architect", Techstack: "React,Java" }
    // ]




    // const students = [
    //     { id: 1, name: "Harris", Fav_Subject: "Maths" },
    //     { id: 2, name: "Aadi", Fav_Subject: "Science" },
    //     { id: 2, name: "Ram", Fav_Subject: "Science" },
    //     { id: 3, name: "Sita", Fav_Subject: "Biology" }

    // ]

    // const specific_one = students.find(
    //     student => student.id === 2
    // )

    // const expensiveProducts = mobiles.filter(
    //     product => product.price > 20000
    // )

    const loggedIn = false


    return (

        <div>



            { loggedIn ? <h2>Welcome</h2> : <h2>Please Login</h2> }



        </div>
    )
}

export default Rendering_List

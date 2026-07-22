import React, { useState } from 'react'

const ObjectState = () => {


    const [student, setStudent] = useState({

        name: "Harinath",
        Role: "Developer",
        Age: 26

    })
  return (
    
    <div>
      
            <h1> Name : {student.name} </h1>
            <h1> Role : {student.Role} </h1>
            <h1> student : {student.Age} </h1>

            <button onClick={()=> setStudent({...student, Age: 27, Role:"Architect"})} > Add  </button>


    </div>
  )
}

export default ObjectState

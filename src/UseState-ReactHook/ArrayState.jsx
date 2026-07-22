import React, { useState } from 'react'

const ArrayState = () => {


    const [students, setStudents] = useState(["Ram ","Sita ","Lakshman "])

    const addStudent = () => {
        setStudents([...students, "Narayan"])
    }


  return (
    <div>
      <h1> Array State Management </h1>

      <button onClick={ addStudent }> add </button>

      <ul>
        {students.map((student,index)=> (
            <li key={index}> {student} </li>
        ))}
      </ul>

    </div>
  )
}

export default ArrayState

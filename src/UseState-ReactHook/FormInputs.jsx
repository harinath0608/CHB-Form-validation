import React, { useState } from 'react'

const FormInputs = () => {

    const [name, setName] = useState("RAM")

  return (
    <div>

      <input type="text"  onChange={(e) => setName(e.target.value) }  />

      <h3> {name} </h3>





    </div>
  )
}

export default FormInputs ; 

import React, { useState } from 'react'

const Counter = () => {

const [count, setCount] = useState(0)

  return (

    <div>

      <h1>  Current Value : {count} </h1>

      <button onClick={()=> setCount(count+1)  } > inc </button>

       <button onClick={()=> setCount(0)} > reset </button>

      <button onClick={()=> setCount(count-1)} > dec </button>

    </div>
  )
}

export default Counter

import React, { useRef } from 'react'

const Useref = () => {

    const inputRef = useRef()

    const FocusInput = () => {
        inputRef.current.focus();
    }

  return (
    <div>

        <input type="text" placeholder='"Enter a text' ref={inputRef} />

        <button  onClick={FocusInput}>  Focus  </button>
      
    </div>
  )
}

export default Useref

import React, { useMemo, useState } from 'react'

const UseMemo = () => {

    const [search, setSearch] = useState("")

    const products = [
        "Laptop", "Mobile","Mouse", "keyboard"
    ]

    const result = useMemo(()=> {
        return products.filter(item => 
            item.toLowerCase().includes(search.toLowerCase())
        )
    }, [search])


  return (
    <div>

        <input value={search} onChange={(e)=> setSearch(e.target.value)}
        placeholder='Search' 
        />


        {
            result.map(item => (
                <p key={item} > {item} </p>
            ))
        }
      
    </div>
  )
}

export default UseMemo

import React from 'react'

const RankCard =(props)=> {
    return (
        <div>
            <h2> {props.name}  </h2>

            <p>  {props.totalMarks} </p>

            <button>  {props.grade} </button>
        </div>
    )
}

export default RankCard ;
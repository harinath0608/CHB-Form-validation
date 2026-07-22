import React from 'react'
import EmployeeCard from './EmployeeCard'
import RankCard from './RankCard'

const Props = () => {

    const name = "React"

    const age = 19

  return (
    <div>

        <h1 className='title'> Jsx & Props  </h1>

        <EmployeeCard name="Darshan" role="Developer" />

        <RankCard name = "Rohan" totalMarks = "550" grade = "A" />
      
    </div>
  )
}

export default Props

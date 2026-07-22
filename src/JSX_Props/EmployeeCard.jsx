import React from 'react'

const EmployeeCard = ({ name, role }) => {

  return (
    <div>

      <div className="card" style={{ width: "18rem"}}>
          <div className="card-body">
            <h5 className="card-title"> {name} </h5>
            <p className="card-text"> Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
            <a href="#" className="btn btn-primary"> {role} </a>
          </div>
      </div>

    </div>
  )
}

export default EmployeeCard

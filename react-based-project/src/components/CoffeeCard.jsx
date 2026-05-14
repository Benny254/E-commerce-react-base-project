import React from 'react'

const CoffeeCard = ({ coffee }) => {
 return (
  <>
    <div>
      <h2>name: {coffee.name}</h2>
      <p>description: {coffee.description}</p>
      <p>Origin: {coffee.origin}</p>
      <p>Price: {coffee.price}</p>
    </div>
</>
  )
}

export default CoffeeCard
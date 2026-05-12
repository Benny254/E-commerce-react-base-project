import React from 'react'

const CoffeeCard = (Coffee) => {
  return (
    <div>
      {Coffee.Name}
      {Coffee.Description}
      {Coffee.Origin}
      {Coffee.Price} 
    </div>
  )
}

export default CoffeeCard
import React from 'react'
import './CoffeeCard.css'

const CoffeeCard = ({ coffee }) => {
  return (
    <article className="coffee-card">
      {coffee.imageUrl && (
        <img
          className="coffee-card-image"
          src={coffee.imageUrl}
          alt={coffee.name}
        />
      )}
      <div className="coffee-card-body">
        <h3 className="coffee-card-title">{coffee.name}</h3>
        <p className="coffee-card-description">{coffee.description}</p>
        <p className="coffee-card-origin">Origin: {coffee.origin}</p>
        <p className="coffee-card-price">Price: {coffee.price}</p>
        <button type="button" className="coffee-card-button">
          Add to cart
        </button>
      </div>
    </article>
  )
}

export default CoffeeCard
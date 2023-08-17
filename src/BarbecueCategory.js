import React, { useState, useEffect } from 'react'
import axios from 'axios'

function BarbecueCategory() {
  const [barbecueItems, setBarbecueItems] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/api/barbecue').then(response => {
      setBarbecueItems(response.data)
    })
  }, [])

  return (
    <div className="category-page">
      <h2>Barbecue Category</h2>
      <ul>
        {barbecueItems.map(item => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>Price: ${item.price.toFixed(2)}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BarbecueCategory


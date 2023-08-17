import React, { useState, useEffect } from 'react'
import axios from 'axios'

function SeafoodCategory() {
  const [seafoodItems, setSeafoodItems] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/api/seafood').then(response => {
      setSeafoodItems(response.data)
    })
  }, [])

  return (
    <div className="category-page">
      <h2>Seafood Category</h2>
      <ul>
        {seafoodItems.map(item => (
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

export default SeafoodCategory


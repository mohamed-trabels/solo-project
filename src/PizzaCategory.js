import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PizzaCategory() {
  const [pizzaItems, setPizzaItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/pizza').then(response => {
      setPizzaItems(response.data);
    });
  }, []);

  return (
    <div className="category-page">
      <h2>Pizza Category</h2>
      <ul>
        {pizzaItems.map(item => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>Price: ${item.price.toFixed(2)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PizzaCategory;


import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SandwichCategory() {
  const [sandwichItems, setSandwichItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/sandwich').then(response => {
      setSandwichItems(response.data);
    });
  }, []);

  return (
    <div className="category-page">
      <h2>Sandwich Category</h2>
      <ul>
        {sandwichItems.map(item => (
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

export default SandwichCategory;
